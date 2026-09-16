> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/controlgroup/init(_:systemimage:content:)

# init(\_:systemImage:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new control group with the specified content that generates its label from a string and image name.

## Declaration

```swift
@export(implementation) nonisolated init<C, S>(_ title: S, systemImage: String, @ContentBuilder content: () -> C) where Content == LabeledControlGroupContent<C, Label<Text, Image>>, C : View, S : StringProtocol
```

## Parameters

- `title`: A string that describes the contents of the group.
- `systemImage`: The name of the image resource to lookup.
- `content`: The content to display.

## See Also

### Creating a control group with an image

- [init(\_:image:content:)](init%28__image_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a localized string resource and image resource.
