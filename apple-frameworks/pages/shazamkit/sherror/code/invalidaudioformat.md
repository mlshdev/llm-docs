> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/sherror/code/invalidaudioformat](https://developer.apple.com/documentation/shazamkit/sherror/code/invalidaudioformat)

# SHError.Code.invalidAudioFormat (Swift)

**Framework:** ShazamKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate an unsupported audio format.

## Declaration

```swift
case invalidAudioFormat
```

<a id="Discussion"></a>

## Discussion

For the list of the supported audio formats, see [append(\_:at:)](../../shsignaturegenerator/append%28__at_%29.md).

## See Also

### Audio format errors

- [SHError.Code.audioDiscontinuity](audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.

# SHErrorCodeInvalidAudioFormat (Objective-C)

**Framework:** ShazamKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate an unsupported audio format.

## Declaration

```objectivec
SHErrorCodeInvalidAudioFormat
```

<a id="Discussion"></a>

## Discussion

For the list of the supported audio formats, see [appendBuffer:atTime:error:](../../shsignaturegenerator/append%28__at_%29.md).

## See Also

### Audio format errors

- [SHErrorCodeAudioDiscontinuity](audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.
