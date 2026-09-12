> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/itemtype](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/itemtype)

# itemType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The type of items to include in your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
var itemType: INNotebookItemType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which items to search. When generating the list of search results, include items only of the specified type.

## See Also

### Searching by Type

- [INNotebookItemType](../innotebookitemtype.md): Deprecated. Constants indicating the types of items to search.

# itemType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The type of items to include in your search.

> INSearchForNotebookItemsIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INNotebookItemType itemType;
```

```objectivec
@property (atomic, assign, readonly) INNotebookItemType itemType;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which items to search. When generating the list of search results, include items only of the specified type.

## See Also

### Searching by Type

- [INNotebookItemType](../innotebookitemtype.md): Deprecated. Constants indicating the types of items to search.
