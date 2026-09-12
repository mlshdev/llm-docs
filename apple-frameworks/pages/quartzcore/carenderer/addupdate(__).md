> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/addupdate(_:)](https://developer.apple.com/documentation/quartzcore/carenderer/addupdate(_:))

# addUpdate(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds the rectangle to the update region of the current frame.

## Declaration

```swift
func addUpdate(_ r: CGRect)
```

## Parameters

- `r`: A rectangle defining the region to be added to the update region.

## See Also

### Rendering a Frame

- [beginFrame(atTime:timeStamp:)](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds()](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [render()](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime()](nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame()](endframe%28%29.md): Release any data associated with the current frame.

# addUpdateRect: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds the rectangle to the update region of the current frame.

## Declaration

```objectivec
- (void) addUpdateRect:(CGRect) r;
```

## Parameters

- `r`: A rectangle defining the region to be added to the update region.

## See Also

### Rendering a Frame

- [beginFrameAtTime:timeStamp:](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [render](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime](nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame](endframe%28%29.md): Release any data associated with the current frame.
