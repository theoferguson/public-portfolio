class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.text :email
      t.integer :logins_count

      t.timestamps
    end
  end
end
