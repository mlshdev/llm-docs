> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextwritingdirection](https://developer.apple.com/documentation/uikit/nstextwritingdirection)

# NSTextWritingDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Options for specifying text-writing direction.

> Use [NSWritingDirectionFormatType](nswritingdirectionformattype.md) instead.

## Declaration

```swift
enum NSTextWritingDirection
```

<a id="Overview"></a>

## Overview

You can use the logical OR operator to combine these constants with [NSWritingDirection.leftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirection.rightToLeft](nswritingdirection/righttoleft.md) when used with [`writingDirection`](../foundation/nsattributedstring/key/writingdirection.md) to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSTextWritingDirection.embedding](nstextwritingdirection/embedding.md): Deprecated. Text is embedded in text with another writing direction.
- [NSTextWritingDirection.override](nstextwritingdirection/override.md): Deprecated. Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

### Initializers

- [init(rawValue:)](https://developer.apple.com/documentation/uikit/nstextwritingdirection/init%28rawvalue:%29): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTextWritingDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Options for specifying text-writing direction.

> Use [NSWritingDirectionFormatType](nswritingdirectionformattype.md) instead.

## Declaration

```objectivec
enum NSTextWritingDirection : NSInteger;
```

<a id="Overview"></a>

## Overview

You can use the logical OR operator to combine these constants with [NSWritingDirectionLeftToRight](nswritingdirection/lefttoright.md) or [NSWritingDirectionRightToLeft](nswritingdirection/righttoleft.md) when used with [`writingDirection`](../foundation/nsattributedstring/key/writingdirection.md) to specify formatting controls defined by the Unicode Bidirectional Algorithm in [Unicode Standard Annex #9](http://unicode.org/reports/tr9/).

## Topics

### Constants

- [NSTextWritingDirectionEmbedding](nstextwritingdirection/embedding.md): Deprecated. Text is embedded in text with another writing direction.
- [NSTextWritingDirectionOverride](nstextwritingdirection/override.md): Deprecated. Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.
