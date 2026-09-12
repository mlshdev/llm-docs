> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/title](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/title)

# title (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text to search for in a note, task, or task list.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var title: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains a valid string, search for that string in the title text of notes, tasks, or task lists. For notes, use this string to match only the portion of the note that you use to summarize the note to the user.

When the value of this property is `nil`, do not use the title text as part of your search criteria.

## See Also

### Searching by Content

- [content](content.md): Deprecated. The text to search for in the body of a note.

# title (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The title text to search for in a note, task, or task list.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * title;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * title;
```

<a id="Discussion"></a>

## Discussion

When this property contains a valid string, search for that string in the title text of notes, tasks, or task lists. For notes, use this string to match only the portion of the note that you use to summarize the note to the user.

When the value of this property is `nil`, do not use the title text as part of your search criteria.

## See Also

### Searching by Content

- [content](content.md): Deprecated. The text to search for in the body of a note.
