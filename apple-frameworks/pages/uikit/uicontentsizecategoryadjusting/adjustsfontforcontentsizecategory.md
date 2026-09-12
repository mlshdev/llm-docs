> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategoryadjusting/adjustsfontforcontentsizecategory](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting/adjustsfontforcontentsizecategory)

# adjustsFontForContentSizeCategory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean that indicates whether the object automatically updates its font when the device’s content size category changes.

## Declaration

```swift
var adjustsFontForContentSizeCategory: Bool { get set }
```

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to allow the element to update its font when the size category changes. Set the value to [false](https://developer.apple.com/documentation/swift/false) to ignore the size category changes.

For this property to take effect, the element’s font must be vended one of the following ways:

- It must be vended using the [preferredFont(forTextStyle:)](../uifont/preferredfont%28fortextstyle_%29.md) or [preferredFont(forTextStyle:compatibleWith:)](../uifont/preferredfont%28fortextstyle_compatiblewith_%29.md) method with a valid text style.
- It must be vended using one of the scaling methods from [UIFontMetrics](../uifontmetrics.md).

Because fonts are immutable, any element that adjusts for an updated content size category doesn’t modify the font itself. Instead, the element replaces the assigned font with a new instance based on the original settings.

If you set this property to [true](https://developer.apple.com/documentation/swift/true), the element adjusts for a new content size category on a [didChangeNotification](../uicontentsizecategory/didchangenotification.md).

# adjustsFontForContentSizeCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean that indicates whether the object automatically updates its font when the device’s content size category changes.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsFontForContentSizeCategory;
```

## Mentioned In

- [Scaling fonts automatically](../scaling-fonts-automatically.md)

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to allow the element to update its font when the size category changes. Set the value to [false](https://developer.apple.com/documentation/swift/false) to ignore the size category changes.

For this property to take effect, the element’s font must be vended one of the following ways:

- It must be vended using the [preferredFontForTextStyle:](../uifont/preferredfont%28fortextstyle_%29.md) or [preferredFontForTextStyle:compatibleWithTraitCollection:](../uifont/preferredfont%28fortextstyle_compatiblewith_%29.md) method with a valid text style.
- It must be vended using one of the scaling methods from [UIFontMetrics](../uifontmetrics.md).

Because fonts are immutable, any element that adjusts for an updated content size category doesn’t modify the font itself. Instead, the element replaces the assigned font with a new instance based on the original settings.

If you set this property to [true](https://developer.apple.com/documentation/swift/true), the element adjusts for a new content size category on a [UIContentSizeCategoryDidChangeNotification](../uicontentsizecategory/didchangenotification.md).
