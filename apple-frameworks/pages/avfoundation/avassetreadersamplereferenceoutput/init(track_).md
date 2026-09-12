> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadersamplereferenceoutput/init(track:)](https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput/init(track:))

# init(track:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that supplies sample references.

## Declaration

```swift
init(track: AVAssetTrack)
```

## Parameters

- `track`: The track for which to provide sample references.

# initWithTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that supplies sample references.

## Declaration

```objectivec
- (instancetype) initWithTrack:(AVAssetTrack *) track;
```

## Parameters

- `track`: The track for which to provide sample references.

## See Also

### Creating a sample reference output

- [assetReaderSampleReferenceOutputWithTrack:](assetreadersamplereferenceoutputwithtrack_.md): Returns a new object that supplies sample references.
