> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/textscale(_:isenabled:)](https://developer.apple.com/documentation/swiftui/text/textscale(_:isenabled:))

# textScale(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies a text scale to the text.

## Declaration

```swift
func textScale(_ scale: Text.Scale, isEnabled: Bool = true) -> Text
```

## Parameters

- `scale`: The text scale to apply.
- `isEnabled`: If true the text scale is applied; otherwise text scale is unchanged.

<a id="return-value"></a>

## Return Value

Text with the specified scale applied.

## See Also

### Fitting text into available space

- [Text.Scale](scale.md): Defines text scales
- [Text.TruncationMode](truncationmode.md): The type of truncation to apply to a line of text when it’s too long to fit in the available space.
