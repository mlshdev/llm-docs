> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes/kerningattribute

# AttributeScopes.SwiftUIAttributes.KerningAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A key for the space added between specific pairs of characters in a run of attributed text.

## Declaration

```swift
@frozen enum KerningAttribute
```

<a id="overview"></a>

## Overview

Kerning adjusts the gap between individual pairs, such as the two letters in “AV”, so that the pair looks evenly spaced. Give a positive value to open the pairs up and a negative value to tighten them:

```
var title = AttributedString("AVIATION")
title.kern = 2

Text(title)
```

To space every character of a run apart by the same amount instead, use [AttributeScopes.SwiftUIAttributes.TrackingAttribute](trackingattribute.md).

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
