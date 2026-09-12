> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchtype](https://developer.apple.com/documentation/coreservices/sksearchtype)

# SKSearchType (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Search Kit ignores the constants in this group. Use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.

## Declaration

```swift
struct SKSearchType
```

<a id="overview"></a>

## Overview

In releases of macOS prior to version 10.4, these constants specify the category of search to perform. Starting with OS X v10.4, use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.

In older versions of macOS, these constants specify the various search types you can use with `SKSearchResultsCreateWithQuery`. Each of these specifies a set of ranked search hits. The `kSKSearchRanked` and `kSKSearchPrefixRanked` constants can be used for all index types. The `kSKSearchBooleanRanked` and `kSKSearchRequiredRanked` constants cannot be used for vector indexes.

## Topics

### Constants

- [kSKSearchRanked](ksksearchranked.md): Deprecated. Specifies a basic ranked search.
- [kSKSearchBooleanRanked](ksksearchbooleanranked.md): Deprecated. Specifies a query that can include Boolean operators including `'|'`, `'&'`, `'!'`, `'('`, and `')'`.
- [kSKSearchRequiredRanked](ksksearchrequiredranked.md): Deprecated. Specifies a query that can include required (`'+'`) or excluded (`'-'`) terms.
- [kSKSearchPrefixRanked](ksksearchprefixranked.md): Deprecated. Specifies a prefix-based search, which matches terms that begin with the query string.

### Initializers

- [init(\_:)](sksearchtype/1449367-init.md)
- [init(rawValue:)](sksearchtype/1448964-init.md)

### Instance Properties

- [rawValue](sksearchtype/1445786-rawvalue.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# SKSearchType (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Search Kit ignores the constants in this group. Use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.

## Declaration

```objectivec
typedef enum SKSearchType : unsigned int {
    ...
} SKSearchType;
```

<a id="overview"></a>

## Overview

In releases of macOS prior to version 10.4, these constants specify the category of search to perform. Starting with OS X v10.4, use asynchronous searching with `SKSearchCreate` instead, which uses query syntax to determine search type.

In older versions of macOS, these constants specify the various search types you can use with `SKSearchResultsCreateWithQuery`. Each of these specifies a set of ranked search hits. The `kSKSearchRanked` and `kSKSearchPrefixRanked` constants can be used for all index types. The `kSKSearchBooleanRanked` and `kSKSearchRequiredRanked` constants cannot be used for vector indexes.

## Topics

### Constants

- [kSKSearchRanked](sksearchtype/ksksearchranked.md): Deprecated. Specifies a basic ranked search.
- [kSKSearchBooleanRanked](sksearchtype/ksksearchbooleanranked.md): Deprecated. Specifies a query that can include Boolean operators including `'|'`, `'&'`, `'!'`, `'('`, and `')'`.
- [kSKSearchRequiredRanked](sksearchtype/ksksearchrequiredranked.md): Deprecated. Specifies a query that can include required (`'+'`) or excluded (`'-'`) terms.
- [kSKSearchPrefixRanked](sksearchtype/ksksearchprefixranked.md): Deprecated. Specifies a prefix-based search, which matches terms that begin with the query string.
