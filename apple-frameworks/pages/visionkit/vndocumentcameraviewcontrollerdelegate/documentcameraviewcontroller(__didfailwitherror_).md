> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller(_:didfailwitherror:)](https://developer.apple.com/documentation/visionkit/vndocumentcameraviewcontrollerdelegate/documentcameraviewcontroller(_:didfailwitherror:))

# documentCameraViewController(\_:didFailWithError:) (Swift)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that document scanning failed while the camera view controller was active.

## Declaration

```swift
optional func documentCameraViewController(_ controller: VNDocumentCameraViewController, didFailWithError error: any Error)
```

## Parameters

- `controller`: The document camera view controller that failed.
- `error`: The error containing the reason for failure.

## See Also

### Determining scan results

- [documentCameraViewController(\_:didFinishWith:)](documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewControllerDidCancel(\_:)](documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.

# documentCameraViewController:didFailWithError: (Objective-C)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that document scanning failed while the camera view controller was active.

## Declaration

```objectivec
- (void) documentCameraViewController:(VNDocumentCameraViewController *) controller didFailWithError:(NSError *) error;
```

## Parameters

- `controller`: The document camera view controller that failed.
- `error`: The error containing the reason for failure.

## See Also

### Determining scan results

- [documentCameraViewController:didFinishWithScan:](documentcameraviewcontroller%28__didfinishwith_%29.md): Tells the delegate that the user successfully saved a scanned document from the document camera.
- [documentCameraViewControllerDidCancel:](documentcameraviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled out of the document scanner camera.
