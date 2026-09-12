> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadersamplereferenceoutput/assetreadersamplereferenceoutputwithtrack:](https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput/assetreadersamplereferenceoutputwithtrack:)

# assetReaderSampleReferenceOutputWithTrack:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that supplies sample references.

## Declaration

```objectivec
+ (instancetype) assetReaderSampleReferenceOutputWithTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The track for which to provide sample references.

<a id="return-value"></a>

## Return Value

A sample rererence output object.

## See Also

### Creating a sample reference output

- [initWithTrack:](init%28track_%29.md): Creates an object that supplies sample references.
