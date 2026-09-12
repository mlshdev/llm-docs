> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponse/sorttype](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponse/sorttype)

# sortType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how you sorted the search results.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var sortType: INSortType { get set }
```

<a id="Discussion"></a>

## Discussion

After assigning the search results to the appropriate property of your response object, update this property to specify how you sorted the results.

## See Also

### Specifying the Search Results

- [notes](notes.md): Deprecated. The notes found by the search.
- [taskLists](tasklists.md): Deprecated. The task lists found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.

# sortType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

An indicator of how you sorted the search results.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INSortType sortType;
```

```objectivec
@property (atomic, assign, readwrite) INSortType sortType;
```

<a id="Discussion"></a>

## Discussion

After assigning the search results to the appropriate property of your response object, update this property to specify how you sorted the results.

## See Also

### Specifying the Search Results

- [notes](notes.md): Deprecated. The notes found by the search.
- [taskLists](tasklists.md): Deprecated. The task lists found by the search.
- [tasks](tasks.md): Deprecated. The individual tasks found by the search.
- [INSortType](../insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.
