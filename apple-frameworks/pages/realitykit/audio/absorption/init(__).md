> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/audio/absorption/init(_:)](https://developer.apple.com/documentation/realitykit/audio/absorption/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an absorption data set from a sequence of pairs of center frequency and Sabine absorption coefficient.

## Declaration

```swift
init(_ coefficientByFrequency: [Float : Float])
```

<a id="discussion"></a>

## Discussion

The Sabine absorption coefficient is a value between zero and one that describes the proportion of incident sound energy a surface absorbs.

The values will be interpolated and/or extrapolated to cover the audible frequency range.

```
let data = Audio.Absorption([500: 0.3, 1000: 0.4, 4000: 0.5])
```
