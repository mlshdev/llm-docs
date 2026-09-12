> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/contactaccessbutton/style/init(imagetrailingedgepadding:imagewidth:imagecolor:)](https://developer.apple.com/documentation/contactsui/contactaccessbutton/style/init(imagetrailingedgepadding:imagewidth:imagecolor:))

# init(imageTrailingEdgePadding:imageWidth:imageColor:)

**Framework:** Contacts UI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Creates a contact access button with the provided styling values.

## Declaration

```swift
init(imageTrailingEdgePadding: CGFloat? = nil, imageWidth: CGFloat? = nil, imageColor: Color? = nil)
```

## Parameters

- `imageTrailingEdgePadding`: The trailing spacing between contact image and text fields. If `nil`, the style uses a default value.
- `imageWidth`: The contact image width, in points. If `nil`, the style uses a default value.
- `imageColor`: The color of the avatar badge to use, when a person in the contacts list doesn’t have a photo assigned. For design guidance, see Human Interface Guidelines \> Color \> [Specifications](https://developer.apple.com/design/human-interface-guidelines/color#Specifications). Defaults to [gray](https://developer.apple.com/documentation/swiftui/color/gray).
