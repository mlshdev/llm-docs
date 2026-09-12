> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystore/getstate(_:)](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystore/getstate(_:))

# getState(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Gets the state of the credential identity store.

## Declaration

```swift
func getState(_ completion: @escaping @Sendable (ASCredentialIdentityStoreState) -> Void)
```

```swift
func state() async -> ASCredentialIdentityStoreState
```

## Parameters

- `completion`: A block the method calls to return the current identity store state.

<a id="Discussion"></a>

## Discussion

Call this method to find out the current state of the store before attempting to call other store methods. Examine the [ASCredentialIdentityStoreState](../ascredentialidentitystorestate.md) value passed to your completion handler to find out whether the store is enabled and whether it supports incremental updates.

## See Also

### Checking the state of the store

- [ASCredentialIdentityStoreState](../ascredentialidentitystorestate.md): A representation of the state of a credential identity store.

# getCredentialIdentityStoreStateWithCompletion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Gets the state of the credential identity store.

## Declaration

```objectivec
- (void) getCredentialIdentityStoreStateWithCompletion:(void (^)(ASCredentialIdentityStoreState *state)) completion;
```

## Parameters

- `completion`: A block the method calls to return the current identity store state.

<a id="Discussion"></a>

## Discussion

Call this method to find out the current state of the store before attempting to call other store methods. Examine the [ASCredentialIdentityStoreState](../ascredentialidentitystorestate.md) value passed to your completion handler to find out whether the store is enabled and whether it supports incremental updates.

## See Also

### Checking the state of the store

- [ASCredentialIdentityStoreState](../ascredentialidentitystorestate.md): A representation of the state of a credential identity store.
