> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lpmetadataprovider/timeout](https://developer.apple.com/documentation/linkpresentation/lpmetadataprovider/timeout)

# timeout (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

The time interval after which the request automatically fails if it hasn’t already completed.

## Declaration

```swift
var timeout: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The default timeout interval is 30 seconds. If a metadata fetch takes longer than the timeout interval, the completion handler is called with the error code [LPError.Code.metadataFetchTimedOut](../lperror/code/metadatafetchtimedout.md).

## See Also

### Fetching metadata

- [startFetchingMetadata(for:completionHandler:)](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel()](cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.

# timeout (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 9.0+

The time interval after which the request automatically fails if it hasn’t already completed.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval timeout;
```

<a id="discussion"></a>

## Discussion

The default timeout interval is 30 seconds. If a metadata fetch takes longer than the timeout interval, the completion handler is called with the error code [LPErrorMetadataFetchTimedOut](../lperror/code/metadatafetchtimedout.md).

## See Also

### Fetching metadata

- [startFetchingMetadataForURL:completionHandler:](startfetchingmetadata%28for_completionhandler_%29-54z5i.md): Fetches metadata for the given URL.
- [cancel](cancel%28%29.md): Cancels a metadata request.
- [shouldFetchSubresources](shouldfetchsubresources.md): A Boolean value indicating whether to download subresources specified by the metadata.
