> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/execute(_:with:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/execute(_:with:))

# execute(\_:with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the specified request on each of the coordinator’s persistent stores.

## Declaration

```swift
func execute(_ request: NSPersistentStoreRequest, with context: NSManagedObjectContext) throws -> Any
```

## Parameters

- `request`: A fetch or save request.
- `context`: The context against which `request` should be executed.

<a id="return-value"></a>

## Return Value

An array containing managed objects, managed object IDs, or dictionaries as appropriate for a fetch request; an empty array if `request` is a save request, or `nil` if an error occurred.

<a id="discussion"></a>

## Discussion

User defined requests return arrays of arrays, where a nested array is the result returned from a single store.

## See Also

### Performing tasks

- [perform(\_:)](perform%28__%29-74udx.md): Executes the provided closure asynchronously on the coordinator’s queue and awaits the result.
- [performAndWait(\_:)](performandwait%28__%29-15ude.md): Executes the provided closure on the coordinator’s queue and waits for it to finish.
- [perform(\_:)](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performAndWait(\_:)](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.

# executeRequest:withContext:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes the specified request on each of the coordinator’s persistent stores.

## Declaration

```objectivec
- (id) executeRequest:(NSPersistentStoreRequest *) request withContext:(NSManagedObjectContext *) context error:(NSError **) error;
```

## Parameters

- `request`: A fetch or save request.
- `context`: The context against which `request` should be executed.
- `error`: If an error occurs, upon return contains an NSError object that describes the problem.

<a id="return-value"></a>

## Return Value

An array containing managed objects, managed object IDs, or dictionaries as appropriate for a fetch request; an empty array if `request` is a save request, or `nil` if an error occurred.

<a id="discussion"></a>

## Discussion

User defined requests return arrays of arrays, where a nested array is the result returned from a single store.

## See Also

### Performing tasks

- [performBlock:](perform%28__%29-7jqb.md): Deprecated. Executes the provided closure asynchronously on the coordinator’s queue.
- [performBlockAndWait:](performandwait%28__%29-d3kq.md): Deprecated. Executes the provided closure on the coordinator’s queue and waits for it to finish.
