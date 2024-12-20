class Api::V1::EmployeesController < ApiController
  before_action :set_employess, only: [:show]

  rescue_from ActiveRecord::RecordNotFound do |exception|
    render json: { error: '404 not found' }, status: 404
  end

  def index
    employees = Employee.select(:id, :name, :department, :gender)
    render json: employees
  end

  def show
    render json: @employee
  end

  private

    def set_employess
      @employee = Employee.find(params[:id])
    end
end