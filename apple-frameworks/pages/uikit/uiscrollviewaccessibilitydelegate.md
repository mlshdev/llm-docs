> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewaccessibilitydelegate](https://developer.apple.com/documentation/uikit/uiscrollviewaccessibilitydelegate)

# UIScrollViewAccessibilityDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods you can implement to provide accessibility information for a scroll view.

## Declaration

```swift
@MainActor protocol UIScrollViewAccessibilityDelegate : UIScrollViewDelegate
```

## Topics

### Providing descriptive information

- [accessibilityScrollStatus(for:)](uiscrollviewaccessibilitydelegate/accessibilityscrollstatus%28for_%29.md): Returns a string describing the content at the current offset in the scroll view.
- [accessibilityAttributedScrollStatus(for:)](uiscrollviewaccessibilitydelegate/accessibilityattributedscrollstatus%28for_%29.md): Returns an attributed string describing the content at the current offset in the scroll view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIScrollViewDelegate](uiscrollviewdelegate.md)

## See Also

### Elements

- [UIAccessibilityElement](uiaccessibilityelement.md): An element that should be accessible to users with disabilities, but that isn’t accessible by default.
- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for individual components of a picker view.

# UIScrollViewAccessibilityDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods you can implement to provide accessibility information for a scroll view.

## Declaration

```objectivec
@protocol UIScrollViewAccessibilityDelegate <UIScrollViewDelegate>
```

## Topics

### Providing descriptive information

- [accessibilityScrollStatusForScrollView:](uiscrollviewaccessibilitydelegate/accessibilityscrollstatus%28for_%29.md): Returns a string describing the content at the current offset in the scroll view.
- [accessibilityAttributedScrollStatusForScrollView:](uiscrollviewaccessibilitydelegate/accessibilityattributedscrollstatus%28for_%29.md): Returns an attributed string describing the content at the current offset in the scroll view.

## Relationships

### Inherits From

- [UIScrollViewDelegate](uiscrollviewdelegate.md)

## See Also

### Elements

- [UIAccessibilityElement](uiaccessibilityelement.md): An element that should be accessible to users with disabilities, but that isn’t accessible by default.
- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for individual components of a picker view.
