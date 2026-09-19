> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lightweightcoderequirements/validationcategory/value/developerid

# developerID

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Indicates that the code is signed by an Apple issued Developer ID certificate.

## Declaration

```swift
static let developerID: ValidationCategory.Value
```

<a id="discussion"></a>

## Discussion

This category will only match process on macOS. This category could match code on disk on iOS/watchOS/tvOS/visionOS but that code cannot run.
