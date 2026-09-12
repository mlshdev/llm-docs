> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413099-mdqueryexecute](https://developer.apple.com/documentation/coreservices/1413099-mdqueryexecute)

# MDQueryExecute(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Run the query, and populate the query with the results.

## Declaration

```swift
func MDQueryExecute(_ query: MDQuery!, _ optionFlags: CFOptionFlags) -> Bool
```

## Parameters

- `query`: The query to execute.
- `optionFlags`: A bitwise OR of the `MDQueryOptionFlags` to be used by the query.

<a id="return_value"></a>

## Return Value

Returns `TRUE` if the query was started, `FALSE` otherwise. Queries cannot be executed more than once.

<a id="discussion"></a>

## Discussion

Queries only gather results or process updates while the current thread's run loop is running.

Queries have two phases: the initial gathering phase that collects all currently matching results and a second live-update phase. Updates occur during the live-update phase if a change in a file occurs such that it no longer matches the query or if it begins to match the query. Files which begin to match the query are added to the result list, and files which no longer match the query expression are removed from the result list.

Query notifications are posted within the context of the same thread which executes the query.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryStop(\_:)](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates(\_:)](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates(\_:)](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete(\_:)](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

# MDQueryExecute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Run the query, and populate the query with the results.

## Declaration

```objectivec
Boolean MDQueryExecute(MDQueryRef query, CFOptionFlags optionFlags);
```

## Parameters

- `query`: The query to execute.
- `optionFlags`: A bitwise OR of the `MDQueryOptionFlags` to be used by the query.

<a id="return_value"></a>

## Return Value

Returns `TRUE` if the query was started, `FALSE` otherwise. Queries cannot be executed more than once.

<a id="discussion"></a>

## Discussion

Queries only gather results or process updates while the current thread's run loop is running.

Queries have two phases: the initial gathering phase that collects all currently matching results and a second live-update phase. Updates occur during the live-update phase if a change in a file occurs such that it no longer matches the query or if it begins to match the query. Files which begin to match the query are added to the result list, and files which no longer match the query expression are removed from the result list.

Query notifications are posted within the context of the same thread which executes the query.

## See Also

### Starting, Stopping and Pausing Queries

- [MDQueryStop](1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates](1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates](1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete](1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.
