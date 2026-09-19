> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/detectlenssmudgerequest/init(_:)

# init(\_:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a request to detect whether the camera lens has a smudge.

## Declaration

```swift
init(_ revision: DetectLensSmudgeRequest.Revision? = nil)
```

## Parameters

- `revision`: The specific algorithm or implementation revision that performs the request.
