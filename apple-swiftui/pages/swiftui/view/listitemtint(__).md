> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/listitemtint(_:)](https://developer.apple.com/documentation/swiftui/view/listitemtint(_:))

# listItemTint(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets a fixed tint color for content in a list.

## Declaration

```swift
nonisolated func listItemTint(_ tint: Color?) -> some View

```

## Parameters

- `tint`: The color to use to tint the content. Use `nil` to avoid overriding the inherited tint.

<a id="discussion"></a>

## Discussion

The containing list’s style applies the tint as appropriate. For example, watchOS uses the tint color for its background platter appearance. Sidebars on iOS and macOS apply the tint color to their [Label](../label.md) icons, which otherwise use the accent color by default.

> **Note**

> This modifier is equivalent to using the version of the modifier that takes a [ListItemTint](../listitemtint.md) value and specifying the `tint` color in the corresponding [fixed(\_:)](../listitemtint/fixed%28__%29.md) input.

## See Also

### Configuring rows

- [ListItemTint](../listitemtint.md): A tint effect configuration that you can apply to content in a list.
