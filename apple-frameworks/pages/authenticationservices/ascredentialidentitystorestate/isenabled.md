> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentitystorestate/isenabled](https://developer.apple.com/documentation/authenticationservices/ascredentialidentitystorestate/isenabled)

# isEnabled (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the credential identity store is enabled.

## Declaration

```swift
var isEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You can only modify a credential identity store that’s enabled.

## See Also

### Checking the state

- [supportsIncrementalUpdates](supportsincrementalupdates.md): A Boolean value indicating whether the credential identity store supports incremental updates.

# enabled (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the credential identity store is enabled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

You can only modify a credential identity store that’s enabled.

## See Also

### Checking the state

- [supportsIncrementalUpdates](supportsincrementalupdates.md): A Boolean value indicating whether the credential identity store supports incremental updates.
