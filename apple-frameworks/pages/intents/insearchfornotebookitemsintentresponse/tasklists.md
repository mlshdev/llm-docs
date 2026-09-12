> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponse/tasklists](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponse/tasklists)

# taskLists (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task lists found by the search.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var taskLists: [INTaskList]? { get set }
```

<a id="Discussion"></a>

## Discussion

When searching for items of type [INNotebookItemType.taskList](../innotebookitemtype/tasklist.md), put the results of your search in this property. Assign a value to the [sortType](sorttype.md) property that indicates how you sorted the results.

## See Also

### Specifying the Search Results

- [notes](notes.md): Deprecated. The notes found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.

# taskLists (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The task lists found by the search.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INTaskList *> * taskLists;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INTaskList *> * taskLists;
```

<a id="Discussion"></a>

## Discussion

When searching for items of type [INNotebookItemTypeTaskList](../innotebookitemtype/tasklist.md), put the results of your search in this property. Assign a value to the [sortType](sorttype.md) property that indicates how you sorted the results.

## See Also

### Specifying the Search Results

- [notes](notes.md): Deprecated. The notes found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.
