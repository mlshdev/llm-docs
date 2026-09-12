> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scaledmetric](https://developer.apple.com/documentation/swiftui/scaledmetric)

# ScaledMetric

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dynamic property that scales a numeric value.

## Declaration

```swift
@propertyWrapper struct ScaledMetric<Value> where Value : BinaryFloatingPoint
```

## Mentioned In

- [Applying custom fonts to text](applying-custom-fonts-to-text.md)

## Topics

### Creating the metric

- [init(wrappedValue:)](scaledmetric/init%28wrappedvalue_%29.md): Creates the scaled metric with an unscaled value using the default scaling.
- [init(wrappedValue:relativeTo:)](scaledmetric/init%28wrappedvalue_relativeto_%29.md): Creates the scaled metric with an unscaled value and a text style to scale relative to.

### Getting the metric

- [wrappedValue](scaledmetric/wrappedvalue.md): The value scaled based on the current environment.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adjusting text size

- [textScale(\_:isEnabled:)](view/textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [dynamicTypeSize(\_:)](view/dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.
- [dynamicTypeSize](environmentvalues/dynamictypesize.md): The current Dynamic Type size.
- [DynamicTypeSize](dynamictypesize.md): A Dynamic Type size, which specifies how large scalable content should be.
- [TextVariantPreference](textvariantpreference.md): A protocol for controlling the size variant of text views.
- [FixedTextVariant](fixedtextvariant.md): The default text variant preference that chooses the largest available variant.
- [SizeDependentTextVariant](sizedependenttextvariant.md): The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.
