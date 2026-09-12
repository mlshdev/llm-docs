> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider/shouldfetchsubresources](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider/shouldfetchsubresources)

# shouldFetchSubresources (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value indicating whether to download subresources specified by the metadata.

## Declaration

```swift
var shouldFetchSubresources: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Subresources include the icon, image, or video. When set to `false`, the returned [LPLinkMetadata](../lplinkmetadata.md) object consists only of metadata retrieved from the main resource identified by the url passed to [startFetchingMetadata(for:completionHandler:)](startfetchingmetadata%28for_completionhandler_%29-54z5i.md).

The default value is `true`.

## See Also

### Fetching metadata

- [startFetchingMetadata(for:completionHandler:)](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel()](cancel%28%29.md): Cancels a metadata request.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.

# shouldFetchSubresources (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value indicating whether to download subresources specified by the metadata.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldFetchSubresources;
```

<a id="discussion"></a>

## Discussion

Subresources include the icon, image, or video. When set to `false`, the returned [LPLinkMetadata](../lplinkmetadata.md) object consists only of metadata retrieved from the main resource identified by the url passed to [startFetchingMetadataForURL:completionHandler:](startfetchingmetadata%28for_completionhandler_%29-54z5i.md).

The default value is `true`.

## See Also

### Fetching metadata

- [startFetchingMetadataForURL:completionHandler:](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel](cancel%28%29.md): Cancels a metadata request.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.
