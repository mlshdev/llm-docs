> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorageeditactions](https://developer.apple.com/documentation/appkit/nstextstorageeditactions)

# NSTextStorageEditActions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.11+

Constants that indicate the types of changes.

## Declaration

```swift
struct NSTextStorageEditActions
```

<a id="overview"></a>

## Overview

These values are also OR’ed together in notifications to inform instances of `NSLayoutManager` was changed—see [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md).

## Topics

### Constants

- [editedAttributes](nstextstorageeditactions/editedattributes.md): Attributes were added, removed, or changed.
- [editedCharacters](nstextstorageeditactions/editedcharacters.md): Characters were added, removed, or replaced.

### Initializers

- [init(rawValue:)](nstextstorageeditactions/init%28rawvalue_%29.md)

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

# NSTextStorageEditActions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that indicate the types of changes.

## Declaration

```objectivec
enum NSTextStorageEditActions : NSUInteger;
```

<a id="overview"></a>

## Overview

These values are also OR’ed together in notifications to inform instances of `NSLayoutManager` was changed—see [textStorage:edited:range:changeInLength:invalidatedRange:](nslayoutmanager/textstorage%28__edited_range_changeinlength_invalidatedrange_%29.md).

## Topics

### Constants

- [NSTextStorageEditedAttributes](nstextstorageeditactions/editedattributes.md): Attributes were added, removed, or changed.
- [NSTextStorageEditedCharacters](nstextstorageeditactions/editedcharacters.md): Characters were added, removed, or replaced.

## See Also

### Constants

- [NSTextStorageEditedOptions](nstextstorageeditedoptions.md): Deprecated. \*\* Deprecations \*\*\*
