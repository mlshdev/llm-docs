> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/founditemcount](https://developer.apple.com/documentation/corespotlight/cssearchquery/founditemcount)

# foundItemCount (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The number of matching items found for the given query string.

## Declaration

```swift
var foundItemCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

As Spotlight finds matches to the query string, it updates the value of this property and delivers the new results to the handler in the [foundItemsHandler](founditemshandler.md) property. This value reflects the total number of matching items, including the number of items the query delivered to your handler block previously.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.

# foundItemCount (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The number of matching items found for the given query string.

## Declaration

```objectivec
@property (readonly) NSUInteger foundItemCount;
```

<a id="Discussion"></a>

## Discussion

As Spotlight finds matches to the query string, it updates the value of this property and delivers the new results to the handler in the [foundItemsHandler](founditemshandler.md) property. This value reflects the total number of matching items, including the number of items the query delivered to your handler block previously.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.
