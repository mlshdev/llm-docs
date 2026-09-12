> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413019-mdquerysetdispatchqueue](https://developer.apple.com/documentation/coreservices/1413019-mdquerysetdispatchqueue)

# MDQuerySetDispatchQueue(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Sets the dispatch queue on which query results will be delivered by MDQueryExecute.

## Declaration

```swift
func MDQuerySetDispatchQueue(_ query: MDQuery!, _ queue: dispatch_queue_t!)
```

## Parameters

- `query`: The query.
- `queue`: The dispatch queue on which results should be delivered.

<a id="discussion"></a>

## Discussion

It is not advisable to change set dispatch queue after [MDQueryExecute(\_:\_:)](1413099-mdqueryexecute.md) has been called with the query. 

Setting the dispatch queue for a synchronous query ([kMDQuerySynchronous](kmdquerysynchronous.md)) has no effect.

## See Also

### Creating Queries

- [MDQueryCreate(\_:\_:\_:\_:)](1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset(\_:\_:\_:\_:\_:)](1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetSearchScope(\_:\_:\_:)](1413048-mdquerysetsearchscope.md): Sets the search scope for a query instance.

# MDQuerySetDispatchQueue (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.6+

Sets the dispatch queue on which query results will be delivered by MDQueryExecute.

## Declaration

```objectivec
void MDQuerySetDispatchQueue(MDQueryRef query, dispatch_queue_t queue);
```

## Parameters

- `query`: The query.
- `queue`: The dispatch queue on which results should be delivered.

<a id="discussion"></a>

## Discussion

It is not advisable to change set dispatch queue after [MDQueryExecute](1413099-mdqueryexecute.md) has been called with the query. 

Setting the dispatch queue for a synchronous query ([kMDQuerySynchronous](mdqueryoptionflags/kmdquerysynchronous.md)) has no effect.

## See Also

### Creating Queries

- [MDQueryCreate](1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset](1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetSearchScope](1413048-mdquerysetsearchscope.md): Sets the search scope for a query instance.
