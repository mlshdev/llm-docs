> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/listitemtint](https://developer.apple.com/documentation/swiftui/listitemtint)

# ListItemTint

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A tint effect configuration that you can apply to content in a list.

## Declaration

```swift
struct ListItemTint
```

<a id="overview"></a>

## Overview

Use one of these tint values with the [listItemTint(\_:)](view/listitemtint%28__%29.md) view modifier. The containing list applies the tint in a platform-specific way. On iOS and macOS, sidebars apply the tint color to [Label](label.md) icons, which otherwise use the app’s accent color by default.

## Topics

### Getting list item tint options

- [monochrome](listitemtint/monochrome.md): A standard grayscale tint effect.
- [fixed(\_:)](listitemtint/fixed%28__%29.md): An explicit tint color.
- [preferred(\_:)](listitemtint/preferred%28__%29.md): An explicit tint color that the system can override.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring rows

- [listItemTint(\_:)](view/listitemtint%28__%29.md): Sets a fixed tint color for content in a list.
