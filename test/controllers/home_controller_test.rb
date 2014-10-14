require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get home_main" do
    get :home_main
    assert_response :success
  end

end
