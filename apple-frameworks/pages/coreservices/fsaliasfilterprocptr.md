> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/fsaliasfilterprocptr](https://developer.apple.com/documentation/coreservices/fsaliasfilterprocptr)

# FSAliasFilterProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.5+

Defines a pointer to an alias filtering callback function that filters out possible targets identified by the [FSMatchAliasBulk](1444389-fsmatchaliasbulk.md) function.

## Declaration

```objectivec
typedef Boolean (*FSAliasFilterProcPtr)(const FSRef *ref, Boolean *quitFlag, Ptr myDataPtr);
```

## Parameters

- `ref`: A pointer to a file system object. When your function is called, the `ref` parameter points to the possible match.
- `quitFlag`: On output, set this Boolean flag to `true` if you want to terminate the search.
- `myDataPtr`: A pointer to any customized data that your application passed when it called [FSMatchAliasBulk](1444389-fsmatchaliasbulk.md). This parameter allows your filter function to access any data that your application has set up on its own.

<a id="return_value"></a>

## Return Value

Your function should return `true` to indicate that the possible match is to be discarded, or `false` to indicate that the possible match is to be added to the list of possible targets.

<a id="discussion"></a>

## Discussion

You can write your own filter function to examine possible targets identified by the `FSMatchAliasBulk` function. The `FSMatchAliasBulk` function calls your filter function each time it identifies a possible match.
