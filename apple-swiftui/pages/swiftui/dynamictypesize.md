> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamictypesize](https://developer.apple.com/documentation/swiftui/dynamictypesize)

# DynamicTypeSize

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Dynamic Type size, which specifies how large scalable content should be.

## Declaration

```swift
enum DynamicTypeSize
```

<a id="overview"></a>

## Overview

For more information, see [Typography](https://developer.apple.com/design/human-interface-guidelines/typography) in the Human Interface Guidelines.

## Topics

### Getting type sizes

- [DynamicTypeSize.xSmall](dynamictypesize/xsmall.md): An extra small size.
- [DynamicTypeSize.small](dynamictypesize/small.md): A small size.
- [DynamicTypeSize.medium](dynamictypesize/medium.md): A medium size.
- [DynamicTypeSize.large](dynamictypesize/large.md): A large size.
- [DynamicTypeSize.xLarge](dynamictypesize/xlarge.md): An extra large size.
- [DynamicTypeSize.xxLarge](dynamictypesize/xxlarge.md): An extra extra large size.
- [DynamicTypeSize.xxxLarge](dynamictypesize/xxxlarge.md): An extra extra extra large size.

### Getting accessibility type sizes

- [DynamicTypeSize.accessibility1](dynamictypesize/accessibility1.md): The first accessibility size.
- [DynamicTypeSize.accessibility2](dynamictypesize/accessibility2.md): The second accessibility size.
- [DynamicTypeSize.accessibility3](dynamictypesize/accessibility3.md): The third accessibility size.
- [DynamicTypeSize.accessibility4](dynamictypesize/accessibility4.md): The fourth accessibility size.
- [DynamicTypeSize.accessibility5](dynamictypesize/accessibility5.md): The fifth accessibility size.
- [isAccessibilitySize](dynamictypesize/isaccessibilitysize.md): A Boolean value indicating whether the size is one that is associated with accessibility.

### Creating a type size

- [init(\_:)](dynamictypesize/init%28__%29.md): Create a Dynamic Type size from its `UIContentSizeCategory` equivalent.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adjusting text size

- [textScale(\_:isEnabled:)](view/textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [dynamicTypeSize(\_:)](view/dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.
- [dynamicTypeSize](environmentvalues/dynamictypesize.md): The current Dynamic Type size.
- [ScaledMetric](scaledmetric.md): A dynamic property that scales a numeric value.
- [TextVariantPreference](textvariantpreference.md): A protocol for controlling the size variant of text views.
- [FixedTextVariant](fixedtextvariant.md): The default text variant preference that chooses the largest available variant.
- [SizeDependentTextVariant](sizedependenttextvariant.md): The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.
