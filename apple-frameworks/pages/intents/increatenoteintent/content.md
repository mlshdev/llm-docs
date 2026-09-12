> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintent/content](https://developer.apple.com/documentation/intents/increatenoteintent/content)

# content (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The main content of the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var content: INNoteContent? { get }
```

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.
- [groupName](groupname.md): Deprecated. The group that contains the note.

# content (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The main content of the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INNoteContent * content;
```

```objectivec
@property (atomic, copy, readonly, nullable) INNoteContent * content;
```

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.
- [groupName](groupname.md): Deprecated. The group that contains the note.
