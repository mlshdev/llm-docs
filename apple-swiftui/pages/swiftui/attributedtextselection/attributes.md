> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextselection/attributes](https://developer.apple.com/documentation/swiftui/attributedtextselection/attributes)

# AttributedTextSelection.Attributes

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A sequence of all attribute values a selection has in a certain text.

## Declaration

```swift
struct Attributes<Text>
```

<a id="overview"></a>

## Overview

The values of a selection are the attribute values of each run that is fully or partially selected, or the typing attributes in the case the selection is an insertion point.

By default, the sequence contains the attribute container for every run or the typing attributes. Use the [AttributedTextSelection.Attributes](attributes.md)’ subscript to obtain only the values for a single attribute:

```swift
selection.attributes(in: text)[\.foregroundColor].contains(.red)
```

## Topics

### Subscripts

- [subscript(\_:)](attributes/subscript%28__%29.md): Returns a sequence which iterates of the values of a single attribute.

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)
