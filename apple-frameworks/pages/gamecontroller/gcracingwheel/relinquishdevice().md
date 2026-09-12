> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/relinquishdevice()](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/relinquishdevice())

# relinquishDevice() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Stops receiving events from the racing wheel.

## Declaration

```swift
func relinquishDevice()
```

## See Also

### Getting events

- [acquireDevice()](acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [isAcquired](isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.

# relinquishDevice (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Stops receiving events from the racing wheel.

## Declaration

```objectivec
- (void) relinquishDevice;
```

## See Also

### Getting events

- [acquireDeviceWithError:](acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [acquired](isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.
