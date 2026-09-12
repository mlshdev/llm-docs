> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/listitemtint/preferred(_:)](https://developer.apple.com/documentation/swiftui/listitemtint/preferred(_:))

# preferred(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An explicit tint color that the system can override.

## Declaration

```swift
static func preferred(_ tint: Color) -> ListItemTint
```

## Parameters

- `tint`: The color to use to tint the content.

<a id="discussion"></a>

## Discussion

On macOS, the system can override this tint with the person’s chosen accent color when one is set. Use [fixed(\_:)](fixed%28__%29.md) to prevent the system from overriding the tint.

## See Also

### Getting list item tint options

- [monochrome](monochrome.md): A standard grayscale tint effect.
- [fixed(\_:)](fixed%28__%29.md): An explicit tint color.
