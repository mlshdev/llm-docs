> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/timingfunction](https://developer.apple.com/documentation/quartzcore/caanimation/timingfunction)

# timingFunction (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional timing function defining the pacing of the animation.

## Declaration

```swift
var timingFunction: CAMediaTimingFunction? { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`, indicating linear pacing.

## See Also

### Animation Attributes

- [isRemovedOnCompletion](isremovedoncompletion.md): Determines if the animation is removed from the target layer’s animations upon completion.

# timingFunction (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional timing function defining the pacing of the animation.

## Declaration

```objectivec
@property (strong, nullable) CAMediaTimingFunction * timingFunction;
```

<a id="Discussion"></a>

## Discussion

Defaults to `nil`, indicating linear pacing.

## See Also

### Animation Attributes

- [removedOnCompletion](isremovedoncompletion.md): Determines if the animation is removed from the target layer’s animations upon completion.
