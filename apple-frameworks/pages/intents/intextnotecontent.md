> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intextnotecontent](https://developer.apple.com/documentation/intents/intextnotecontent)

# INTextNoteContent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The textual content of a note.

> INTextNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INTextNoteContent
```

## Topics

### Initializing the Text Note

- [init(text:)](intextnotecontent/init%28text_%29.md): Deprecated. Initializes a text-based note with the specified content.

### Getting the Note Text

- [text](intextnotecontent/text.md): Deprecated. Text from the main content of the note.

## Relationships

### Inherits From

- [INNoteContent](innotecontent.md)

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
- [INNoteContent](innotecontent.md): Deprecated. An abstract class that defines the types of content contained in notes.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.

# INTextNoteContent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The textual content of a note.

> INTextNoteContent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INTextNoteContent : INNoteContent
```

## Topics

### Initializing the Text Note

- [initWithText:](intextnotecontent/init%28text_%29.md): Deprecated. Initializes a text-based note with the specified content.

### Getting the Note Text

- [text](intextnotecontent/text.md): Deprecated. Text from the main content of the note.

## Relationships

### Inherits From

- [INNoteContent](innotecontent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Objects

- [INNote](innote.md): Deprecated. The content and metadata associated with a single note entry in your app.
- [INNoteContent](innotecontent.md): Deprecated. An abstract class that defines the types of content contained in notes.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.
