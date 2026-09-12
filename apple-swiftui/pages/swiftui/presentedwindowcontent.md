> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentedwindowcontent](https://developer.apple.com/documentation/swiftui/presentedwindowcontent)

# PresentedWindowContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A view that represents the content of a presented window.

## Declaration

```swift
nonisolated struct PresentedWindowContent<Data, Content> where Data : Decodable, Data : Encodable, Data : Hashable, Content : View
```

<a id="overview"></a>

## Overview

You don’t create this type directly. [WindowGroup](windowgroup.md) creates values for you.

## Relationships

### Conforms To

- [View](view.md)
