> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes/foregroundcolorattribute

# AttributeScopes.SwiftUIAttributes.ForegroundColorAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A key for the color that draws a run of attributed text.

## Declaration

```swift
@frozen enum ForegroundColorAttribute
```

<a id="overview"></a>

## Overview

Set this key to tint part of a string without splitting it into several `Text` views:

```
var status = AttributedString("Low battery")
status.foregroundColor = .red

Text(status)
```

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
