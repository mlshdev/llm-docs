> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager/delegate-swift.protocol/quickswitchmanager(_:didchangeto:)](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager/delegate-swift.protocol/quickswitchmanager(_:didchangeto:))

# quickSwitchManager(\_:didChangeTo:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates there’s been a change in device’s quick switch state.

## Declaration

```swift
optional func quickSwitchManager(_ quickSwitchManager: CTQuickSwitchManager, didChangeTo state: CTQuickSwitchState)
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive notification when the device’s quick switch state changes.

## See Also

### Related Documentation

- [CTQuickSwitchState](../../ctquickswitchstate.md): Values that describe a device’s quick switch status.

# quickSwitchManager:didChangeToState: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates there’s been a change in device’s quick switch state.

## Declaration

```objectivec
- (void) quickSwitchManager:(CTQuickSwitchManager *) quickSwitchManager didChangeToState:(CTQuickSwitchState) state;
```

<a id="Discussion"></a>

## Discussion

Implement this method to receive notification when the device’s quick switch state changes.

## See Also

### Related Documentation

- [CTQuickSwitchState](../../ctquickswitchstate.md): Values that describe a device’s quick switch status.
