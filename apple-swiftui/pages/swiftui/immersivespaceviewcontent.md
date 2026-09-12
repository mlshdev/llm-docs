> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespaceviewcontent](https://developer.apple.com/documentation/swiftui/immersivespaceviewcontent)

# ImmersiveSpaceViewContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

Immersive space content that uses a SwiftUI view hierarchy as the content.

## Declaration

```swift
nonisolated struct ImmersiveSpaceViewContent<Content> where Content : View
```

<a id="overview"></a>

## Overview

You don’t create this type directly. SwiftUI creates it when you construct an [ImmersiveSpace](immersivespace.md) with view-based content.

## Relationships

### Conforms To

- [ImmersiveSpaceContent](immersivespacecontent.md)

## See Also

### Supporting types

- [ImmersiveSpaceContent](immersivespacecontent.md): A type that you can use as the content of an immersive space.
