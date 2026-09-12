> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textvariantpreference](https://developer.apple.com/documentation/swiftui/textvariantpreference)

# TextVariantPreference

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A protocol for controlling the size variant of text views.

## Declaration

```swift
protocol TextVariantPreference
```

## Topics

### Type Properties

- [fixed](textvariantpreference/fixed.md): Conforms when `Self` is `FixedTextVariant`. The default text variant preference. It always chooses the largest available variant.
- [sizeDependent](textvariantpreference/sizedependent.md): Conforms when `Self` is `SizeDependentTextVariant`. The size dependent preference allows the text to take the available space into account when choosing the size variant to display.

## Relationships

### Conforming Types

- [FixedTextVariant](fixedtextvariant.md)
- [SizeDependentTextVariant](sizedependenttextvariant.md)

## See Also

### Adjusting text size

- [textScale(\_:isEnabled:)](view/textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [dynamicTypeSize(\_:)](view/dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.
- [dynamicTypeSize](environmentvalues/dynamictypesize.md): The current Dynamic Type size.
- [DynamicTypeSize](dynamictypesize.md): A Dynamic Type size, which specifies how large scalable content should be.
- [ScaledMetric](scaledmetric.md): A dynamic property that scales a numeric value.
- [FixedTextVariant](fixedtextvariant.md): The default text variant preference that chooses the largest available variant.
- [SizeDependentTextVariant](sizedependenttextvariant.md): The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.
