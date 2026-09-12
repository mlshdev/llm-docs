> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/iscancelled](https://developer.apple.com/documentation/corespotlight/cssearchquery/iscancelled)

# isCancelled (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

A Boolean value that indicates whether the current query is no longer running.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `true` if you canceled it, and `false` if it’s still running or able to run.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.

# cancelled (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

A Boolean value that indicates whether the current query is no longer running.

## Declaration

```objectivec
@property (readonly, getter=isCancelled) BOOL cancelled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `true` if you canceled it, and `false` if it’s still running or able to run.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.
