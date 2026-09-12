> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413077-mdquerystop](https://developer.apple.com/documentation/coreservices/1413077-mdquerystop)

# MDQueryStop(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Stops the query from generating more results.

## Declaration

```swift
func MDQueryStop(_ query: MDQuery!)
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

Queries may be executed only once and cannot be restarted. The query will first complete processing any unprocessed results.do. That may trigger a progress notification, so be aware of that if you are stopping a query from within your progress note handler; that is, during this function, a recursive progress and/or finished notification might occur, which might recursively call your notification handler. It is safe to call this function recursively. You would call this function to stop a query that is generating way too many results to be useful, but still want to access the results that have come in so far. If a query is stopped before the gathering phase finishes, it will not report itself as finished, nor will it send out a finished notification.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute(\_:\_:)](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryDisableUpdates(\_:)](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates(\_:)](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete(\_:)](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

# MDQueryStop (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Stops the query from generating more results.

## Declaration

```objectivec
void MDQueryStop(MDQueryRef query);
```

## Parameters

- `query`: The query.

<a id="discussion"></a>

## Discussion

Queries may be executed only once and cannot be restarted. The query will first complete processing any unprocessed results.do. That may trigger a progress notification, so be aware of that if you are stopping a query from within your progress note handler; that is, during this function, a recursive progress and/or finished notification might occur, which might recursively call your notification handler. It is safe to call this function recursively. You would call this function to stop a query that is generating way too many results to be useful, but still want to access the results that have come in so far. If a query is stopped before the gathering phase finishes, it will not report itself as finished, nor will it send out a finished notification.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryExecute](1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryDisableUpdates](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.
