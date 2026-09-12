> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/presentswithtransaction](https://developer.apple.com/documentation/metalkit/mtkview/presentswithtransaction)

# presentsWithTransaction (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the view presents its content using a Core Animation transaction.

## Declaration

```swift
var presentsWithTransaction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property mirrors the value on the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) object, and determines whether the view synchronizes updates to its own contents with other content changes in Core Animation. For more information about how this property affects your rendering code, see [presentsWithTransaction](../../quartzcore/cametallayer/presentswithtransaction.md).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [isPaused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw()](draw%28%29.md): Redraws the view’s contents immediately.

# presentsWithTransaction (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that determines whether the view presents its content using a Core Animation transaction.

## Declaration

```objectivec
@property (nonatomic) BOOL presentsWithTransaction;
```

<a id="Discussion"></a>

## Discussion

This property mirrors the value on the underlying [CAMetalLayer](../../quartzcore/cametallayer.md) object, and determines whether the view synchronizes updates to its own contents with other content changes in Core Animation. For more information about how this property affects your rendering code, see [presentsWithTransaction](../../quartzcore/cametallayer/presentswithtransaction.md).

## See Also

### Configuring Drawing Behavior

- [preferredFramesPerSecond](preferredframespersecond.md): The rate at which the view redraws its contents.
- [paused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw](draw%28%29.md): Redraws the view’s contents immediately.
