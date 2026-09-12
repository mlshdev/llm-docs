> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/writingoptions](https://developer.apple.com/documentation/appkit/nspasteboard/writingoptions)

# NSPasteboard.WritingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.6+

Type to specify options for writing to a pasteboard.

## Declaration

```swift
struct WritingOptions
```

<a id="overview"></a>

## Overview

For possible values, see [Pasteboard Writing Options](../pasteboard-writing-options.md).

## Topics

### Options

- [promised](writingoptions/promised.md): Data for a type with this option is promised, not immediately written.

### Initializers

- [init(rawValue:)](writingoptions/init%28rawvalue_%29.md)

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

# NSPasteboardWritingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

Type to specify options for writing to a pasteboard.

## Declaration

```objectivec
enum NSPasteboardWritingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

For possible values, see [Pasteboard Writing Options](../pasteboard-writing-options.md).

## Topics

### Options

- [NSPasteboardWritingPromised](writingoptions/promised.md): Data for a type with this option is promised, not immediately written.
