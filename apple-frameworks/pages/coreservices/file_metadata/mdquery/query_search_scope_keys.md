> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/file_metadata/mdquery/query_search_scope_keys](https://developer.apple.com/documentation/coreservices/file_metadata/mdquery/query_search_scope_keys)

# Query Search Scope Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Services  
**Kind:** API Collection

Specify the scope of a query’s search.

<a id="overview"></a>

## Overview

These constants can be passed in the `scopeDirectories` array to the function `MDQuerySetSearchScope`.

## Topics

### Constants

- [kMDQueryScopeHome](../../kmdqueryscopehome.md): Specifies that the query should be restricted to the volume and directory that contains the current user’s home directory.
- [kMDQueryScopeComputer](../../kmdqueryscopecomputer.md): Specifies that the query should be restricted to all locally mounted volumes, plus the user’s home directory (which may be on a remote volume).
- [kMDQueryScopeNetwork](../../kmdqueryscopenetwork.md): Specifies that the query should include all user mounted remote volumes.
- [kMDQueryScopeAllIndexed](../../kmdqueryscopeallindexed.md): Specifies that the search should be restricted to indexed, locally mounted volumes and indexed user mounted remote volumes, plus the user's home directory.
- [kMDQueryScopeComputerIndexed](../../kmdqueryscopecomputerindexed.md): Specifies that the search should be restricted to indexed, locally mounted volumes, plus the user's home directory (which may be on a remote volume).
- [kMDQueryScopeNetworkIndexed](../../kmdqueryscopenetworkindexed.md): Specifies that the search should include indexed user mounted remote volumes.

## See Also

### Notification Info Keys

- [Query Result Change Keys](query_result_change_keys.md): Specify the items that have changed in the query results.
- [Result Relevance Sorting Key](result_relevance_sorting_key.md): Key used in a user notification’s description dictionary that indicates the relevance of a result.
