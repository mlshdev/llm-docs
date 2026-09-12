> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatiming/repeatcount](https://developer.apple.com/documentation/quartzcore/camediatiming/repeatcount)

# repeatCount (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines the number of times the animation will repeat.

## Declaration

```swift
var repeatCount: Float { get set }
```

<a id="Discussion"></a>

## Discussion

May be fractional. If the `repeatCount` is 0, it is ignored. Defaults to 0. If both [repeatDuration](repeatduration.md) and [repeatCount](repeatcount.md) are specified the behavior is undefined.

Setting this property to [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude) will cause the animation to repeat forever.

## See Also

### Repeating Animations

- [repeatDuration](repeatduration.md): Determines how many seconds the animation will repeat for.

# repeatCount (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines the number of times the animation will repeat.

## Declaration

```objectivec
@property float repeatCount;
```

<a id="Discussion"></a>

## Discussion

May be fractional. If the `repeatCount` is 0, it is ignored. Defaults to 0. If both [repeatDuration](repeatduration.md) and [repeatCount](repeatcount.md) are specified the behavior is undefined.

Setting this property to [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/float/greatestfinitemagnitude) will cause the animation to repeat forever.

## See Also

### Repeating Animations

- [repeatDuration](repeatduration.md): Determines how many seconds the animation will repeat for.
