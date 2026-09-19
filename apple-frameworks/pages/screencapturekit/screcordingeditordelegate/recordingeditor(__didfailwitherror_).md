> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/screcordingeditordelegate/recordingeditor(_:didfailwitherror:)

# recordingEditor(\_:didFailWithError:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func recordingEditor(_ editor: SCRecordingEditor, didFailWithError error: any Error)
```

<a id="discussion"></a>

## Discussion

recordingEditor:didFailWithError:

Called when the recording editor encounters an error.

# recordingEditor:didFailWithError: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) recordingEditor:(SCRecordingEditor *) editor didFailWithError:(NSError *) error;
```

<a id="discussion"></a>

## Discussion

recordingEditor:didFailWithError:

Called when the recording editor encounters an error.
