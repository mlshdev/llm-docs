> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihinge/angle

# angle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The current angle of the hinge, in radians.

## Declaration

```swift
var angle: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

The rate and granularity of angle updates are system policy and can change based on system state, so don’t depend on a particular update frequency or precision. If you only need to know whether the hinge is closed, partially open, or fully open, prefer `status` over the angle.

## See Also

### Getting the hinge state

- [status](status-swift.property.md): Beta. The current status of the hinge
- [UIHinge.Status](status-swift.enum.md): Beta. The status of an individual hinge

# angle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The current angle of the hinge, in radians.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat angle;
```

<a id="discussion"></a>

## Discussion

The rate and granularity of angle updates are system policy and can change based on system state, so don’t depend on a particular update frequency or precision. If you only need to know whether the hinge is closed, partially open, or fully open, prefer `status` over the angle.

## See Also

### Getting the hinge state

- [status](status-swift.property.md): Beta. The current status of the hinge
- [UIHingeStatus](status-swift.enum.md): Beta. The status of an individual hinge
