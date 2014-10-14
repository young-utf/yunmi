class User < ActiveRecord::Base
	validate :username, :presence => { :message => "Id should be entered "}

end
