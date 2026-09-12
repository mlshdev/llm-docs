> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation)

# CKDiscoverUserIdentitiesOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

An operation that uses the provided criteria to search for discoverable iCloud users.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
class CKDiscoverUserIdentitiesOperation
```

<a id="overview"></a>

## Overview

Use this operation to discover one or more iCloud users that match identity information you provide, such as email addresses and phone numbers.

Before CloudKit can return a user’s identity, you must ask for their permission by calling [requestApplicationPermission(\_:completionHandler:)](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md). Do this as part of any onboarding where you can highlight the benefits of being discoverable within the context of your app.

The operation executes the handlers you provide on an internal queue it manages. You must provide handlers capable of executing on a background queue. Tasks that need access to the main queue must redirect as appropriate.

The operation calls [discoverUserIdentitiesCompletionBlock](ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock.md) after it executes and returns results. Use the completion handler to perform housekeeping tasks for the operation. It should also manage any failures, whether due to an error or an explicit cancellation.

> **Note**

> Because this class inherits from [Operation](../foundation/operation.md), you can also set the [completionBlock](../foundation/operation/completionblock.md) property. The operation calls both completion handlers if they’re both set.

CloudKit operations have a default QoS of [QualityOfService.default](../foundation/qualityofservice/default.md). Operations with this service level are discretionary. The system schedules their execution at an optimal time according to battery level and network conditions, among other factors. Use the [qualityOfService](../foundation/operation/qualityofservice.md) property to set a more appropriate QoS for the operation.

The following example shows how to create the operation, configure its callbacks, and execute it using the default container’s queue:

```swift
func fetchUserIdentities(withEmails emails: [String],
    completion: @escaping (Result<[CKUserIdentity], any Error>) -> Void) {

    var identities = [CKUserIdentity]()

    // Convert the email addresses into instances of
    // CKUserIdentity.LookupInfo, which CloudKit uses
    // to discover identities.
    let lookupInfos =
        CKUserIdentity.LookupInfo.lookupInfos(withEmails: emails)

    // Create the operation using the array of lookup objects.
    let operation = CKDiscoverUserIdentitiesOperation(
        userIdentityLookupInfos: lookupInfos)

    // Cache the user identities as CloudKit discovers them.
    operation.userIdentityDiscoveredBlock = { userIdentity, _ in
        identities.append(userIdentity)
    }

    // If the operation fails, return the error to the caller.
    // Otherwise, return the array of discovered user identities.
    operation.discoverUserIdentitiesCompletionBlock = { error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(identities))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // default container's queue to execute it.
    operation.qualityOfService = .userInitiated
    CKContainer.default().add(operation)
}
```

## Topics

### Creating an Operation

- [init()](ckdiscoveruseridentitiesoperation/init%28%29.md): Deprecated. Creates an operation for discovering user identities.
- [init(userIdentityLookupInfos:)](ckdiscoveruseridentitiesoperation/init%28useridentitylookupinfos_%29.md): Deprecated. Creates an operation for discovering the user identities of the specified lookup infos.

### Configuring the Operation

- [userIdentityLookupInfos](ckdiscoveruseridentitiesoperation/useridentitylookupinfos.md): Deprecated. The lookup info for discovering user identities.

### Processing the Results

- [userIdentityDiscoveredBlock](ckdiscoveruseridentitiesoperation/useridentitydiscoveredblock.md): Deprecated. The closure to execute for each user identity.
- [discoverUserIdentitiesCompletionBlock](ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

### Instance Properties

- [discoverUserIdentitiesResultBlock](ckdiscoveruseridentitiesoperation/discoveruseridentitiesresultblock.md): Deprecated. The closure to execute when the operation finishes.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

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

### Deprecated classes

- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md): Deprecated. An operation that uses the device’s contacts to search for discoverable iCloud users.
- [CKFetchRecordChangesOperation](ckfetchrecordchangesoperation.md): Deprecated. An operation that reports on the changed and deleted records in the specified record zone.

# CKDiscoverUserIdentitiesOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

An operation that uses the provided criteria to search for discoverable iCloud users.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
@interface CKDiscoverUserIdentitiesOperation : CKOperation
```

<a id="overview"></a>

## Overview

Use this operation to discover one or more iCloud users that match identity information you provide, such as email addresses and phone numbers.

Before CloudKit can return a user’s identity, you must ask for their permission by calling [requestApplicationPermission:completionHandler:](ckcontainer/requestapplicationpermission%28__completionhandler_%29.md). Do this as part of any onboarding where you can highlight the benefits of being discoverable within the context of your app.

The operation executes the handlers you provide on an internal queue it manages. You must provide handlers capable of executing on a background queue. Tasks that need access to the main queue must redirect as appropriate.

The operation calls [discoverUserIdentitiesCompletionBlock](ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock.md) after it executes and returns results. Use the completion handler to perform housekeeping tasks for the operation. It should also manage any failures, whether due to an error or an explicit cancellation.

> **Note**

> Because this class inherits from [NSOperation](../foundation/operation.md), you can also set the [completionBlock](../foundation/operation/completionblock.md) property. The operation calls both completion handlers if they’re both set.

CloudKit operations have a default QoS of [NSQualityOfServiceDefault](../foundation/qualityofservice/default.md). Operations with this service level are discretionary. The system schedules their execution at an optimal time according to battery level and network conditions, among other factors. Use the [qualityOfService](../foundation/operation/qualityofservice.md) property to set a more appropriate QoS for the operation.

The following example shows how to create the operation, configure its callbacks, and execute it using the default container’s queue:

```swift
func fetchUserIdentities(withEmails emails: [String],
    completion: @escaping (Result<[CKUserIdentity], any Error>) -> Void) {

    var identities = [CKUserIdentity]()

    // Convert the email addresses into instances of
    // CKUserIdentity.LookupInfo, which CloudKit uses
    // to discover identities.
    let lookupInfos =
        CKUserIdentity.LookupInfo.lookupInfos(withEmails: emails)

    // Create the operation using the array of lookup objects.
    let operation = CKDiscoverUserIdentitiesOperation(
        userIdentityLookupInfos: lookupInfos)

    // Cache the user identities as CloudKit discovers them.
    operation.userIdentityDiscoveredBlock = { userIdentity, _ in
        identities.append(userIdentity)
    }

    // If the operation fails, return the error to the caller.
    // Otherwise, return the array of discovered user identities.
    operation.discoverUserIdentitiesCompletionBlock = { error in
        if let error = error {
            completion(.failure(error))
        } else {
            completion(.success(identities))
        }
    }

    // Set an appropriate QoS and add the operation to the
    // default container's queue to execute it.
    operation.qualityOfService = .userInitiated
    CKContainer.default().add(operation)
}
```

## Topics

### Creating an Operation

- [init](ckdiscoveruseridentitiesoperation/init%28%29.md): Deprecated. Creates an operation for discovering user identities.
- [initWithUserIdentityLookupInfos:](ckdiscoveruseridentitiesoperation/init%28useridentitylookupinfos_%29.md): Deprecated. Creates an operation for discovering the user identities of the specified lookup infos.

### Configuring the Operation

- [userIdentityLookupInfos](ckdiscoveruseridentitiesoperation/useridentitylookupinfos.md): Deprecated. The lookup info for discovering user identities.

### Processing the Results

- [userIdentityDiscoveredBlock](ckdiscoveruseridentitiesoperation/useridentitydiscoveredblock.md): Deprecated. The closure to execute for each user identity.
- [discoverUserIdentitiesCompletionBlock](ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

## See Also

### Deprecated classes

- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md): Deprecated. An operation that uses the device’s contacts to search for discoverable iCloud users.
- [CKFetchRecordChangesOperation](ckfetchrecordchangesoperation.md): Deprecated. An operation that reports on the changed and deleted records in the specified record zone.
