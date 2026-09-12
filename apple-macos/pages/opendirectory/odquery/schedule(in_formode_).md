> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/schedule(in:formode:)](https://developer.apple.com/documentation/opendirectory/odquery/schedule(in:formode:))

# schedule(in:forMode:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by scheduling the query in a run loop.

## Declaration

```swift
func schedule(in inRunLoop: RunLoop!, forMode inMode: String!)
```

## Parameters

- `inRunLoop`: The run loop.
- `inMode`: The mode of the run loop.

<a id="Discussion"></a>

## Discussion

A delegate must be set prior to calling this method; otherwise, results may be lost due to the lack of a receiver.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize()](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.

# scheduleInRunLoop:forMode: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Retrieves results from a query asynchronously by scheduling the query in a run loop.

## Declaration

```objectivec
- (void) scheduleInRunLoop:(NSRunLoop *) inRunLoop forMode:(NSString *) inMode;
```

## Parameters

- `inRunLoop`: The run loop.
- `inMode`: The mode of the run loop.

<a id="Discussion"></a>

## Discussion

A delegate must be set prior to calling this method; otherwise, results may be lost due to the lack of a receiver.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize](synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.
