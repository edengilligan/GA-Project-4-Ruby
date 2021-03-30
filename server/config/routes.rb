Rails.application.routes.draw do
  get '/welcome', to: "welcome#index"
  resources :timesheets
end
