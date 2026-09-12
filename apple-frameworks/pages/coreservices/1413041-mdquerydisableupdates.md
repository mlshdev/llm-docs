> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413041-mdquerydisableupdates](https://developer.apple.com/documentation/coreservices/1413041-mdquerydisableupdates)

# MDQueryDisableUpdates(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Disables updates to the query result list.

## Declaration

```swift
func MDQueryDisableUpdates(_ query: MDQuery!)
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

This function should be called before iterating over query results that could change due to live-updates. The disabled state is a counter and disabling can be done recursively and from different threads.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute(\_:\_:)](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop(\_:)](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryEnableUpdates(\_:)](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete(\_:)](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

# MDQueryDisableUpdates (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Disables updates to the query result list.

## Declaration

```objectivec
void MDQueryDisableUpdates(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

This function should be called before iterating over query results that could change due to live-updates. The disabled state is a counter and disabling can be done recursively and from different threads.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryEnableUpdates](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.
