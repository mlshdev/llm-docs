> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller(_:didfinishwith:)](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller(_:didfinishwith:))

# documentCameraViewController(\_:didFinishWith:) (Swift)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user successfully saved a scanned document from the document camera.

## Declaration

```swift
optional func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFinishWith scan: VNDocumentCameraScan)
```

## Parameters

- `controller`: The document camera view controller that captured the scan.
- `scan`: The scanned document that the camera detected.

## See Also

### Determining scan results

- [documentCameraViewControllerDidCancel(\_:)](documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.
- [documentCameraViewController(\_:didFailWithError:)](documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.

# documentCameraViewController:didFinishWithScan: (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user successfully saved a scanned document from the document camera.

## Declaration

```objectivec
- (void) documentCameraViewController:(VNDocumentCameraViewController *) controller didFinishWithScan:(VNDocumentCameraScan *) scan;
```

## Parameters

- `controller`: The document camera view controller that captured the scan.
- `scan`: The scanned document that the camera detected.

## See Also

### Determining scan results

- [documentCameraViewControllerDidCancel:](documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.
- [documentCameraViewController:didFailWithError:](documentcameraviewcontroller%28__didfailwitherror_%29.md): Tells the delegate that document scanning failed while the camera view controller was active.
