> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputmetadataadaptor/assetwriterinputmetadataadaptorwithassetwriterinput:](https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/assetwriterinputmetadataadaptorwithassetwriterinput:)

# assetWriterInputMetadataAdaptorWithAssetWriterInput:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns a new metadata adaptor to append timed metadata groups to write to an output file.

## Declaration

```objectivec
+ (instancetype) assetWriterInputMetadataAdaptorWithAssetWriterInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: The metadata input to which to append groups of timed metadata.

<a id="return-value"></a>

## Return Value

An input metadata adaptor.

## See Also

### Creating an input metadata adaptor

- [initWithAssetWriterInput:](init%28assetwriterinput_%29.md): Deprecated. Creates a metadata group adaptor to append timed metadata groups to write to an output file.
