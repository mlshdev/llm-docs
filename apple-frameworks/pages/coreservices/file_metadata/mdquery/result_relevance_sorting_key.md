> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdquery/result_relevance_sorting_key](https://developer.apple.com/documentation/coreservices/file_metadata/mdquery/result_relevance_sorting_key)

# Result Relevance Sorting Key

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Key used in a user notification’s description dictionary that indicates the relevance of a result.

<a id="overview"></a>

## Overview

The relevance value indicates the relevance of the content of a result object. The relevance is computed based on the value of the result itself, not on its relevance to the other results returned by the query.

The relevance value is for the content of the object only, not on the result item as a whole, and may not be computed if the item matches the query through evaluation of other attributes

If the value is not computed it is treated as an attribute on the item that does not exist.

## Topics

### Constants

- [kMDQueryResultContentRelevance](../../kmdqueryresultcontentrelevance.md): A CFNumberRef with a floating point value between 0.0 and 1.0 inclusive.

## See Also

### Notification Info Keys

- [Query Result Change Keys](query_result_change_keys.md): Specify the items that have changed in the query results.
- [Query Search Scope Keys](query_search_scope_keys.md): Specify the scope of a query’s search.
