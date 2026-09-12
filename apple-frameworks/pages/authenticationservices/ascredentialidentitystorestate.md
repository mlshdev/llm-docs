> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystorestate](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystorestate)

# ASCredentialIdentityStoreState (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A representation of the state of a credential identity store.

## Declaration

```swift
class ASCredentialIdentityStoreState
```

## Topics

### Checking the state

- [isEnabled](ascredentialidentitystorestate/isenabled.md): A Boolean value indicating whether the credential identity store is enabled.
- [supportsIncrementalUpdates](ascredentialidentitystorestate/supportsincrementalupdates.md): A Boolean value indicating whether the credential identity store supports incremental updates.

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

### Checking the state of the store

- [getState(\_:)](ascredentialidentitystore/getstate%28__%29.md): Gets the state of the credential identity store.

# ASCredentialIdentityStoreState (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A representation of the state of a credential identity store.

## Declaration

```objectivec
@interface ASCredentialIdentityStoreState : NSObject
```

## Topics

### Checking the state

- [enabled](ascredentialidentitystorestate/isenabled.md): A Boolean value indicating whether the credential identity store is enabled.
- [supportsIncrementalUpdates](ascredentialidentitystorestate/supportsincrementalupdates.md): A Boolean value indicating whether the credential identity store supports incremental updates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Checking the state of the store

- [getCredentialIdentityStoreStateWithCompletion:](ascredentialidentitystore/getstate%28__%29.md): Gets the state of the credential identity store.
