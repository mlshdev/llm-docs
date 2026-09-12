> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/label/init(_:systemimage:)](https://developer.apple.com/documentation/swiftui/label/init(_:systemimage:))

# init(\_:systemImage:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a label with a system icon image and a title generated from a localized string.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, systemImage name: String)
```

## Parameters

- `titleResource`: A title generated from a localized string.

## See Also

### Creating a label

- [init(\_:image:)](init%28__image_%29.md): Conforms when `Title` is `Text` and `Icon` is `Image`. Creates a label with an icon image and a title generated from a localized string.
- [init(title:icon:)](init%28title_icon_%29.md): Creates a label with a custom title and icon.
- [init(\_:)](init%28__%29.md): Conforms when `Title` is `FamilyActivityTitleView` and `Icon` is `FamilyActivityIconView`. Creates a label representing a family activity application.
- [init(\_:image:)](init%28__image_%29.md): Conforms when `Title` is `Text` and `Icon` is `Image`. Creates a label with an icon image and a title generated from a localized string.
