> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfillmode/backwards](https://developer.apple.com/documentation/quartzcore/camediatimingfillmode/backwards)

# backwards (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The receiver clamps values before zero to zero when the animation is completed.

## Declaration

```swift
static let backwards: CAMediaTimingFillMode
```

## See Also

### Constants

- [removed](removed.md): The receiver is removed from the presentation when the animation is completed.
- [forwards](forwards.md): The receiver remains visible in its final state when the animation is completed.
- [both](both.md): The receiver clamps values at both ends of the object’s time space

# kCAFillModeBackwards (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The receiver clamps values before zero to zero when the animation is completed.

## Declaration

```objectivec
extern CAMediaTimingFillMode const kCAFillModeBackwards;
```

## See Also

### Constants

- [kCAFillModeRemoved](removed.md): The receiver is removed from the presentation when the animation is completed.
- [kCAFillModeForwards](forwards.md): The receiver remains visible in its final state when the animation is completed.
- [kCAFillModeBoth](both.md): The receiver clamps values at both ends of the object’s time space
- [kCAFillModeFrozen](../kcafillmodefrozen.md): The mode was deprecated before OS X v10.5 shipped.
