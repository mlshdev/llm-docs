> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintent/groupname](https://developer.apple.com/documentation/intents/increatenoteintent/groupname)

# groupName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The group that contains the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var groupName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use groups to organize notes within your app. For example, a group might correspond to a folder that contains related notes. The group name should correspond to the user-visible name of the group in your app.

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.
- [content](content.md): Deprecated. The main content of the note.

# groupName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The group that contains the note.

> INCreateNoteIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * groupName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * groupName;
```

<a id="Discussion"></a>

## Discussion

Use groups to organize notes within your app. For example, a group might correspond to a folder that contains related notes. The group name should correspond to the user-visible name of the group in your app.

## See Also

### Getting the Note Content

- [title](title.md): Deprecated. The title text for the note.
- [content](content.md): Deprecated. The main content of the note.
