> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider/cancel()](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider/cancel())

# cancel() (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Cancels a metadata request.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

This method invokes the completion handler with the error code [LPError.Code.metadataFetchCancelled](../lperror/code/metadatafetchcancelled.md) if the request hasn’t already completed.

## See Also

### Fetching metadata

- [startFetchingMetadata(for:completionHandler:)](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.

# cancel (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

Cancels a metadata request.

## Declaration

```objectivec
- (void) cancel;
```

<a id="discussion"></a>

## Discussion

This method invokes the completion handler with the error code [LPErrorMetadataFetchCancelled](../lperror/code/metadatafetchcancelled.md) if the request hasn’t already completed.

## See Also

### Fetching metadata

- [startFetchingMetadataForURL:completionHandler:](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
- [timeout](timeout.md): The time interval after which the request automatically fails if it hasn’t already completed.
