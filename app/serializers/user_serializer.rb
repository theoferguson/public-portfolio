class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :logins_count
end
