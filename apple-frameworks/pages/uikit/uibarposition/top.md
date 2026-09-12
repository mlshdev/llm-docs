> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarposition/top](https://developer.apple.com/documentation/uikit/uibarposition/top)

# UIBarPosition.top (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the bar is at the top of its containing view.

## Declaration

```swift
case top
```

<a id="Discussion"></a>

## Discussion

The system uses this as a hint to draw directional decoration accordingly. For example, any shadow would be drawn below the bar.

Instances of [UIToolbar](../uitoolbar.md) do not appear with this position on iPhone, but they can on iPad.

## See Also

### Constants

- [UIBarPosition.any](any.md): Specifies that the position is unspecified.
- [UIBarPosition.bottom](bottom.md): Specifies that the bar is at the bottom of its containing view.
- [UIBarPosition.topAttached](topattached.md): Specifies that the bar is at the top of the screen, as well as its containing view.

# UIBarPositionTop (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies that the bar is at the top of its containing view.

## Declaration

```objectivec
UIBarPositionTop
```

<a id="Discussion"></a>

## Discussion

The system uses this as a hint to draw directional decoration accordingly. For example, any shadow would be drawn below the bar.

Instances of [UIToolbar](../uitoolbar.md) do not appear with this position on iPhone, but they can on iPad.

## See Also

### Constants

- [UIBarPositionAny](any.md): Specifies that the position is unspecified.
- [UIBarPositionBottom](bottom.md): Specifies that the bar is at the bottom of its containing view.
- [UIBarPositionTopAttached](topattached.md): Specifies that the bar is at the top of the screen, as well as its containing view.
