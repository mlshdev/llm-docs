> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/preferredframespersecond](https://developer.apple.com/documentation/metalkit/mtkview/preferredframespersecond)

# preferredFramesPerSecond (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The rate at which the view redraws its contents.

## Declaration

```swift
var preferredFramesPerSecond: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When your application sets its preferred frame rate, the view chooses a frame rate as close to that as possible based on the capabilities of the screen the view is displayed on. To provide a consistent frame rate, the actual frame rate chosen is usually a factor of the maximum refresh rate of the screen. For example, if the maximum refresh rate of the screen is `60` frames per second, that’s also the highest frame rate the view sets as the actual frame rate. However, if you ask for a lower frame rate, the view might choose `30`, `20`, or `15` frames per second, or another factor, as the actual frame rate.

Your application should choose a frame rate that it can consistently maintain. The default value is `60` frames per second.

## See Also

### Configuring Drawing Behavior

- [isPaused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay()](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw()](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.

# preferredFramesPerSecond (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The rate at which the view redraws its contents.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredFramesPerSecond;
```

<a id="Discussion"></a>

## Discussion

When your application sets its preferred frame rate, the view chooses a frame rate as close to that as possible based on the capabilities of the screen the view is displayed on. To provide a consistent frame rate, the actual frame rate chosen is usually a factor of the maximum refresh rate of the screen. For example, if the maximum refresh rate of the screen is `60` frames per second, that’s also the highest frame rate the view sets as the actual frame rate. However, if you ask for a lower frame rate, the view might choose `30`, `20`, or `15` frames per second, or another factor, as the actual frame rate.

Your application should choose a frame rate that it can consistently maintain. The default value is `60` frames per second.

## See Also

### Configuring Drawing Behavior

- [paused](ispaused.md): A Boolean value that indicates whether the draw loop is paused.
- [enableSetNeedsDisplay](enablesetneedsdisplay.md): A Boolean value that indicates whether the view responds to [setNeedsDisplay](../../uikit/uiview/setneedsdisplay%28%29.md).
- [draw](draw%28%29.md): Redraws the view’s contents immediately.
- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the view presents its content using a Core Animation transaction.
