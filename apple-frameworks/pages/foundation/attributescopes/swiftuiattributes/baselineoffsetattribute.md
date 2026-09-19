> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes/baselineoffsetattribute

# AttributeScopes.SwiftUIAttributes.BaselineOffsetAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A key for the distance a run of attributed text shifts from its baseline.

## Declaration

```swift
@frozen enum BaselineOffsetAttribute
```

<a id="overview"></a>

## Overview

A positive value raises the run and a negative value lowers it, which lets you set a unit or a footnote marker above the surrounding text:

```
var measure = AttributedString("12 m")
if let unit = measure.range(of: "m") {
    measure[unit].baselineOffset = 6
}

Text(measure)
```

Shifting a run does not change the height of the line, so a large offset can push text into the line above or below.

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
