> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/audioconvertingtransformer/applied(to:eventhandler:)

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Performs conversion of the input audio buffer.

## Declaration

```swift
func applied(to input: AVAudioPCMBuffer, eventHandler: EventHandler? = nil) throws -> AVAudioPCMBuffer
```

## Parameters

- `input`: The audio buffer that will be converted.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An output audio buffer by converting the input buffer to the `targetFormat`.
