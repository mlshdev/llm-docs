> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/textvariant(_:)](https://developer.apple.com/documentation/swiftui/text/textvariant(_:))

# textVariant(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Controls the way text size variants are chosen.

## Declaration

```swift
func textVariant<V>(_ preference: V) -> some View where V : TextVariantPreference

```

<a id="discussion"></a>

## Discussion

Certain types of text, such as `Text(_:format:)`, can generate strings of different size to better fit the available space. By default, all text uses the widest available variant. Setting the variant to be [sizeDependent](../textvariantpreference/sizedependent.md) allows the text to take the available space into account when choosing what content to display.
