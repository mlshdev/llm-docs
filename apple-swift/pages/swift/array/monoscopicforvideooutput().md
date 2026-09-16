> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/monoscopicforvideooutput()

# monoscopicForVideoOutput()

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

Creates a collection of CMTags with the required tags to describe monoscopic video, where there is no stereo view, e.g. kCMTagStereoNone.

## Declaration

```swift
static func monoscopicForVideoOutput() -> [CMTag]
```
