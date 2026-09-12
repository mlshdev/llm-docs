> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/content](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/content)

# content (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The text to search for in the body of a note.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var content: String? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains a valid string, search for that string in the body text of the user’s notes.

When the value of this property is `nil`, do not use the text as part of your search criteria.

## See Also

### Searching by Content

- [title](title.md): Deprecated. The title text to search for in a note, task, or task list.

# content (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The text to search for in the body of a note.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * content;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * content;
```

<a id="Discussion"></a>

## Discussion

When this property contains a valid string, search for that string in the body text of the user’s notes.

When the value of this property is `nil`, do not use the text as part of your search criteria.

## See Also

### Searching by Content

- [title](title.md): Deprecated. The title text to search for in a note, task, or task list.
