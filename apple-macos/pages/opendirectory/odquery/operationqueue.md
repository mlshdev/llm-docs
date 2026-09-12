> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/operationqueue](https://developer.apple.com/documentation/opendirectory/odquery/operationqueue)

# operationQueue (Swift)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The queue on which asynchronous results are delivered to the delegate.

## Declaration

```swift
var operationQueue: OperationQueue! { get set }
```

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize()](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.

# operationQueue (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The queue on which asynchronous results are delivered to the delegate.

## Declaration

```objectivec
@property (retain, readwrite) NSOperationQueue * operationQueue;
```

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.
