> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/immersivecameralensdefinition/init(from:)

# init(from:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates an `ImmersiveCameraLensDefinition` object from a ILPD data blob, basically the JSON contents of a ILPD file..

## Declaration

```swift
init(from data: Data) throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws an appropriate error when the data is not well formatted of there are unexpected errors in the JSON.
