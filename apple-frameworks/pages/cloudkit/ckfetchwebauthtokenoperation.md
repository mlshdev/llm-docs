> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchwebauthtokenoperation](https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation)

# CKFetchWebAuthTokenOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.1+ · visionOS 1.0+ · watchOS 3.0+

An operation that creates an authentication token for use with CloudKit web services.

## Declaration

```swift
class CKFetchWebAuthTokenOperation
```

## Mentioned In

- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md)

<a id="overview"></a>

## Overview

CloudKit web services provides an HTTP interface to fetch, create, update, and delete records, zones, and subscriptions. Each request you send requires an API token, which you configure in [CloudKit Dashboard](https://icloud.developer.apple.com). You must create an API token for each container in each environment.

If you want to send a request to an endpoint that requires an authenticated user, use this operation to fetch an authentication token. Append the authentication token, along with the API token, to the endpoint’s URL. That request then acts on behalf of the current user. Authentication tokens are short-lived and expire after a single use.

For an example of using a web authentication token with a CloudKit web service, see [Changing Access Controls on User Data](changing-access-controls-on-user-data.md).

This operation executes the handlers you provide on a background queue. Tasks that need access to the main queue must redirect as appropriate.

The operation calls [fetchWebAuthTokenCompletionBlock](ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock.md) after it executes to provide the fetched token. Use the completion handler to perform housekeeping tasks for the operation. It should also manage any failures, whether due to an error or an explicit cancellation.

> **Note**

> Because this class inherits from [Operation](../foundation/operation.md), you can also set the [completionBlock](../foundation/operation/completionblock.md) property. The operation calls both completion handlers if they’re both set.

CloudKit operations have a default QoS of [QualityOfService.default](../foundation/qualityofservice/default.md). Operations with this service level are discretionary. The system schedules their execution at an optimal time according to battery level and network conditions, among other factors. Use the [qualityOfService](../foundation/operation/qualityofservice.md) property to set a more appropriate QoS for the operation.

The following example shows how to create the operation, configure its callbacks, and execute it in the user’s private database:

```swift
func fetchWebAuthToken(for apiToken: String,
    completion: @escaping (Result<String, any Error>) -> Void) {

    // Create the operation using the API token
    // that the caller provides to the method.
    let operation = CKFetchWebAuthTokenOperation(apiToken: apiToken)

    // If the operation fails, return the error to the caller.
    // Otherwise, return the fetched authentication token.
    operation.fetchWebAuthTokenCompletionBlock = { webToken, error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(webToken!))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // private database's queue to execute it.
    operation.qualityOfService = .utility
    CKContainer.default().privateCloudDatabase.add(operation)
}
```

## Topics

### Creating a Fetch Token Operation

- [init(apiToken:)](ckfetchwebauthtokenoperation/init%28apitoken_%29-14712.md): Creates a fetch operation for the specified API token.
- [init()](ckfetchwebauthtokenoperation/init%28%29.md): Creates an empty fetch operation.

### Managing the Operation’s Configuration

- [apiToken](ckfetchwebauthtokenoperation/apitoken.md): The API token that allows access to an app’s container.
- [fetchWebAuthTokenCompletionBlock](ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock.md): Deprecated. The block to execute when the operation finishes.

### Initializers

- [init(APIToken:)](ckfetchwebauthtokenoperation/init%28apitoken_%29-6oo0y.md)

### Instance Properties

- [fetchWebAuthTokenResultBlock](ckfetchwebauthtokenoperation/fetchwebauthtokenresultblock.md): The closure to execute when the operation finishes.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Privacy

- [Encrypting User Data](encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [Responding to Requests to Delete Data](responding-to-requests-to-delete-data.md): Provide options for users to delete their CloudKit data from your app.
- [Identifying an App’s Containers](identifying-an-app-s-containers.md): Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.

# CKFetchWebAuthTokenOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.1+ · visionOS 1.0+ · watchOS 3.0+

An operation that creates an authentication token for use with CloudKit web services.

## Declaration

```objectivec
@interface CKFetchWebAuthTokenOperation : CKDatabaseOperation
```

## Mentioned In

- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md)

<a id="overview"></a>

## Overview

CloudKit web services provides an HTTP interface to fetch, create, update, and delete records, zones, and subscriptions. Each request you send requires an API token, which you configure in [CloudKit Dashboard](https://icloud.developer.apple.com). You must create an API token for each container in each environment.

If you want to send a request to an endpoint that requires an authenticated user, use this operation to fetch an authentication token. Append the authentication token, along with the API token, to the endpoint’s URL. That request then acts on behalf of the current user. Authentication tokens are short-lived and expire after a single use.

For an example of using a web authentication token with a CloudKit web service, see [Changing Access Controls on User Data](changing-access-controls-on-user-data.md).

This operation executes the handlers you provide on a background queue. Tasks that need access to the main queue must redirect as appropriate.

The operation calls [fetchWebAuthTokenCompletionBlock](ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock.md) after it executes to provide the fetched token. Use the completion handler to perform housekeeping tasks for the operation. It should also manage any failures, whether due to an error or an explicit cancellation.

> **Note**

> Because this class inherits from [NSOperation](../foundation/operation.md), you can also set the [completionBlock](../foundation/operation/completionblock.md) property. The operation calls both completion handlers if they’re both set.

CloudKit operations have a default QoS of [NSQualityOfServiceDefault](../foundation/qualityofservice/default.md). Operations with this service level are discretionary. The system schedules their execution at an optimal time according to battery level and network conditions, among other factors. Use the [qualityOfService](../foundation/operation/qualityofservice.md) property to set a more appropriate QoS for the operation.

The following example shows how to create the operation, configure its callbacks, and execute it in the user’s private database:

```swift
func fetchWebAuthToken(for apiToken: String,
    completion: @escaping (Result<String, any Error>) -> Void) {

    // Create the operation using the API token
    // that the caller provides to the method.
    let operation = CKFetchWebAuthTokenOperation(apiToken: apiToken)

    // If the operation fails, return the error to the caller.
    // Otherwise, return the fetched authentication token.
    operation.fetchWebAuthTokenCompletionBlock = { webToken, error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(webToken!))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // private database's queue to execute it.
    operation.qualityOfService = .utility
    CKContainer.default().privateCloudDatabase.add(operation)
}
```

## Topics

### Creating a Fetch Token Operation

- [initWithAPIToken:](ckfetchwebauthtokenoperation/init%28apitoken_%29-14712.md): Creates a fetch operation for the specified API token.
- [init](ckfetchwebauthtokenoperation/init%28%29.md): Creates an empty fetch operation.

### Managing the Operation’s Configuration

- [APIToken](ckfetchwebauthtokenoperation/apitoken.md): The API token that allows access to an app’s container.
- [fetchWebAuthTokenCompletionBlock](ckfetchwebauthtokenoperation/fetchwebauthtokencompletionblock.md): Deprecated. The block to execute when the operation finishes.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Privacy

- [Encrypting User Data](encrypting-user-data.md): Deploy industry-standard security technologies using CloudKit encryption.
- [Providing User Access to CloudKit Data](providing-user-access-to-cloudkit-data.md): Provide users access to the data your app stores on their behalf.
- [Changing Access Controls on User Data](changing-access-controls-on-user-data.md): Restrict access to or remove restrictions from a user’s data at their request.
- [Responding to Requests to Delete Data](responding-to-requests-to-delete-data.md): Provide options for users to delete their CloudKit data from your app.
- [Identifying an App’s Containers](identifying-an-app-s-containers.md): Use Xcode’s Project navigator to find the identifiers of active CloudKit containers.
