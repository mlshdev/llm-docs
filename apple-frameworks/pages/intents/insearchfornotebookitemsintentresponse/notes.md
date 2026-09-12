> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponse/notes](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponse/notes)

# notes (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The notes found by the search.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var notes: [INNote]? { get set }
```

<a id="Discussion"></a>

## Discussion

When searching for items of type [INNotebookItemType.note](../innotebookitemtype/note.md), put the results of your search in this property. Assign a value to the [sortType](sorttype.md) property that indicates how you sorted the results.

## See Also

### Specifying the Search Results

- [taskLists](tasklists.md): Deprecated. The task lists found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.

# notes (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The notes found by the search.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INNote *> * notes;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INNote *> * notes;
```

<a id="Discussion"></a>

## Discussion

When searching for items of type [INNotebookItemTypeNote](../innotebookitemtype/note.md), put the results of your search in this property. Assign a value to the [sortType](sorttype.md) property that indicates how you sorted the results.

## See Also

### Specifying the Search Results

- [taskLists](tasklists.md): Deprecated. The task lists found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.
