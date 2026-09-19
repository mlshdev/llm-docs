> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetricmediarendition/stableid

# stableID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var stableID: String? { get }
```

<a id="discussion"></a>

## Discussion

Provides ID corresponding to the rendition. This is equivalent to the STABLE-RENDITION-ID in the HLS playlist. If not available, value is nil.

## See Also

### Inspecting the rendition

- [url](url.md)

# stableID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@property (readonly, nullable) NSString * stableID;
```

<a id="discussion"></a>

## Discussion

Provides ID corresponding to the rendition. This is equivalent to the STABLE-RENDITION-ID in the HLS playlist. If not available, value is nil.

## See Also

### Inspecting the rendition

- [URL](url.md)
