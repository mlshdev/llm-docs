> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/requestuploadfile(_:options:uploaddelegate:diduploadselector:contextinfo:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestuploadfile(_:options:uploaddelegate:diduploadselector:contextinfo:))

# requestUploadFile(\_:options:uploadDelegate:didUploadSelector:contextInfo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 14.0)

Uploads a file to the camera.

> Sandbox restrictions prohibit writing directly to device hardware

## Declaration

```swift
func requestUploadFile(_ fileURL: URL, options: [ICUploadOption : Any] = [:], uploadDelegate: Any, didUploadSelector selector: Selector, contextInfo: UnsafeMutableRawPointer?)
```

<a id="Discussion"></a>

## Discussion

The `uploadDelegate` must implement a function with the signature `- (void)didUploadFile:(NSURL*)fileURL error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

## See Also

### Uploading Files

- [ICUploadOption](../icuploadoption.md): An option for uploading a file to the camera.

# requestUploadFile:options:uploadDelegate:didUploadSelector:contextInfo: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 14.0)

Uploads a file to the camera.

> Sandbox restrictions prohibit writing directly to device hardware

## Declaration

```objectivec
- (void) requestUploadFile:(NSURL *) fileURL options:(NSDictionary<NSString *,id> *) options uploadDelegate:(id) uploadDelegate didUploadSelector:(SEL) selector contextInfo:(void *) contextInfo;
```

<a id="Discussion"></a>

## Discussion

The `uploadDelegate` must implement a function with the signature `- (void)didUploadFile:(NSURL*)fileURL error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

## See Also

### Uploading Files

- [ICUploadOption](../icuploadoption.md): An option for uploading a file to the camera.
