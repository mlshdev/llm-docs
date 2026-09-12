> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/devicedidbecomeready(withcompletecontentcatalog:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/devicedidbecomeready(withcompletecontentcatalog:))

# deviceDidBecomeReady(withCompleteContentCatalog:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client that the camera device is done enumerating its content and is ready to receive requests.

## Declaration

```swift
func deviceDidBecomeReady(withCompleteContentCatalog device: ICCameraDevice)
```

<a id="Discussion"></a>

## Discussion

You must open a session on the device before you can enumerate its content and make it ready to receive requests.

# deviceDidBecomeReadyWithCompleteContentCatalog: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client that the camera device is done enumerating its content and is ready to receive requests.

## Declaration

```objectivec
- (void) deviceDidBecomeReadyWithCompleteContentCatalog:(ICCameraDevice *) device;
```

<a id="Discussion"></a>

## Discussion

You must open a session on the device before you can enumerate its content and make it ready to receive requests.
