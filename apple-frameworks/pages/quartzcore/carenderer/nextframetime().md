> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/nextframetime()](https://developer.apple.com/documentation/quartzcore/carenderer/nextframetime())

# nextFrameTime() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the time at which the next update should happen.

## Declaration

```swift
func nextFrameTime() -> CFTimeInterval
```

<a id="return-value"></a>

## Return Value

The time at which the next update should happen.

<a id="Discussion"></a>

## Discussion

If infinite, no update needs to be scheduled yet. If `nextFrameTime` is the current frame time, a continuous animation is running and an update should be scheduled after an appropriate delay.

## See Also

### Rendering a Frame

- [beginFrame(atTime:timeStamp:)](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds()](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdate(\_:)](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render()](render%28%29.md): Render the update region of the current frame to the target context.
- [endFrame()](endframe%28%29.md): Release any data associated with the current frame.

# nextFrameTime (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the time at which the next update should happen.

## Declaration

```objectivec
- (CFTimeInterval) nextFrameTime;
```

<a id="return-value"></a>

## Return Value

The time at which the next update should happen.

<a id="Discussion"></a>

## Discussion

If infinite, no update needs to be scheduled yet. If `nextFrameTime` is the current frame time, a continuous animation is running and an update should be scheduled after an appropriate delay.

## See Also

### Rendering a Frame

- [beginFrameAtTime:timeStamp:](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdateRect:](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render](render%28%29.md): Render the update region of the current frame to the target context.
- [endFrame](endframe%28%29.md): Release any data associated with the current frame.
