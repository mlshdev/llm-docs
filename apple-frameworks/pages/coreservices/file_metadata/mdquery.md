> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdquery](https://developer.apple.com/documentation/coreservices/file_metadata/mdquery)

# MDQuery (Swift)

**Framework:** Core Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

MDQuery is a CF-compliant object, follows the CF conventions,and can be used with the CF polymorphic functions, such as `CFRetain`.MDQuery encapsulates queries against the System store of the filemetadata. 

An MDQuery normally executes asynchronously and posts progressnotifications as the results are collected. During the gatheringphase the query results conform to the specified value lists andsorting.

MDQuery gathers results and processes updates only while thecurrent thread's run loop is running.

For functions that take an MDQueryRef parameter, if this parameteris not a valid MDQueryRef, the behavior is undefined. `NULL` isnot a valid MDQueryRef. 

For functions that take CF\*Ref parameters, such as CFStringRefand CFArrayRef, if this parameter is not a valid CF object of thecorrect type, the behavior is undefined. `NULL` isnot a valid CF\*Ref.

## Topics

### Creating Queries

- [MDQueryCreate(\_:\_:\_:\_:)](../1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset(\_:\_:\_:\_:\_:)](../1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetSearchScope(\_:\_:\_:)](../1413048-mdquerysetsearchscope.md): Sets the search scope for a query instance.
- [MDQuerySetDispatchQueue(\_:\_:)](../1413019-mdquerysetdispatchqueue.md): Sets the dispatch queue on which query results will be delivered by MDQueryExecute.

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount(\_:\_:)](../1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters(\_:)](../1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters(\_:\_:)](../1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes(\_:)](../1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes(\_:)](../1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString(\_:)](../1413004-mdquerycopyquerystring.md): Returns the query string of the query.

### Setting Callback Functions

- [MDQuerySetCreateResultFunction(\_:\_:\_:\_:)](../1413064-mdquerysetcreateresultfunction.md): Sets the function used to create the result objects of the MDQuery.
- [MDQuerySetSortComparator(\_:\_:\_:)](../1413087-mdquerysetsortcomparator.md): Sets the function used to sort the results of an MDQuery.
- [MDQuerySetCreateValueFunction(\_:\_:\_:\_:)](../1413017-mdquerysetcreatevaluefunction.md): Sets the function used to create the value objects of the MDQuery.

### Starting, Stopping and Pausing Queries

- [MDQueryExecute(\_:\_:)](../1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop(\_:)](../1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates(\_:)](../1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates(\_:)](../1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete(\_:)](../1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute(\_:\_:)](../1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex(\_:\_:\_:)](../1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue(\_:\_:\_:)](../1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult(\_:\_:)](../1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex(\_:\_:)](../1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount(\_:)](../1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock(\_:\_:)](../1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

### Getting the Type Identifier

- [MDQueryGetTypeID()](../1413037-mdquerygettypeid.md): Returns the type identifier of all MDQuery instances

### Callbacks

- [MDQuerySortComparatorFunction](../mdquerysortcomparatorfunction.md): Callback function used to sort the results of a query.
- [MDQueryCreateResultFunction](../mdquerycreateresultfunction.md): Callback function used to create the result objects stored and returned by a query.
- [MDQueryCreateValueFunction](../mdquerycreatevaluefunction.md): Callback function usedto create the value objects stored and returned by a query.

### Batching Parameters

- [MDQueryBatchingParams](../mdquerybatchingparams.md): Structure containing the progress notification batchingparameters of a MDQuery.

### Miscellaneous

- [MDQuery](../mdquery.md): A reference to a MDQuery object.

### Query Option Flags

- [MDQueryOptionFlags](../mdqueryoptionflags.md): Specify the execution mode for a query.

### Notifications

- [kMDQueryDidFinishNotification](mdquery/kmdquerydidfinishnotification.md): Indicates that a query has finished with the initial result-gathering phase.
- [kMDQueryDidUpdateNotification](mdquery/kmdquerydidupdatenotification.md): Indicates that a query’s results list has change during the live-update phase of a query.
- [kMDQueryProgressNotification](mdquery/kmdqueryprogressnotification.md): Indicates that a query’s results list has change during the initial result-gathering phase of a query.

### Notification Info Keys

- [Query Result Change Keys](mdquery/query_result_change_keys.md): Specify the items that have changed in the query results.
- [Query Search Scope Keys](mdquery/query_search_scope_keys.md): Specify the scope of a query’s search.
- [Result Relevance Sorting Key](mdquery/result_relevance_sorting_key.md): Key used in a user notification’s description dictionary that indicates the relevance of a result.

## See Also

### Related Documentation

- [Spotlight Overview](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/MetadataIntro/MetadataIntro.html#//apple_ref/doc/uid/TP40001268)
- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)

# MDQuery (Objective-C)

**Framework:** Core Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

MDQuery is a CF-compliant object, follows the CF conventions,and can be used with the CF polymorphic functions, such as `CFRetain`.MDQuery encapsulates queries against the System store of the filemetadata. 

An MDQuery normally executes asynchronously and posts progressnotifications as the results are collected. During the gatheringphase the query results conform to the specified value lists andsorting.

MDQuery gathers results and processes updates only while thecurrent thread's run loop is running.

For functions that take an MDQueryRef parameter, if this parameteris not a valid MDQueryRef, the behavior is undefined. `NULL` isnot a valid MDQueryRef. 

For functions that take CF\*Ref parameters, such as CFStringRefand CFArrayRef, if this parameter is not a valid CF object of thecorrect type, the behavior is undefined. `NULL` isnot a valid CF\*Ref.

## Topics

### Creating Queries

- [MDQueryCreate](../1413029-mdquerycreate.md): Creates a new query instance.
- [MDQueryCreateSubset](../1413027-mdquerycreatesubset.md): Creates a new query that is a subset of the specified parentquery.
- [MDQuerySetSearchScope](../1413048-mdquerysetsearchscope.md): Sets the search scope for a query instance.
- [MDQuerySetDispatchQueue](../1413019-mdquerysetdispatchqueue.md): Sets the dispatch queue on which query results will be delivered by MDQueryExecute.

### Getting and Setting Query Parameters

- [MDQuerySetMaxCount](../1413085-mdquerysetmaxcount.md): Sets the maximum number of results returned.
- [MDQueryGetBatchingParameters](../1413006-mdquerygetbatchingparameters.md): Returns the current parameters that control the batching of progress notifications.
- [MDQuerySetBatchingParameters](../1413103-mdquerysetbatchingparameters.md): Set the query batching parameters.
- [MDQueryCopyValueListAttributes](../1413071-mdquerycopyvaluelistattributes.md): Returns the list of attribute names for which values are being collected by the query.
- [MDQueryCopySortingAttributes](../1413059-mdquerycopysortingattributes.md): Returns the list of attribute names used to sort the results.
- [MDQueryCopyQueryString](../1413004-mdquerycopyquerystring.md): Returns the query string of the query.

### Setting Callback Functions

- [MDQuerySetCreateResultFunction](../1413064-mdquerysetcreateresultfunction.md): Sets the function used to create the result objects of the MDQuery.
- [MDQuerySetSortComparator](../1413087-mdquerysetsortcomparator.md): Sets the function used to sort the results of an MDQuery.
- [MDQuerySetCreateValueFunction](../1413017-mdquerysetcreatevaluefunction.md): Sets the function used to create the value objects of the MDQuery.

### Starting, Stopping and Pausing Queries

- [MDQueryExecute](../1413099-mdqueryexecute.md): Run the query, and populate the query with the results.
- [MDQueryStop](../1413077-mdquerystop.md): Stops the query from generating more results.
- [MDQueryDisableUpdates](../1413041-mdquerydisableupdates.md): Disables updates to the query result list.
- [MDQueryEnableUpdates](../1413066-mdqueryenableupdates.md): Enables updates to the query result list.
- [MDQueryIsGatheringComplete](../1413032-mdqueryisgatheringcomplete.md): Returns true if the first phase of a query, the initial result gathering, has finished.

### Getting Query Result Values

- [MDQueryCopyValuesOfAttribute](../1413105-mdquerycopyvaluesofattribute.md): Returns the list of values from the results of the query for the specified attribute.
- [MDQueryGetAttributeValueOfResultAtIndex](../1413046-mdquerygetattributevalueofresult.md): Returns the value of the named attribute for the result at the given index.
- [MDQueryGetCountOfResultsWithAttributeValue](../1413009-mdquerygetcountofresultswithattr.md): Returns the number of results which have the given attribute and attribute value.
- [MDQueryGetIndexOfResult](../1413093-mdquerygetindexofresult.md): Returns the current index of the given result.
- [MDQueryGetResultAtIndex](../1413055-mdquerygetresultatindex.md): Returns the current result at the given index.
- [MDQueryGetResultCount](../1413008-mdquerygetresultcount.md): Returns the number of results currently collected by the query.
- [MDQuerySetSortComparatorBlock](../1413021-mdquerysetsortcomparatorblock.md): Sets the block used to sort the results of an MDQuery.

### Getting the Type Identifier

- [MDQueryGetTypeID](../1413037-mdquerygettypeid.md): Returns the type identifier of all MDQuery instances

### Callbacks

- [MDQuerySortComparatorFunction](../mdquerysortcomparatorfunction.md): Callback function used to sort the results of a query.
- [MDQueryCreateResultFunction](../mdquerycreateresultfunction.md): Callback function used to create the result objects stored and returned by a query.
- [MDQueryCreateValueFunction](../mdquerycreatevaluefunction.md): Callback function usedto create the value objects stored and returned by a query.

### Batching Parameters

- [MDQueryBatchingParams](../mdquerybatchingparams.md): Structure containing the progress notification batchingparameters of a MDQuery.

### Miscellaneous

- [MDQueryRef](../mdqueryref.md): A reference to a MDQuery object.

### Query Option Flags

- [MDQueryOptionFlags](../mdqueryoptionflags.md): Specify the execution mode for a query.

### Notifications

- [kMDQueryDidFinishNotification](mdquery/kmdquerydidfinishnotification.md): Indicates that a query has finished with the initial result-gathering phase.
- [kMDQueryDidUpdateNotification](mdquery/kmdquerydidupdatenotification.md): Indicates that a query’s results list has change during the live-update phase of a query.
- [kMDQueryProgressNotification](mdquery/kmdqueryprogressnotification.md): Indicates that a query’s results list has change during the initial result-gathering phase of a query.

### Notification Info Keys

- [Query Result Change Keys](mdquery/query_result_change_keys.md): Specify the items that have changed in the query results.
- [Query Search Scope Keys](mdquery/query_search_scope_keys.md): Specify the scope of a query’s search.
- [Result Relevance Sorting Key](mdquery/result_relevance_sorting_key.md): Key used in a user notification’s description dictionary that indicates the relevance of a result.

## See Also

### Related Documentation

- [Spotlight Overview](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/MetadataIntro/MetadataIntro.html#//apple_ref/doc/uid/TP40001268)
- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)
