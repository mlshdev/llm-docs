> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/alignmentoptions](https://developer.apple.com/documentation/foundation/alignmentoptions)

# AlignmentOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Values representing alignment operations.

## Declaration

```swift
struct AlignmentOptions
```

<a id="overview"></a>

## Overview

These constants are used by the [NSIntegralRectWithOptions(\_:\_:)](nsintegralrectwithoptions%28____%29.md) function and other related methods, such as [backingAlignedRect(\_:options:)](https://developer.apple.com/documentation/appkit/nsview/backingalignedrect%28_:options:%29).

## Topics

### Constants

- [alignMinXInward](alignmentoptions/alignminxinward.md): Specifies that alignment of the minimum X coordinate should be to the nearest inward integral value.
- [alignMinYInward](alignmentoptions/alignminyinward.md): Specifies that alignment of the minimum Y coordinate should be to the nearest inward integral value.
- [alignMaxXInward](alignmentoptions/alignmaxxinward.md): Specifies that alignment of the maximum X coordinate should be to the nearest inward integral value.
- [alignMaxYInward](alignmentoptions/alignmaxyinward.md): Specifies that alignment of the maximum X coordinate should be to the nearest inward integral value.
- [alignWidthInward](alignmentoptions/alignwidthinward.md): Specifies that alignment of the width should be to the nearest inward integral value.
- [alignHeightInward](alignmentoptions/alignheightinward.md): Specifies that alignment of the height should be to the nearest inward integral value.
- [alignMinXOutward](alignmentoptions/alignminxoutward.md): Specifies that alignment of the minimum X coordinate should be to the nearest outward integral value.
- [alignMinYOutward](alignmentoptions/alignminyoutward.md): Specifies that alignment of the minimum Y coordinate should be to the nearest outward integral value.
- [alignMaxXOutward](alignmentoptions/alignmaxxoutward.md): Specifies that alignment of the maximum X coordinate should be to the nearest outward integral value.
- [alignMaxYOutward](alignmentoptions/alignmaxyoutward.md): Specifies that alignment of the maximum Y coordinate should be to the nearest outward integral value.
- [alignWidthOutward](alignmentoptions/alignwidthoutward.md): Specifies that alignment of the width should be to the nearest outward integral value.
- [alignHeightOutward](alignmentoptions/alignheightoutward.md): Specifies that alignment of the height should be to the nearest outward integral value.
- [alignMinXNearest](alignmentoptions/alignminxnearest.md): Specifies that alignment of the minimum X coordinate should be to the nearest integral value.
- [alignMinYNearest](alignmentoptions/alignminynearest.md): Specifies that alignment of the minimum Y coordinate should be to the nearest integral value.
- [alignMaxXNearest](alignmentoptions/alignmaxxnearest.md): Specifies that alignment of the maximum X coordinate should be to the nearest integral value.
- [alignMaxYNearest](alignmentoptions/alignmaxynearest.md): Specifies that alignment of the maximum Y coordinate should be to the nearest integral value.
- [alignWidthNearest](alignmentoptions/alignwidthnearest.md): Specifies that alignment of the width should be to the nearest integral value.
- [alignHeightNearest](alignmentoptions/alignheightnearest.md): Specifies that alignment of the height should be to the nearest integral value.
- [alignRectFlipped](alignmentoptions/alignrectflipped.md): This option should be included if the rectangle is in a flipped coordinate system. This allows 0.5 to be treated in a visually consistent way.
- [alignAllEdgesInward](alignmentoptions/alignalledgesinward.md): Aligns all edges inward. This is the same as `NSAlignMinXInward|NSAlignMaxXInward|NSAlignMinYInward|NSAlignMaxYInward`.
- [alignAllEdgesOutward](alignmentoptions/alignalledgesoutward.md): Aligns all edges outwards. This is the same as `NSAlignMinXOutward|NSAlignMaxXOutward|NSAlignMinYOutward|NSAlignMaxYOutward`.
- [alignAllEdgesNearest](alignmentoptions/alignalledgesnearest.md): Aligns all edges to the nearest value. This is the same as `NSAlignMinXNearest|NSAlignMaxXNearest|NSAlignMinYNearest|NSAlignMaxYNearest`.

### Initializers

- [init(rawValue:)](alignmentoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Related Types

- [NSRectEdge](nsrectedge.md)
- [NSRectArray](nsrectarray.md): Type indicating a parameter is array of `NSRect` structures.
- [NSRectPointer](nsrectpointer.md): Type indicating a parameter is a pointer to an `NSRect` structure.

# NSAlignmentOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Values representing alignment operations.

## Declaration

```objectivec
enum NSAlignmentOptions : unsigned long long;
```

<a id="overview"></a>

## Overview

These constants are used by the [NSIntegralRectWithOptions](nsintegralrectwithoptions%28____%29.md) function and other related methods, such as [backingAlignedRect:options:](https://developer.apple.com/documentation/appkit/nsview/backingalignedrect%28_:options:%29).

## Topics

### Constants

- [NSAlignMinXInward](alignmentoptions/alignminxinward.md): Specifies that alignment of the minimum X coordinate should be to the nearest inward integral value.
- [NSAlignMinYInward](alignmentoptions/alignminyinward.md): Specifies that alignment of the minimum Y coordinate should be to the nearest inward integral value.
- [NSAlignMaxXInward](alignmentoptions/alignmaxxinward.md): Specifies that alignment of the maximum X coordinate should be to the nearest inward integral value.
- [NSAlignMaxYInward](alignmentoptions/alignmaxyinward.md): Specifies that alignment of the maximum X coordinate should be to the nearest inward integral value.
- [NSAlignWidthInward](alignmentoptions/alignwidthinward.md): Specifies that alignment of the width should be to the nearest inward integral value.
- [NSAlignHeightInward](alignmentoptions/alignheightinward.md): Specifies that alignment of the height should be to the nearest inward integral value.
- [NSAlignMinXOutward](alignmentoptions/alignminxoutward.md): Specifies that alignment of the minimum X coordinate should be to the nearest outward integral value.
- [NSAlignMinYOutward](alignmentoptions/alignminyoutward.md): Specifies that alignment of the minimum Y coordinate should be to the nearest outward integral value.
- [NSAlignMaxXOutward](alignmentoptions/alignmaxxoutward.md): Specifies that alignment of the maximum X coordinate should be to the nearest outward integral value.
- [NSAlignMaxYOutward](alignmentoptions/alignmaxyoutward.md): Specifies that alignment of the maximum Y coordinate should be to the nearest outward integral value.
- [NSAlignWidthOutward](alignmentoptions/alignwidthoutward.md): Specifies that alignment of the width should be to the nearest outward integral value.
- [NSAlignHeightOutward](alignmentoptions/alignheightoutward.md): Specifies that alignment of the height should be to the nearest outward integral value.
- [NSAlignMinXNearest](alignmentoptions/alignminxnearest.md): Specifies that alignment of the minimum X coordinate should be to the nearest integral value.
- [NSAlignMinYNearest](alignmentoptions/alignminynearest.md): Specifies that alignment of the minimum Y coordinate should be to the nearest integral value.
- [NSAlignMaxXNearest](alignmentoptions/alignmaxxnearest.md): Specifies that alignment of the maximum X coordinate should be to the nearest integral value.
- [NSAlignMaxYNearest](alignmentoptions/alignmaxynearest.md): Specifies that alignment of the maximum Y coordinate should be to the nearest integral value.
- [NSAlignWidthNearest](alignmentoptions/alignwidthnearest.md): Specifies that alignment of the width should be to the nearest integral value.
- [NSAlignHeightNearest](alignmentoptions/alignheightnearest.md): Specifies that alignment of the height should be to the nearest integral value.
- [NSAlignRectFlipped](alignmentoptions/alignrectflipped.md): This option should be included if the rectangle is in a flipped coordinate system. This allows 0.5 to be treated in a visually consistent way.
- [NSAlignAllEdgesInward](alignmentoptions/alignalledgesinward.md): Aligns all edges inward. This is the same as `NSAlignMinXInward|NSAlignMaxXInward|NSAlignMinYInward|NSAlignMaxYInward`.
- [NSAlignAllEdgesOutward](alignmentoptions/alignalledgesoutward.md): Aligns all edges outwards. This is the same as `NSAlignMinXOutward|NSAlignMaxXOutward|NSAlignMinYOutward|NSAlignMaxYOutward`.
- [NSAlignAllEdgesNearest](alignmentoptions/alignalledgesnearest.md): Aligns all edges to the nearest value. This is the same as `NSAlignMinXNearest|NSAlignMaxXNearest|NSAlignMinYNearest|NSAlignMaxYNearest`.

## See Also

### Related Types

- [NSRectEdge](nsrectedge.md)
- [NSRectArray](nsrectarray.md): Type indicating a parameter is array of `NSRect` structures.
- [NSRectPointer](nsrectpointer.md): Type indicating a parameter is a pointer to an `NSRect` structure.
