> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel/acquiredevice()](https://developer.apple.com/documentation/gamecontroller/gcracingwheel/acquiredevice())

# acquireDevice() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Starts receiving events from the racing wheel.

## Declaration

```swift
func acquireDevice() throws
```

<a id="Discussion"></a>

## Discussion

Before invoking this method, the racing wheel doesn’t deliver events to your app. Since only one app may receive racing wheel events at a time, this method can fail to acquire the device.

## See Also

### Getting events

- [relinquishDevice()](relinquishdevice%28%29.md): Stops receiving events from the racing wheel.
- [isAcquired](isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.

# acquireDeviceWithError: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Starts receiving events from the racing wheel.

## Declaration

```objectivec
- (BOOL) acquireDeviceWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Before invoking this method, the racing wheel doesn’t deliver events to your app. Since only one app may receive racing wheel events at a time, this method can fail to acquire the device.

## See Also

### Getting events

- [relinquishDevice](relinquishdevice%28%29.md): Stops receiving events from the racing wheel.
- [acquired](isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.
