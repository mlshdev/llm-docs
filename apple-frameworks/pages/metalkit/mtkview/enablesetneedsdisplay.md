> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/enablesetneedsdisplay](https://developer.apple.com/documentation/metalkit/mtkview/enablesetneedsdisplay)

# enableSetNeedsDisplay (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md).

## Declaration

```swift
var enableSetNeedsDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value and the value of [isPaused](ispaused.md) are [true](https://developer.apple.com/documentation/swift/true), the view behaves similarly to a [UIView](../../uikit/uiview.md) object, responding to calls to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md). In this case, the view’s internal draw loop is paused and updates are event-driven instead.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [isPaused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [draw()](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

# enableSetNeedsDisplay (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view responds to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md).

## Declaration

```objectivec
@property (nonatomic) BOOL enableSetNeedsDisplay;
```

<a id="Discussion"></a>

## Discussion

If this value and the value of [paused](ispaused.md) are [true](https://developer.apple.com/documentation/swift/true), the view behaves similarly to a [UIView](../../uikit/uiview.md) object, responding to calls to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md). In this case, the view’s internal draw loop is paused and updates are event-driven instead.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [paused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [draw](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.
