> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider/startfetchingmetadata(for:completionhandler:)-54z5i](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider/startfetchingmetadata(for:completionhandler:)-54z5i)

# startFetchingMetadata(for:completionHandler:) (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Fetches metadata for the given URL.

## Declaration

```swift
func startFetchingMetadata(for URL: URL, completionHandler: @escaping @Sendable (LPLinkMetadata?, (any Error)?) -> Void)
```

```swift
func startFetchingMetadata(for URL: URL) async throws -> LPLinkMetadata
```

<a id="discussion"></a>

## Discussion

Call this method once per [LPMetadataProvider](../lpmetadataprovider.md) instance. If you attempt to fetch metadata multiple times on a single [LPMetadataProvider](../lpmetadataprovider.md) instance, it throws an error.

The completion handler executes on a background queue. Dispatch any necessary UI updates back to the main queue. When the completion handler returns, it deletes any file URLs returned in the resulting [LPLinkMetadata](../lplinkmetadata.md).

## See Also

### Fetching metadata

- [cancel()](cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.

# startFetchingMetadataForURL:completionHandler: (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Fetches metadata for the given URL.

## Declaration

```objectivec
- (void) startFetchingMetadataForURL:(NSURL *) URL completionHandler:(void (^)(LPLinkMetadata *metadata, NSError *error)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Call this method once per [LPMetadataProvider](../lpmetadataprovider.md) instance. If you attempt to fetch metadata multiple times on a single [LPMetadataProvider](../lpmetadataprovider.md) instance, it throws an error.

The completion handler executes on a background queue. Dispatch any necessary UI updates back to the main queue. When the completion handler returns, it deletes any file URLs returned in the resulting [LPLinkMetadata](../lplinkmetadata.md).

## See Also

### Fetching metadata

- [cancel](cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.
