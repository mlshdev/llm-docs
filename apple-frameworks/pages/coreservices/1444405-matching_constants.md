> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444405-matching_constants](https://developer.apple.com/documentation/coreservices/1444405-matching_constants)

# Matching Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

Specify the matching criteria for the alias matching functions.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kARMMountVol](1444405-matching_constants/karmmountvol.md): Deprecated. Automatically try to mount the target’s volume if it is not mounted.
- [kARMNoUI](1444405-matching_constants/karmnoui.md): Deprecated. Stop if a search requires user interaction, such as a password dialog box when mounting a remote volume. If user interaction is needed and `kARMNoUI` is in effect, the search fails.
- [kARMMultVols](1444405-matching_constants/karmmultvols.md): Deprecated.
- [kARMSearch](1444405-matching_constants/karmsearch.md): Deprecated. Perform a fast search for the alias target. If `kARMSearchRelFirst` is not set, perform an absolute search first, followed by a relative search only if the value of the `fromFile` parameter is not `NULL` and the list of matches is not full.
- [kARMSearchMore](1444405-matching_constants/karmsearchmore.md): Deprecated.
- [kARMSearchRelFirst](1444405-matching_constants/karmsearchrelfirst.md): Deprecated.
- [kARMTryFileIDFirst](1444405-matching_constants/karmtryfileidfirst.md): Deprecated. Perform a search using the file ID of the target before searching using the path.
