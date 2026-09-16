> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/sharepreview/init(_:icon:)

# init(\_:icon:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a preview representation.

## Declaration

```swift
@export(implementation) init(_ titleResource: LocalizedStringResource, icon: Icon)
```

## Parameters

- `titleResource`: A resource for the title to show in a preview.
- `icon`: An icon to show in a preview.

## See Also

### Creating a preview

- [init(\_:)](init%28__%29.md): Conforms when `Image` is `Never` and `Icon` is `Never`. Creates a preview representation.
- [init(\_:image:)](init%28__image_%29.md): Conforms when `Image` conforms to `Transferable` and `Icon` is `Never`. Creates a preview representation.
- [init(\_:image:icon:)](init%28__image_icon_%29.md): Creates a preview representation.
