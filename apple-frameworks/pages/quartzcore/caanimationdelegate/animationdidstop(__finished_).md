> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimationdelegate/animationdidstop(_:finished:)](https://developer.apple.com/documentation/quartzcore/caanimationdelegate/animationdidstop(_:finished:))

# animationDidStop(\_:finished:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate the animation has ended.

## Declaration

```swift
optional func animationDidStop(_ anim: CAAnimation, finished flag: Bool)
```

## Parameters

- `anim`: The [CAAnimation](../caanimation.md) object that has ended.
- `flag`: A flag indicating whether the animation has completed by reaching the end of its duration.

<a id="Discussion"></a>

## Discussion

The animation may have ended because it has completed its active duration or because it has been removed from the layer it is attached to. `flag` is true if the animation reached the end of its duration without being removed.

## See Also

### Customizing Start and Stop Times

- [animationDidStart(\_:)](animationdidstart%28__%29.md): Tells the delegate the animation has started.

# animationDidStop:finished: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate the animation has ended.

## Declaration

```objectivec
- (void) animationDidStop:(CAAnimation *) anim finished:(BOOL) flag;
```

## Parameters

- `anim`: The [CAAnimation](../caanimation.md) object that has ended.
- `flag`: A flag indicating whether the animation has completed by reaching the end of its duration.

<a id="Discussion"></a>

## Discussion

The animation may have ended because it has completed its active duration or because it has been removed from the layer it is attached to. `flag` is true if the animation reached the end of its duration without being removed.

## See Also

### Customizing Start and Stop Times

- [animationDidStart:](animationdidstart%28__%29.md): Tells the delegate the animation has started.
