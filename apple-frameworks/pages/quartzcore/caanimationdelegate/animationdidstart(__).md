> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/caanimationdelegate/animationdidstart(_:)

# animationDidStart(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate the animation has started.

## Declaration

```swift
optional func animationDidStart(_ anim: CAAnimation)
```

## Parameters

- `anim`: The [CAAnimation](../caanimation.md) object that has started.

## See Also

### Customizing Start and Stop Times

- [animationDidStop(\_:finished:)](animationdidstop%28__finished_%29.md): Tells the delegate the animation has ended.

# animationDidStart: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Tells the delegate the animation has started.

## Declaration

```objectivec
- (void) animationDidStart:(CAAnimation *) anim;
```

## Parameters

- `anim`: The [CAAnimation](../caanimation.md) object that has started.

## See Also

### Customizing Start and Stop Times

- [animationDidStop:finished:](animationdidstop%28__finished_%29.md): Tells the delegate the animation has ended.
