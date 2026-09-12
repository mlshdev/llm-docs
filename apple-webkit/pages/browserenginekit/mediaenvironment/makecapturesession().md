> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/mediaenvironment/makecapturesession()](https://developer.apple.com/documentation/browserenginekit/mediaenvironment/makecapturesession())

# makeCaptureSession()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a new capture session in this media environment  or throws an error if it can not be created.

## Declaration

```swift
func makeCaptureSession() throws -> AVCaptureSession
```

<a id="discussion"></a>

## Discussion

The media environment must be activated before the capture session can be started.

## See Also

### Capturing media streams

- [activate()](activate%28%29.md): Deprecated. Activates the media environment.
- [suspend()](suspend%28%29.md): Deprecated. Suspends the media environment.
