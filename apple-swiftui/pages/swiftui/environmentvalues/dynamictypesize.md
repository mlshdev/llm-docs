> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/dynamictypesize](https://developer.apple.com/documentation/swiftui/environmentvalues/dynamictypesize)

# dynamicTypeSize

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current Dynamic Type size.

## Declaration

```swift
var dynamicTypeSize: DynamicTypeSize { get set }
```

<a id="discussion"></a>

## Discussion

This value changes as the user’s chosen Dynamic Type size changes. The default value is device-dependent.

When limiting the Dynamic Type size, consider if adding a large content view with [accessibilityShowsLargeContentViewer()](../view/accessibilityshowslargecontentviewer%28%29.md) would be appropriate.

On macOS, this value cannot be changed by users and does not affect the text size.

## See Also

### Adjusting text size

- [textScale(\_:isEnabled:)](../view/textscale%28__isenabled_%29.md): Applies a text scale to text in the view.
- [dynamicTypeSize(\_:)](../view/dynamictypesize%28__%29.md): Sets the Dynamic Type size within the view to the given value.
- [DynamicTypeSize](../dynamictypesize.md): A Dynamic Type size, which specifies how large scalable content should be.
- [ScaledMetric](../scaledmetric.md): A dynamic property that scales a numeric value.
- [TextVariantPreference](../textvariantpreference.md): A protocol for controlling the size variant of text views.
- [FixedTextVariant](../fixedtextvariant.md): The default text variant preference that chooses the largest available variant.
- [SizeDependentTextVariant](../sizedependenttextvariant.md): The size dependent variant preference allows the text to take the available space into account when choosing the variant to display.
