> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/ispaused](https://developer.apple.com/documentation/metalkit/mtkview/ispaused)

# isPaused (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the draw loop is paused.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), the view periodically redraws the contents, at a frame rate set by the value of [preferredFramesPerSecond](preferredframespersecond.md).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw()](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

# paused (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the draw loop is paused.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

If the value is [false](https://developer.apple.com/documentation/swift/false), the view periodically redraws the contents, at a frame rate set by the value of [preferredFramesPerSecond](preferredframespersecond.md).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.
