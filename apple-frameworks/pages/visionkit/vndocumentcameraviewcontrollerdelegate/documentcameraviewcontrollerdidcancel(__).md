> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel(_:)](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontrollerdidcancel(_:))

# documentCameraViewControllerDidCancel(\_:) (Swift)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user canceled out of the document scanner camera.

## Declaration

```swift
optional func documentCameraViewControllerDidCancel(_ controller: VNDocumentCameraViewController)
```

## Parameters

- `controller`: The document camera view controller in which the user canceled.

## See Also

### Determining scan results

- [documentCameraViewController(\_:didFinishWith:)](documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewController(\_:didFailWithError:)](documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.

# documentCameraViewControllerDidCancel: (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user canceled out of the document scanner camera.

## Declaration

```objectivec
- (void) documentCameraViewControllerDidCancel:(VNDocumentCameraViewController *) controller;
```

## Parameters

- `controller`: The document camera view controller in which the user canceled.

## See Also

### Determining scan results

- [documentCameraViewController:didFinishWithScan:](documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewController:didFailWithError:](documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.
