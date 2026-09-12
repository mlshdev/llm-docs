> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchgroupref](https://developer.apple.com/documentation/coreservices/sksearchgroupref)

# SKSearchGroupRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```objectivec
typedef struct __SKSearchGroup *SKSearchGroupRef;
```

<a id="discussion"></a>

## Discussion

Defines an opaque data type representing a search group.

A search group is a group of one or more indexes to be searched. To create a search group, use [SKSearchGroupCreate](1448627-sksearchgroupcreate.md). For other operations with search groups, see [Fast Asynchronous Searching](search_kit.md#1655469).
