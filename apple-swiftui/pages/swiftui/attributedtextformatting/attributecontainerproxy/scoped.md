> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped](https://developer.apple.com/documentation/swiftui/attributedtextformatting/attributecontainerproxy/scoped)

# AttributedTextFormatting.AttributeContainerProxy.Scoped

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A scoped proxy for a partially validated set of attributes.

## Declaration

```swift
@dynamicMemberLookup struct Scoped<Subscope> where Subscope : AttributeScope
```

<a id="overview"></a>

## Overview

Exposes `Attribute` as read-write and all other attributes in the scope as read-only. The type automatically queries the underlying [AttributedTextFormattingDefinition](../../attributedtextformattingdefinition.md) to constrain values that are accessed.

> **Note**

> This is equivalent to an [AttributedTextFormatting.AttributeContainerProxy](../attributecontainerproxy.md), except it only provides dynamic member lookup for attributes in a certain `Subscope`.

## Topics

### Subscripts

- [subscript(dynamicMember:)](scoped/subscript%28dynamicmember_%29.md): Access the value of the attribute to constrain.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
