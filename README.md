# VRV Security API Assignment

## Endpoints

### 1. Authentication

#### `POST /user/`

-   **Description**: Register a user and
-   **Input**:
    ```json
    {
        "name": "string",
        "password": "string",
        "email": "string",
        "role" : "admin" | "user"
    }
    ```
-   **Output**:

    ```json
    {
        "message": "User created successfully"
    }
    ```

#### `POST /user/login`

-   **Description**: Logs out a user by invalidating the token.
-   **Input**:

    ```json
    {
        "email": "string",
        "password": "string"
    }
    ```

-   **Output**:

    ```json
    {
        "message": "User logged in successfully",
        "token": "token"
    }
    ```

### 2. User Route

#### `GET /user/info`

-   Access with user or admin role
-   **Description**: Register a user and
-   **Input**: NONE except token in header
-   **Output**:

    ```json
    {
        user : details of specific user

    }
    ```

### 2. Admin Route

#### `GET /admin/get-all-users`

-   Access with admin role
-   **Description**: Register a user and
-   **Input**: NONE except token in header
-   **Output**:

    ```json
    {
        user : Array of all users
    }
    ```

#### `GET /admin/get-user-by-email`

-   Access with admin role
-   **Description**: Register a user and
-   **Input**: email in header and Authentication token in header
-   **Output**:

    ```json
    {
        user : details of specific user
    }
    ```

## Authentication

All endpoints, except for `/user/login` and `/user/`, require a valid token to be included in the `Authorization` header:

```
authorization: Bearer <token>
```

## Contact

For any questions or issues, please contact [ranapavitar14@gmail.com](mailto:ranapavitar14@gmail.com).
