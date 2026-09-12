> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/isacquired](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/isacquired)

# isAcquired (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A Boolean value that indicates whether the racing wheel sends events to the app.

## Declaration

```swift
var isAcquired: Bool { get }
```

## See Also

### Getting events

- [acquireDevice()](acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [relinquishDevice()](relinquishdevice%28%29.md): Stops receiving events from the racing wheel.

# acquired (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

A Boolean value that indicates whether the racing wheel sends events to the app.

## Declaration

```objectivec
@property (readonly, getter=isAcquired) BOOL acquired;
```

## See Also

### Getting events

- [acquireDeviceWithError:](acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [relinquishDevice](relinquishdevice%28%29.md): Stops receiving events from the racing wheel.
