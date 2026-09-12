> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/defaultcapturescope](https://developer.apple.com/documentation/metal/mtlcapturemanager/defaultcapturescope)

# defaultCaptureScope (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The capture scope to use when a capture is initiated in Xcode.

## Declaration

```swift
var defaultCaptureScope: (any MTLCaptureScope)? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify a default capture scope for Xcode to use when the user presses the capture button. You can still long-press the button to select a different capture scope.

The default value is `nil.` When the value is `nil`, the capture scope is defined by drawable presentation boundaries; such as those created by calls to [present(\_:)](../mtlcommandbuffer/present%28__%29.md) or [present()](../mtldrawable/present%28%29.md).

## See Also

### Creating a capture scope

- [makeCaptureScope(device:)](makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [makeCaptureScope(commandQueue:)](makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.

# defaultCaptureScope (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The capture scope to use when a capture is initiated in Xcode.

## Declaration

```objectivec
@property (atomic, strong, readwrite, nullable) id<MTLCaptureScope> defaultCaptureScope;
```

<a id="discussion"></a>

## Discussion

Use this property to specify a default capture scope for Xcode to use when the user presses the capture button. You can still long-press the button to select a different capture scope.

The default value is `nil.` When the value is `nil`, the capture scope is defined by drawable presentation boundaries; such as those created by calls to [presentDrawable:](../mtlcommandbuffer/present%28__%29.md) or [present](../mtldrawable/present%28%29.md).

## See Also

### Creating a capture scope

- [newCaptureScopeWithDevice:](makecapturescope%28device_%29.md): Creates a capture scope for commands submitted to a specific device object.
- [newCaptureScopeWithCommandQueue:](makecapturescope%28commandqueue_%29-1rozd.md): Creates a capture scope for commands submitted to a specific command queue.
