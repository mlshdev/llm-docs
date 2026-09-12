> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverbackgroundviewmethods/contentviewinsets()](https://developer.apple.com/documentation/uikit/uipopoverbackgroundviewmethods/contentviewinsets())

# contentViewInsets() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The insets for the content portion of the popover.

## Declaration

```swift
static func contentViewInsets() -> UIEdgeInsets
```

<a id="Discussion"></a>

## Discussion

Consider your popover background view without the arrow, and the insets in this property represent the distance from a given edge of your background content to the corresponding edge of the popover’s content view. (This edges of the background content should be flush with the frame rectangle of your view, except on the side containing the arrow, of course.) The popover controller uses these values (in combination with the value returned by the [arrowHeight()](arrowheight%28%29.md) method) to determine where to position the popover content view. Because the arrow height is accounted for separately, your implementation of this method should return a set of constant values.

## See Also

### Related Documentation

- [arrowHeight()](arrowheight%28%29.md): The height of the arrow (measured in points) from its base to its tip.

# contentViewInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The insets for the content portion of the popover.

## Declaration

```objectivec
+ (UIEdgeInsets) contentViewInsets;
```

<a id="Discussion"></a>

## Discussion

Consider your popover background view without the arrow, and the insets in this property represent the distance from a given edge of your background content to the corresponding edge of the popover’s content view. (This edges of the background content should be flush with the frame rectangle of your view, except on the side containing the arrow, of course.) The popover controller uses these values (in combination with the value returned by the [arrowHeight](arrowheight%28%29.md) method) to determine where to position the popover content view. Because the arrow height is accounted for separately, your implementation of this method should return a set of constant values.

## See Also

### Related Documentation

- [arrowHeight](arrowheight%28%29.md): The height of the arrow (measured in points) from its base to its tip.
