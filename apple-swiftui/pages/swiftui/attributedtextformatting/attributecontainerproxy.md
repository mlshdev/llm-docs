> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/attributecontainerproxy](https://developer.apple.com/documentation/swiftui/attributedtextformatting/attributecontainerproxy)

# AttributedTextFormatting.AttributeContainerProxy

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A proxy for a partially validated set of attributes.

## Declaration

```swift
@dynamicMemberLookup struct AttributeContainerProxy<Scope, Attribute> where Scope : AttributeScope, Attribute : AttributedStringKey, Attribute.Value : Sendable
```

<a id="overview"></a>

## Overview

Exposes `Attribute` as read-write and all other attributes as read-only. The type automatically queries the underlying [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md) to constrain values that are accessed.

## Topics

### Structures

- [AttributedTextFormatting.AttributeContainerProxy.Scoped](attributecontainerproxy/scoped.md): Conforms when `Scope` conforms to `AttributeScope`, `Attribute` conforms to `AttributedStringKey`, and `Attribute.Value` conforms to `Sendable`. A scoped proxy for a partially validated set of attributes.

### Subscripts

- [subscript(\_:)](attributecontainerproxy/subscript%28__%29.md): Access the value of the attribute to constrain.
- [subscript(dynamicMember:)](attributecontainerproxy/subscript%28dynamicmember_%29.md): Access the value of the attribute to constrain.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
