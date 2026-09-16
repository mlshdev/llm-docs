> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/presentationdetent/context

# PresentationDetent.Context

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Information that you use to calculate the presentation’s height.

## Declaration

```swift
@dynamicMemberLookup struct Context
```

## Topics

### Getting the height

- [maxDetentValue](context/maxdetentvalue.md): The height that the presentation appears in.

### Supporting types

- [subscript(dynamicMember:)](context/subscript%28dynamicmember_%29.md): Returns the value specified by the keyPath from the environment.

## See Also

### Creating custom detents

- [custom(\_:)](custom%28__%29.md): A custom detent with a calculated height.
- [fraction(\_:)](fraction%28__%29.md): A custom detent with the specified fractional height.
- [height(\_:)](height%28__%29.md): A custom detent with the specified height.
