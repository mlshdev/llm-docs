> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifloatrange/init(minimum:maximum:)-1vgoo](https://developer.apple.com/documentation/uikit/uifloatrange/init(minimum:maximum:)-1vgoo)

# init(minimum:maximum:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a new float range structure from the given components.

## Declaration

```swift
init(minimum: CGFloat, maximum: CGFloat)
```

## Parameters

- `minimum`: The minimum range value, which is typically less than or equal to `0`.
- `maximum`: The maximum range value, which is typically greater than or equal to `0`.

<a id="Discussion"></a>

## Discussion

Float ranges are used in [UIAttachmentBehavior](../uiattachmentbehavior.md) objects to define the maximum range of translation or rotation for animations.

# UIFloatRangeMake (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a new float range structure from the given components.

## Declaration

```objectivec
static UIFloatRange UIFloatRangeMake(CGFloat minimum, CGFloat maximum);
```

## Parameters

- `minimum`: The minimum range value, which is typically less than or equal to `0`.
- `maximum`: The maximum range value, which is typically greater than or equal to `0`.

<a id="Discussion"></a>

## Discussion

Float ranges are used in [UIAttachmentBehavior](../uiattachmentbehavior.md) objects to define the maximum range of translation or rotation for animations.

## See Also

### Creating a float range

- [UIFloatRangeInfinite](infinite.md): A range whose range is minus infinity to infinity.
- [UIFloatRangeZero](zero.md): A range whose minimum and maximum are both `0.0`.
