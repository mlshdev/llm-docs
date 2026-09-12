> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverbackgroundviewmethods/arrowheight()](https://developer.apple.com/documentation/uikit/uipopoverbackgroundviewmethods/arrowheight())

# arrowHeight() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+

The height of the arrow (measured in points) from its base to its tip.

## Declaration

```swift
static func arrowHeight() -> CGFloat
```

<a id="Discussion"></a>

## Discussion

Use this method to return the height of the arrow used by your popover background content. The arrow height must be the same for all possible directions and that height must not change.

## See Also

### Accessing the arrow metrics

- [arrowBase()](arrowbase%28%29.md): The width of the arrow triangle at its base.

# arrowHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS

The height of the arrow (measured in points) from its base to its tip.

## Declaration

```objectivec
+ (CGFloat) arrowHeight;
```

<a id="Discussion"></a>

## Discussion

Use this method to return the height of the arrow used by your popover background content. The arrow height must be the same for all possible directions and that height must not change.

## See Also

### Accessing the arrow metrics

- [arrowBase](arrowbase%28%29.md): The width of the arrow triangle at its base.
