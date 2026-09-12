> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackidentifiererrorkey](https://developer.apple.com/documentation/backgroundassets/baassetpackidentifiererrorkey)

# BAAssetPackIdentifierErrorKey

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The `-[NSError userInfo]` key for an asset pack’s identifier.

## Declaration

```objectivec
extern NSErrorUserInfoKey const BAAssetPackIdentifierErrorKey;
```

<a id="discussion"></a>

## Discussion

This key is relevant when the error code is [BAManagedErrorCodeAssetPackNotFound](bamanagederrorcode/bamanagederrorcodeassetpacknotfound.md). Its value should be an `NSString` object.

## See Also

### Errors

- [BAManagedErrorDomain](bamanagederrordomain.md): The error domain for managed asset packs.
- [BAManagedErrorCode](bamanagederrorcode.md): An error code for a managed asset pack.
- [BAErrorDomain](baerrordomain.md)
- [BAErrorCode](baerrorcode.md)
