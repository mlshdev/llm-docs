> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innote/contents](https://developer.apple.com/documentation/intents/innote/contents)

# contents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The main content of the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var contents: [INNoteContent] { get }
```

<a id="Discussion"></a>

## Discussion

A note may contain any number of [INNoteContent](../innotecontent.md) objects with the note’s text and images.

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.

# contents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The main content of the note.

> INNote is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<INNoteContent *> * contents;
```

```objectivec
@property (atomic, copy, readonly) NSArray<INNoteContent *> * contents;
```

<a id="Discussion"></a>

## Discussion

A note may contain any number of [INNoteContent](../innotecontent.md) objects with the note’s text and images.

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.
