> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/label/init(title:icon:)](https://developer.apple.com/documentation/swiftui/label/init(title:icon:))

# init(title:icon:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a label with a custom title and icon.

## Declaration

```swift
nonisolated init(@ContentBuilder title: () -> Title, @ContentBuilder icon: () -> Icon)
```

## See Also

### Creating a label

- [init(\_:image:)](init%28__image_%29.md): Conforms when `Title` is `Text` and `Icon` is `Image`. Creates a label with an icon image and a title generated from a localized string.
- [init(\_:systemImage:)](init%28__systemimage_%29.md): Conforms when `Title` is `Text` and `Icon` is `Image`. Creates a label with a system icon image and a title generated from a localized string.
- [init(\_:)](init%28__%29.md): Conforms when `Title` is `FamilyActivityTitleView` and `Icon` is `FamilyActivityIconView`. Creates a label representing a family activity application.
- [init(\_:image:)](init%28__image_%29.md): Conforms when `Title` is `Text` and `Icon` is `Image`. Creates a label with an icon image and a title generated from a localized string.
