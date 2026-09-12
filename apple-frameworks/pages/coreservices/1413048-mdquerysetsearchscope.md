> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1413048-mdquerysetsearchscope](https://developer.apple.com/documentation/coreservices/1413048-mdquerysetsearchscope)

# MDQuerySetSearchScope(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Sets the search scope for a query instance.

## Declaration

```swift
func MDQuerySetSearchScope(_ query: MDQuery!, _ scopeDirectories: CFArray!, _ scopeOptions: OptionBits)
```

## Parameters

- `query`: The query object to modify.
- `scopeDirectories`: A CFArray of CFStringRef or CFURLRef objects which specify where to search. For convenience the `kMDQueryScopeHome`, `kMDQueryScopeComputer` and `kMDQueryScopeNetwork` constants may also be included in the array.
- `scopeOptions`: Additional options for modifying the search. Currently you must pass 0.

<a id="discussion"></a>

## Discussion

## See Also

### Creating Queries

- [MDQueryCreate(\_:\_:\_:\_:)](1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset(\_:\_:\_:\_:\_:)](1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetDispatchQueue(\_:\_:)](1413019-mdquerysetdispatchqueue.md): Sets the dispatch queue on which query results will be delivered by MDQueryExecute.

# MDQuerySetSearchScope (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Sets the search scope for a query instance.

## Declaration

```objectivec
void MDQuerySetSearchScope(MDQueryRef query, CFArrayRef scopeDirectories, OptionBits scopeOptions);
```

## Parameters

- `query`: The query object to modify.
- `scopeDirectories`: A CFArray of CFStringRef or CFURLRef objects which specify where to search. For convenience the `kMDQueryScopeHome`, `kMDQueryScopeComputer` and `kMDQueryScopeNetwork` constants may also be included in the array.
- `scopeOptions`: Additional options for modifying the search. Currently you must pass 0.

<a id="discussion"></a>

## Discussion

## See Also

### Creating Queries

- [MDQueryCreate](1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset](1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetDispatchQueue](1413019-mdquerysetdispatchqueue.md): Sets the dispatch queue on which query results will be delivered by MDQueryExecute.
