> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/audioconvertingtransformer/init(targetformat:)

# init(targetFormat:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an audio conversion transformer to convert the format of the buffers.

## Declaration

```swift
init(targetFormat: AVAudioFormat)
```

## Parameters

- `targetFormat`: The desired audio format for the output buffers.

<a id="discussion"></a>

## Discussion

- Precondition The `targetFormat` must have an AVAudioPCMFormat as its common format type.
