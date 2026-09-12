> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innote](https://developer.apple.com/documentation/intents/innote)

# INNote (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The content and metadata associated with a single note entry in your app.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INNote
```

<a id="overview"></a>

## Overview

When SiriKit asks you to create a note, use an instance of this class to specify the contents of the note.

## Topics

### Initializing a Note Object

- [init(title:contents:groupName:createdDateComponents:modifiedDateComponents:identifier:)](innote/init%28title_contents_groupname_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes a note object with the specified contents and attributes.

### Getting the Note Content

- [title](innote/title.md): Deprecated. The title text for the note.
- [contents](innote/contents.md): Deprecated. The main content of the note.

### Getting the Group Name

- [groupName](innote/groupname.md): Deprecated. The user-visible name of the group that contains the note.

### Getting the Modification Dates

- [createdDateComponents](innote/createddatecomponents.md): Deprecated. The creation date of the note.
- [modifiedDateComponents](innote/modifieddatecomponents.md): Deprecated. The date on which the intent most recently modified the note.

### Identifying the Note

- [identifier](innote/identifier.md): Deprecated. The unique identifier that you use to identify the note internally.

### Initializers

- [init(coder:)](innote/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

- [INNoteContent](innotecontent.md): Deprecated. An abstract class that defines the types of content contained in notes.
- [INTextNoteContent](intextnotecontent.md): Deprecated. The textual content of a note.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.

# INNote (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The content and metadata associated with a single note entry in your app.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INNote : NSObject
```

<a id="overview"></a>

## Overview

When SiriKit asks you to create a note, use an instance of this class to specify the contents of the note.

## Topics

### Initializing a Note Object

- [initWithTitle:contents:groupName:createdDateComponents:modifiedDateComponents:identifier:](innote/init%28title_contents_groupname_createddatecomponents_modifieddatecomponents_identifier_%29.md): Deprecated. Initializes a note object with the specified contents and attributes.

### Getting the Note Content

- [title](innote/title.md): Deprecated. The title text for the note.
- [contents](innote/contents.md): Deprecated. The main content of the note.

### Getting the Group Name

- [groupName](innote/groupname.md): Deprecated. The user-visible name of the group that contains the note.

### Getting the Modification Dates

- [createdDateComponents](innote/createddatecomponents.md): Deprecated. The creation date of the note.
- [modifiedDateComponents](innote/modifieddatecomponents.md): Deprecated. The date on which the intent most recently modified the note.

### Identifying the Note

- [identifier](innote/identifier.md): Deprecated. The unique identifier that you use to identify the note internally.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Objects

- [INNoteContent](innotecontent.md): Deprecated. An abstract class that defines the types of content contained in notes.
- [INTextNoteContent](intextnotecontent.md): Deprecated. The textual content of a note.
- [INImageNoteContent](inimagenotecontent.md): Deprecated. An image contained in a note.
