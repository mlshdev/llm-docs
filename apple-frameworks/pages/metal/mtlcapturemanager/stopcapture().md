> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/stopcapture()](https://developer.apple.com/documentation/metal/mtlcapturemanager/stopcapture())

# stopCapture() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Stops capturing Metal commands.

## Declaration

```swift
func stopCapture()
```

<a id="discussion"></a>

## Discussion

Calling this method stops a capture that was started manually in Xcode or programmatically by calling one of the methods on [MTLCaptureManager](../mtlcapturemanager.md).

When using a custom capture scope, calling this function preempts any [end()](../mtlcapturescope/end%28%29.md) demarcations of the capture scope.

# stopCapture (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Stops capturing Metal commands.

## Declaration

```objectivec
- (void) stopCapture;
```

<a id="discussion"></a>

## Discussion

Calling this method stops a capture that was started manually in Xcode or programmatically by calling one of the methods on [MTLCaptureManager](../mtlcapturemanager.md).

When using a custom capture scope, calling this function preempts any [endScope](../mtlcapturescope/end%28%29.md) demarcations of the capture scope.
