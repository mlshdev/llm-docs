> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotecontent](https://developer.apple.com/documentation/intents/innotecontent)

# INNoteContent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An abstract class that defines the types of content contained in notes.

> INNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INNoteContent
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you create instances of the [INTextNoteContent](intextnotecontent.md) or [INImageNoteContent](inimagenotecontent.md) subclasses.

## Topics

### Initializers

- [init(coder:)](innotecontent/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INImageNoteContent](inimagenotecontent.md)
- [INTextNoteContent](intextnotecontent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Objects

- [INNote](innote.md): Deprecated. The content and metadata associated with a single note entry in your app.
- [INTextNoteContent](intextnotecontent.md): Deprecated. The textual content of a note.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.

# INNoteContent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An abstract class that defines the types of content contained in notes.

> INNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INNoteContent : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you create instances of the [INTextNoteContent](intextnotecontent.md) or [INImageNoteContent](inimagenotecontent.md) subclasses.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INImageNoteContent](inimagenotecontent.md)
- [INTextNoteContent](intextnotecontent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Objects

- [INNote](innote.md): Deprecated. The content and metadata associated with a single note entry in your app.
- [INTextNoteContent](intextnotecontent.md): Deprecated. The textual content of a note.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.
