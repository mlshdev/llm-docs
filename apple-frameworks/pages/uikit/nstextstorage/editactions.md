> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/editactions](https://developer.apple.com/documentation/uikit/nstextstorage/editactions)

# NSTextStorage.EditActions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that indicate the types of changes.

## Declaration

```swift
struct EditActions
```

<a id="overview"></a>

## Overview

These values are also OR’ed together in notifications to inform instances of `NSLayoutManager` was changed—see [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29).

## Topics

### Constants

- [editedAttributes](editactions/editedattributes.md): Attributes were added, removed, or changed.
- [editedCharacters](editactions/editedcharacters.md): Characters were added, removed, or replaced.

### Initializers

- [init(rawValue:)](editactions/init%28rawvalue_%29.md)

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

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that indicate the types of changes.

## Declaration

```objectivec
enum NSTextStorageEditActions : NSUInteger;
```

<a id="overview"></a>

## Overview

These values are also OR’ed together in notifications to inform instances of `NSLayoutManager` was changed—see [textStorage:edited:range:changeInLength:invalidatedRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29).

## Topics

### Constants

- [NSTextStorageEditedAttributes](editactions/editedattributes.md): Attributes were added, removed, or changed.
- [NSTextStorageEditedCharacters](editactions/editedcharacters.md): Characters were added, removed, or replaced.

## See Also

### Constants

- [NSTextStorageEditedOptions](https://developer.apple.com/documentation/appkit/nstextstorageeditedoptions): Deprecated. \*\* Deprecations \*\*\*
