> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/tupledefinition](https://developer.apple.com/documentation/swiftui/attributedtextformatting/tupledefinition)

# AttributedTextFormatting.TupleDefinition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A text formatting definition that enforces the constraints of a series of text formatting definitions.

## Declaration

```swift
struct TupleDefinition<Scope, each Definition> where Scope : AttributeScope, repeat each Definition : AttributedTextFormattingDefinition
```

<a id="overview"></a>

## Overview

> **Note**

> All sub-definitions are required to have the same `Scope`.

## Topics

### Initializers

- [init(definition:)](tupledefinition/init%28definition_%29.md)

## Relationships

### Conforms To

- [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md)
