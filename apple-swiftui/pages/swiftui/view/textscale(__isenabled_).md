> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/textscale(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/textscale(_:isenabled:))

# textScale(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies a text scale to text in the view.

## Declaration

```swift
nonisolated func textScale(_ scale: Text.Scale, isEnabled: Bool = true) -> some View

```

## Parameters

- `scale`: The text scale to apply.
- `isEnabled`: If true the text scale is applied; otherwise text scale is unchanged.

<a id="return-value"></a>

## Return Value

A view with the specified text scale applied.

## See Also

### Adjusting text size

- [dynamicTypeSize(\_:)](dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.
- [dynamicTypeSize](../environmentvalues/dynamictypesize.md): The current Dynamic Type size.
- [DynamicTypeSize](../dynamictypesize.md): A Dynamic Type size, which specifies how large scalable content should be.
- [ScaledMetric](../scaledmetric.md): A dynamic property that scales a numeric value.
- [TextVariantPreference](../textvariantpreference.md): A protocol for controlling the size variant of text views.
- [FixedTextVariant](../fixedtextvariant.md): The default text variant preference that chooses the largest available variant.
- [SizeDependentTextVariant](../sizedependenttextvariant.md): The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.
