> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413032-mdqueryisgatheringcomplete](https://developer.apple.com/documentation/coreservices/1413032-mdqueryisgatheringcomplete)

# MDQueryIsGatheringComplete(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns true if the first phase of a query, the initial result gathering, has finished.

## Declaration

```swift
func MDQueryIsGatheringComplete(_ query: MDQuery!) -> Bool
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

Returns `TRUE` if the first phase of a query has completed, otherwise `FALSE`.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute(\_:\_:)](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop(\_:)](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates(\_:)](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates(\_:)](1413066-mdqueryenableupdates.md): Enables updates to the query result list.

# MDQueryIsGatheringComplete (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Returns true if the first phase of a query, the initial result gathering, has finished.

## Declaration

```objectivec
Boolean MDQueryIsGatheringComplete(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="return_value"></a>

## Return Value

Returns `TRUE` if the first phase of a query has completed, otherwise `FALSE`.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
