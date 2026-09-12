> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevicedidbecomeavailable(_:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevicedidbecomeavailable(_:))

# scannerDeviceDidBecomeAvailable(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when another client closes the current open session on the scanner.

## Declaration

```swift
optional func scannerDeviceDidBecomeAvailable(_ scanner: ICScannerDevice)
```

<a id="Discussion"></a>

## Discussion

Scanners require exclusive access. Only one client can open a session on a scanner at a time. The scanner is available if it does not have a session opened by another client. Attempting to open a session on a scanner that already has an open session for another client will result in an error.

To open a session on a scanner as soon as it is available, implement this method and call [requestOpenSession()](../icdevice/requestopensession%28%29.md) in the method body.

# scannerDeviceDidBecomeAvailable: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when another client closes the current open session on the scanner.

## Declaration

```objectivec
- (void) scannerDeviceDidBecomeAvailable:(ICScannerDevice *) scanner;
```

<a id="Discussion"></a>

## Discussion

Scanners require exclusive access. Only one client can open a session on a scanner at a time. The scanner is available if it does not have a session opened by another client. Attempting to open a session on a scanner that already has an open session for another client will result in an error.

To open a session on a scanner as soon as it is available, implement this method and call [requestOpenSession](../icdevice/requestopensession%28%29.md) in the method body.
