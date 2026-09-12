> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery/synchronize()](https://developer.apple.com/documentation/opendirectory/odquery/synchronize())

# synchronize() (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Restarts a query, disposing of any results it has obtained.

## Declaration

```swift
func synchronize()
```

<a id="Discussion"></a>

## Discussion

If the query was originally scheduled in a run loop with [schedule(in:forMode:)](schedule%28in_formode_%29.md), the delegate is called with `inResults` set to `nil`, `[inError code]` set to `kODErrorQuerySynchronize`, and `[inError domain]` set to `kODErrorDomainFramework`.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [schedule(in:forMode:)](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [remove(from:forMode:)](remove%28from_formode_%29.md): Removes the query from a specified run loop.

# synchronize (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Restarts a query, disposing of any results it has obtained.

## Declaration

```objectivec
- (void) synchronize;
```

<a id="Discussion"></a>

## Discussion

If the query was originally scheduled in a run loop with [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md), the delegate is called with `inResults` set to `nil`, `[inError code]` set to `kODErrorQuerySynchronize`, and `[inError domain]` set to `kODErrorDomainFramework`.

## See Also

### Managing Asynchronous Queries

- [delegate](delegate.md): The query’s delegate.
- [operationQueue](operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [scheduleInRunLoop:forMode:](schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [removeFromRunLoop:forMode:](remove%28from_formode_%29.md): Removes the query from a specified run loop.
