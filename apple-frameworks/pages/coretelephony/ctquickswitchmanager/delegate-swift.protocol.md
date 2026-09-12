> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager/delegate-swift.protocol](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager/delegate-swift.protocol)

# CTQuickSwitchManager.Delegate (Swift)

**Framework:** Core Telephony  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Methods you implement to respond to changes in a device’s quick switch state.

## Declaration

```swift
protocol Delegate : NSObjectProtocol
```

## Topics

### Responding to quick switch state changes

- [quickSwitchManager(\_:didChangeTo:)](delegate-swift.protocol/quickswitchmanager%28__didchangeto_%29.md): Indicates there’s been a change in device’s quick switch state.

## Relationships

### Inherits From

- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Adopting iPhone quick switch

- [CTQuickSwitchManager](../ctquickswitchmanager.md): An object that enables an app to register and query a device’s quick switch state.
- [delegate](delegate-swift.property.md): An object the system notifies to respond to quick switch events.

# CTQuickSwitchManagerDelegate (Objective-C)

**Framework:** Core Telephony  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Methods you implement to respond to changes in a device’s quick switch state.

## Declaration

```objectivec
@protocol CTQuickSwitchManagerDelegate <NSObject>
```

## Topics

### Responding to quick switch state changes

- [quickSwitchManager:didChangeToState:](delegate-swift.protocol/quickswitchmanager%28__didchangeto_%29.md): Indicates there’s been a change in device’s quick switch state.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobjectprotocol.md)

## See Also

### Adopting iPhone quick switch

- [CTQuickSwitchManager](../ctquickswitchmanager.md): An object that enables an app to register and query a device’s quick switch state.
- [delegate](delegate-swift.property.md): An object the system notifies to respond to quick switch events.
