> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/tracktranslationalimageregistrationrequest/init(_:frameanalysisspacing:)

# init(\_:frameAnalysisSpacing:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates an image-alignment tracking request to determine the affine transform.

## Declaration

```swift
init(_ revision: TrackTranslationalImageRegistrationRequest.Revision? = nil, frameAnalysisSpacing: CMTime? = nil)
```
