> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespacecontent](https://developer.apple.com/documentation/swiftui/immersivespacecontent)

# ImmersiveSpaceContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that you can use as the content of an immersive space.

## Declaration

```swift
@MainActor @preconcurrency protocol ImmersiveSpaceContent
```

<a id="overview"></a>

## Overview

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Creating immersive space content

- [body](immersivespacecontent/body-swift.property.md)
- [Body](immersivespacecontent/body-swift.associatedtype.md)

## Relationships

### Conforming Types

- [CompositorContentBuilder.Content](compositorcontentbuilder/content.md)
- [ImmersiveSpaceViewContent](immersivespaceviewcontent.md)

## See Also

### Supporting types

- [ImmersiveSpaceViewContent](immersivespaceviewcontent.md): Immersive space content that uses a SwiftUI view hierarchy as the content.
