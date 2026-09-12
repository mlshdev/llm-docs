> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tuplecontent](https://developer.apple.com/documentation/swiftui/tuplecontent)

# TupleContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Content created from a tuple of content to be treated as siblings.

## Declaration

```swift
@frozen struct TupleContent<each Content>
```

<a id="overview"></a>

## Overview

You will rarely, if ever, need to create a `TupleContent` directly. Instead, `TupleContent` will be constructed on your behalf when using a `ContentBuilder`.

This type should be conformed to builder DSL protocols to represent tuple content in that DSL.

`TupleContent` defines a `body` property of type `Never` to improve the ergonomics of conforming to multiple DSL protocols, which should all use `Never` as the universal “primitive body” type.

## Topics

### Creating tuple content

- [init(\_:)](tuplecontent/init%28__%29.md)

### Getting tuple content

- [content](tuplecontent/content.md)

## Relationships

### Conforms To

- [AccessibilityRotorContent](accessibilityrotorcontent.md)
- [ChartContent](https://developer.apple.com/documentation/charts/chartcontent)
- [Commands](commands.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomizableToolbarContent](customizabletoolbarcontent.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [SceneAccessoryContent](sceneaccessorycontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ToolbarContent](toolbarcontent.md)
- [View](view.md)

## See Also

### Supporting content types

- [EmptyContent](emptycontent.md): Content which contains nothing.
