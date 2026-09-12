> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/match(_:)](https://developer.apple.com/documentation/shazamkit/shsession/match(_:))

# match(\_:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Searches for the query signature in the reference signatures that the session catalog contains.

## Declaration

```swift
func match(_ signature: SHSignature)
```

## Parameters

- `signature`: The signature for searching the catalog of reference signatures.

## See Also

### Making a match

- [matchStreamingBuffer(\_:at:)](matchstreamingbuffer%28__at_%29.md): Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.
- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.

# matchSignature: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Searches for the query signature in the reference signatures that the session catalog contains.

## Declaration

```objectivec
- (void) matchSignature:(SHSignature *) signature;
```

## Parameters

- `signature`: The signature for searching the catalog of reference signatures.

## See Also

### Making a match

- [matchStreamingBuffer:atTime:](matchstreamingbuffer%28__at_%29.md): Converts the audio in the buffer to a signature, and searches the reference signatures in the session catalog.
- [Matching audio using the built-in microphone](../matching-audio-using-the-built-in-microphone.md): Use the audio stream from the microphone as the source for a ShazamKit session.
