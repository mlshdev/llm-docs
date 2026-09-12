> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444405-matching_constants/karmsearch](https://developer.apple.com/documentation/coreservices/1444405-matching_constants/karmsearch)

# kARMSearch

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

Perform a fast search for the alias target. If `kARMSearchRelFirst` is not set, perform an absolute search first, followed by a relative search only if the value of the `fromFile` parameter is not `NULL` and the list of matches is not full.

## Declaration

```objectivec
kARMSearch = 0x00000100
```
