> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/remove(from:formode:)](https://developer.apple.com/documentation/opendirectory/odquery/remove(from:formode:))

# remove(from:forMode:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes the query from a specified run loop.

## Declaration

```swift
func remove(from inRunLoop: RunLoop!, forMode inMode: String!)
```

## Parameters

- `inRunLoop`: The run loop.
- `inMode`: The mode to remove the query from.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [synchronize()](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.

# removeFromRunLoop:forMode: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Removes the query from a specified run loop.

## Declaration

```objectivec
- (void) removeFromRunLoop:(NSRunLoop *) inRunLoop forMode:(NSString *) inMode;
```

## Parameters

- `inRunLoop`: The run loop.
- `inMode`: The mode to remove the query from.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [synchronize](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.
