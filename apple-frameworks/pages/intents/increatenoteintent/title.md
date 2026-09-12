> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintent/title](https://developer.apple.com/documentation/intents/increatenoteintent/title)

# title (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text for the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var title: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

The title text represents the initial text that user’s see for the note.

## See Also

### Getting the Note Content

- [content](content.md): Deprecated. The main content of the note.
- [groupName](groupname.md): Deprecated. The group that contains the note.

# title (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text for the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * title;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * title;
```

<a id="Discussion"></a>

## Discussion

The title text represents the initial text that user’s see for the note.

## See Also

### Getting the Note Content

- [content](content.md): Deprecated. The main content of the note.
- [groupName](groupname.md): Deprecated. The group that contains the note.
