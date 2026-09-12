> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/isremovedoncompletion](https://developer.apple.com/documentation/quartzcore/caanimation/isremovedoncompletion)

# isRemovedOnCompletion (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the animation is removed from the target layer’s animations upon completion.

## Declaration

```swift
var isRemovedOnCompletion: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the animation is removed from the target layer’s animations once its active duration has passed. Defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Animation Attributes

- [timingFunction](timingfunction.md): An optional timing function defining the pacing of the animation.

# removedOnCompletion (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the animation is removed from the target layer’s animations upon completion.

## Declaration

```objectivec
@property (getter=isRemovedOnCompletion) BOOL removedOnCompletion;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), the animation is removed from the target layer’s animations once its active duration has passed. Defaults to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Animation Attributes

- [timingFunction](timingfunction.md): An optional timing function defining the pacing of the animation.
