> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413066-mdqueryenableupdates](https://developer.apple.com/documentation/coreservices/1413066-mdqueryenableupdates)

# MDQueryEnableUpdates(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Enables updates to the query result list.

## Declaration

```swift
func MDQueryEnableUpdates(_ query: MDQuery!)
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

This function should be called when finished iterating through the list of results. Live-updates to the query results will continue when all the disables have been matched by a corresponding enable.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute(\_:\_:)](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop(\_:)](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates(\_:)](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryIsGatheringComplete(\_:)](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

# MDQueryEnableUpdates (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Enables updates to the query result list.

## Declaration

```objectivec
void MDQueryEnableUpdates(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

This function should be called when finished iterating through the list of results. Live-updates to the query results will continue when all the disables have been matched by a corresponding enable.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryIsGatheringComplete](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.
