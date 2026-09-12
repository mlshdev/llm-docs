> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepointreference/force](https://developer.apple.com/documentation/pencilkit/pkstrokepointreference/force)

# force (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The amount of force applied by the touch.

## Declaration

```swift
var force: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This is a value predetermined by the system and isn’t user specific. A value of 1.0 represents the force of an average touch.

## See Also

### Getting the point’s touch data

- [altitude](altitude.md): The altitude of this point in radians.
- [azimuth](azimuth.md): The azimuth of this point in radians.

# force (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The amount of force applied by the touch.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat force;
```

<a id="Discussion"></a>

## Discussion

This is a value predetermined by the system and isn’t user specific. A value of 1.0 represents the force of an average touch.

## See Also

### Getting the point’s touch data

- [altitude](altitude.md): The altitude of this point in radians.
- [azimuth](azimuth.md): The azimuth of this point in radians.
