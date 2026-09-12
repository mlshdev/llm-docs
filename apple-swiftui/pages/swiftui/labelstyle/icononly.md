> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labelstyle/icononly](https://developer.apple.com/documentation/swiftui/labelstyle/icononly)

# iconOnly

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A label style that only displays the icon of the label.

## Declaration

```swift
@export(implementation) nonisolated static var iconOnly: IconOnlyLabelStyle { get }
```

<a id="discussion"></a>

## Discussion

The title of the label is still used for non-visual descriptions, such as VoiceOver.

## See Also

### Getting built-in label styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultLabelStyle`. A label style that resolves its appearance automatically based on the current context.
- [titleAndIcon](titleandicon.md): Conforms when `Self` is `TitleAndIconLabelStyle`. A label style that shows both the title and icon of the label using a system-standard layout.
- [titleOnly](titleonly.md): Conforms when `Self` is `TitleOnlyLabelStyle`. A label style that only displays the title of the label.
