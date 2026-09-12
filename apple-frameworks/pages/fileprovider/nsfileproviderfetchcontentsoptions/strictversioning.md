> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfetchcontentsoptions/strictversioning](https://developer.apple.com/documentation/fileprovider/nsfileproviderfetchcontentsoptions/strictversioning)

# strictVersioning (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** macOS 12.3+

An option that indicates the system requires an exact match of the requested item’s version.

## Declaration

```swift
static var strictVersioning: NSFileProviderFetchContentsOptions { get }
```

<a id="Discussion"></a>

## Discussion

If the system includes this option when calling your [fetchPartialContents(for:version:request:minimalRange:aligningTo:options:completionHandler:)](../nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md) method, you must provide the requested version of the item. If you can’t provide the requested version, pass a [NSFileProviderError.Code.versionNoLongerAvailable](../nsfileprovidererror/code/versionnolongeravailable.md) error to the completion handler instead.

# NSFileProviderFetchContentsOptionsStrictVersioning (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** macOS 12.3+

An option that indicates the system requires an exact match of the requested item’s version.

## Declaration

```objectivec
NSFileProviderFetchContentsOptionsStrictVersioning
```

<a id="Discussion"></a>

## Discussion

If the system includes this option when calling your [fetchPartialContentsForItemWithIdentifier:version:request:minimalRange:aligningTo:options:completionHandler:](../nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md) method, you must provide the requested version of the item. If you can’t provide the requested version, pass a [NSFileProviderErrorVersionNoLongerAvailable](../nsfileprovidererror/code/versionnolongeravailable.md) error to the completion handler instead.
