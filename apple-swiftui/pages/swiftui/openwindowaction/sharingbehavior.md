> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/openwindowaction/sharingbehavior

# OpenWindowAction.SharingBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

## Declaration

```swift
struct SharingBehavior
```

## Topics

### Type Properties

- [requested](sharingbehavior/requested.md): The window will be shared if there is an available sharing session and the person using your app confirms the offer to share. The window will be opened regardless of whether sharing succeeds.
- [required](sharingbehavior/required.md): The window will be shared if there is an available sharing session and the person using your app confirms the offer to share. The window will only be opened if sharing succeeds.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
