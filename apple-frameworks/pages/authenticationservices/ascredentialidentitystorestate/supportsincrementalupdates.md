> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystorestate/supportsincrementalupdates](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystorestate/supportsincrementalupdates)

# supportsIncrementalUpdates (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the credential identity store supports incremental updates.

## Declaration

```swift
var supportsIncrementalUpdates: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Examine the value returned by this property to find out if the credential identity store can accept incremental updates. If incremental updates are supported, you can update the credential identity store with only the new changes since the last time it was updated. Otherwise, update the credential identity store by adding all credential identities.

## See Also

### Checking the state

- [isEnabled](isenabled.md): A Boolean value indicating whether the credential identity store is enabled.

# supportsIncrementalUpdates (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the credential identity store supports incremental updates.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsIncrementalUpdates;
```

<a id="Discussion"></a>

## Discussion

Examine the value returned by this property to find out if the credential identity store can accept incremental updates. If incremental updates are supported, you can update the credential identity store with only the new changes since the last time it was updated. Otherwise, update the credential identity store by adding all credential identities.

## See Also

### Checking the state

- [enabled](isenabled.md): A Boolean value indicating whether the credential identity store is enabled.
