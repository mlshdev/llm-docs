> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider/startfetchingmetadata(for:completionhandler:)-9e6s8](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider/startfetchingmetadata(for:completionhandler:)-9e6s8)

# startFetchingMetadata(for:completionHandler:) (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Fetches metadata for the given `NSURLRequest`.

## Declaration

```swift
func startFetchingMetadata(for request: URLRequest, completionHandler: @escaping @Sendable (LPLinkMetadata?, (any Error)?) -> Void)
```

```swift
func startFetchingMetadata(for request: URLRequest) async throws -> LPLinkMetadata
```

<a id="discussion"></a>

## Discussion

Call this method once per [LPMetadataProvider](../lpmetadataprovider.md) instance. If you attempt to fetch metadata multiple times on a single [LPMetadataProvider](../lpmetadataprovider.md) instance, it throws an error.

The completion handler executes on a background queue. Dispatch any necessary UI updates back to the main queue. When the completion handler returns, it deletes any file URLs returned in the resulting [LPLinkMetadata](../lplinkmetadata.md).

# startFetchingMetadataForRequest:completionHandler: (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Fetches metadata for the given `NSURLRequest`.

## Declaration

```objectivec
- (void) startFetchingMetadataForRequest:(NSURLRequest *) request completionHandler:(void (^)(LPLinkMetadata *metadata, NSError *error)) completionHandler;
```

<a id="discussion"></a>

## Discussion

Call this method once per [LPMetadataProvider](../lpmetadataprovider.md) instance. If you attempt to fetch metadata multiple times on a single [LPMetadataProvider](../lpmetadataprovider.md) instance, it throws an error.

The completion handler executes on a background queue. Dispatch any necessary UI updates back to the main queue. When the completion handler returns, it deletes any file URLs returned in the resulting [LPLinkMetadata](../lplinkmetadata.md).
