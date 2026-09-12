> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategory/isaccessibilitycategory](https://developer.apple.com/documentation/uikit/uicontentsizecategory/isaccessibilitycategory)

# isAccessibilityCategory

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS

A Boolean value that indicates whether the content size category is associated with accessibility.

## Declaration

```swift
var isAccessibilityCategory: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) for [accessibilityMedium](accessibilitymedium.md), [accessibilityLarge](accessibilitylarge.md), [accessibilityExtraLarge](accessibilityextralarge.md), [accessibilityExtraExtraLarge](accessibilityextraextralarge.md), and [accessibilityExtraExtraExtraLarge](accessibilityextraextraextralarge.md). It is [false](https://developer.apple.com/documentation/swift/false) for other values.

## See Also

### Accessibility sizes

- [accessibilityMedium](accessibilitymedium.md): A medium font size that reflects the current accessibility settings.
- [accessibilityLarge](accessibilitylarge.md): A large font size that reflects the current accessibility settings.
- [accessibilityExtraLarge](accessibilityextralarge.md): An extra-large font size that reflects the current accessibility settings.
- [accessibilityExtraExtraLarge](accessibilityextraextralarge.md): A font that is larger than the extra-large font but not the largest available, reflecting the current accessibility settings.
- [accessibilityExtraExtraExtraLarge](accessibilityextraextraextralarge.md): The largest font size that reflects the current accessibility settings.
