> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes/trackingattribute

# AttributeScopes.SwiftUIAttributes.TrackingAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A key for the space added between every character of a run of attributed text.

## Declaration

```swift
@frozen enum TrackingAttribute
```

<a id="overview"></a>

## Overview

Tracking spreads a run out evenly, which suits a short label set in capitals. Give a positive value to open the run up and a negative value to tighten it:

```
var label = AttributedString("SOLD OUT")
label.tracking = 3

Text(label)
```

To adjust only the gap between particular pairs of letters, use [AttributeScopes.SwiftUIAttributes.KerningAttribute](kerningattribute.md).

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
