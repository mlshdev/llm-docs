> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/larightstore](https://developer.apple.com/documentation/localauthentication/larightstore)

# LARightStore (Swift)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A container for data protected by a right.

## Declaration

```swift
class LARightStore
```

<a id="overview"></a>

## Overview

Use an [LARightStore](larightstore.md) along with an [LARight](laright.md) to make secrets accessible only after certain conditions, including authentication, are met. Storing secrets this way lets you tie the availability of sensitive resources to the authorization status of the user.

The following stores a named access token behind the default authorization requirements:

```swift
func storeBackendAccessToken(_ token: Data) async throws {
    let loginRight = LARight()
    _ = try await LARightStore.shared.saveRight(loginRight, identifier: "access-token", secret: token)
}
```

The system stores your secret in the keychain and protects it with a unique key in the Secure Enclave. The system associates the key with your right and with an access control list that ensures that the data is only accessible after your access requirements are met.

You can retrieve stored secrets later using the right’s identifier:

```swift
func fetchBackendAccessToken() async throws -> Data {
    let loginRight = try await LARightStore.shared.right(forIdentifier: "access-token")

    // Authorize the right or else the secret is unavailable.
    try await loginRight.authorize(localizedReason: "Access sandcastle competition server")
    return try await loginRight.secret.rawData
}
```

## Topics

### Accessing rights

- [shared](larightstore/shared.md): A shared object that stores rights.
- [right(forIdentifier:completion:)](larightstore/right%28foridentifier_completion_%29.md): Fetches a previously stored right from the shared right store.

### Storing rights

- [saveRight(\_:identifier:completion:)](larightstore/saveright%28__identifier_completion_%29.md): Saves a right to a persistent right store.
- [saveRight(\_:identifier:secret:completion:)](larightstore/saveright%28__identifier_secret_completion_%29.md): Saves a right to a persistent store along with secret data you supply.

### Removing stored rights

- [removeRight(\_:completion:)](larightstore/removeright%28__completion_%29.md): Removes a right from the right store given an instance of that right.
- [removeRight(forIdentifier:completion:)](larightstore/removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.
- [removeAllRights(completion:)](larightstore/removeallrights%28completion_%29.md): Removes all rights associated with this client from the right store.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Persistence

- [LAPersistedRight](lapersistedright.md): A right that gates access to a key and a secret.
- [LASecret](lasecret.md): Data that’s protected by a persisted right.

# LARightStore (Objective-C)

**Framework:** Local Authentication  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A container for data protected by a right.

## Declaration

```objectivec
@interface LARightStore : NSObject
```

<a id="overview"></a>

## Overview

Use an [LARightStore](larightstore.md) along with an [LARight](laright.md) to make secrets accessible only after certain conditions, including authentication, are met. Storing secrets this way lets you tie the availability of sensitive resources to the authorization status of the user.

The following stores a named access token behind the default authorization requirements:

```swift
func storeBackendAccessToken(_ token: Data) async throws {
    let loginRight = LARight()
    _ = try await LARightStore.shared.saveRight(loginRight, identifier: "access-token", secret: token)
}
```

The system stores your secret in the keychain and protects it with a unique key in the Secure Enclave. The system associates the key with your right and with an access control list that ensures that the data is only accessible after your access requirements are met.

You can retrieve stored secrets later using the right’s identifier:

```swift
func fetchBackendAccessToken() async throws -> Data {
    let loginRight = try await LARightStore.shared.right(forIdentifier: "access-token")

    // Authorize the right or else the secret is unavailable.
    try await loginRight.authorize(localizedReason: "Access sandcastle competition server")
    return try await loginRight.secret.rawData
}
```

## Topics

### Accessing rights

- [sharedStore](larightstore/shared.md): A shared object that stores rights.
- [rightForIdentifier:completion:](larightstore/right%28foridentifier_completion_%29.md): Fetches a previously stored right from the shared right store.

### Storing rights

- [saveRight:identifier:completion:](larightstore/saveright%28__identifier_completion_%29.md): Saves a right to a persistent right store.
- [saveRight:identifier:secret:completion:](larightstore/saveright%28__identifier_secret_completion_%29.md): Saves a right to a persistent store along with secret data you supply.

### Removing stored rights

- [removeRight:completion:](larightstore/removeright%28__completion_%29.md): Removes a right from the right store given an instance of that right.
- [removeRightForIdentifier:completion:](larightstore/removeright%28foridentifier_completion_%29.md): Removes a right from the right store given its unique identifier.
- [removeAllRightsWithCompletion:](larightstore/removeallrights%28completion_%29.md): Removes all rights associated with this client from the right store.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Persistence

- [LAPersistedRight](lapersistedright.md): A right that gates access to a key and a secret.
- [LASecret](lasecret.md): Data that’s protected by a persisted right.
