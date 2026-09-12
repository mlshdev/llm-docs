> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/requestyield()](https://developer.apple.com/documentation/imagecapturecore/icdevice/requestyield())

# requestYield() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Requests that device module in control of this device yield control.

> Requesting a device yield is no longer avaialble

## Declaration

```swift
func requestYield()
```

<a id="Discussion"></a>

## Discussion

Use this method only if the client will communicate with the device directly. The device module may not yield control of the device if it has an open session.

## See Also

### Deprecated Symbols

- [requestEjectOrDisconnect()](requestejectordisconnect%28%29.md): Deprecated. Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [moduleExecutableArchitecture](moduleexecutablearchitecture.md): Deprecated. The executable architecture of the device module servicing the requests.

# requestYield (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Requests that device module in control of this device yield control.

> Requesting a device yield is no longer avaialble

## Declaration

```objectivec
- (void) requestYield;
```

<a id="Discussion"></a>

## Discussion

Use this method only if the client will communicate with the device directly. The device module may not yield control of the device if it has an open session.

## See Also

### Deprecated Symbols

- [requestEjectOrDisconnect](requestejectordisconnect%28%29.md): Deprecated. Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [moduleExecutableArchitecture](moduleexecutablearchitecture.md): Deprecated. The executable architecture of the device module servicing the requests.
