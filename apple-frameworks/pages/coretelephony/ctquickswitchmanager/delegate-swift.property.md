> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager/delegate-swift.property](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager/delegate-swift.property)

# delegate (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object the system notifies to respond to quick switch events.

## Declaration

```swift
weak var delegate: (any CTQuickSwitchManager.Delegate)? { get set }
```

## See Also

### Adopting iPhone quick switch

- [CTQuickSwitchManager](../ctquickswitchmanager.md): An object that enables an app to register and query a device’s quick switch state.
- [CTQuickSwitchManager.Delegate](delegate-swift.protocol.md): Methods you implement to respond to changes in a device’s quick switch state.

# delegate (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object the system notifies to respond to quick switch events.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CTQuickSwitchManagerDelegate> delegate;
```

## See Also

### Adopting iPhone quick switch

- [CTQuickSwitchManager](../ctquickswitchmanager.md): An object that enables an app to register and query a device’s quick switch state.
- [CTQuickSwitchManagerDelegate](delegate-swift.protocol.md): Methods you implement to respond to changes in a device’s quick switch state.
