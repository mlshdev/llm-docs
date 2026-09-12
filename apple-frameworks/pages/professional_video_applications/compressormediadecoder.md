> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder)

# CompressorMediaDecoder (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Encoder Extensions 1.0+

An interface with methods you use to retrieve decoded video, audio, and image data from a source media file.

## Declaration

```swift
protocol CompressorMediaDecoder
```

<a id="overview"></a>

## Overview

The Compressor app configures a decoder object to produce decoded video frames and audio samples based on the encoder attributes and source media properties.

During the encoding process, the Compressor app provides this decoder object to the extension. Call the methods in the decoder object to get:

- Source video frames at the width, height, and frame rate specified in the decoding attributes.
- Audio samples at the sample rate and channel layout specified in the encoder settings.
- Uncompressed images from the decoder object with an image format that the extension, the source media, and the Compressor app filters support.
- Closed-caption data and details of the source media timecode.

## Topics

### Getting Decoded Frames and Samples

- [copyAudio(atStart:count:)](compressormediadecoder/copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData(\_:frameCount:)](compressormediadecoder/copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame(\_:)](compressormediadecoder/copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame(\_:)](compressormediadecoder/releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](compressormediadecoderptr.md): The type alias for referencing the decoder object.

### Getting Decoding Attributes

- [decodingAttributes()](compressormediadecoder/decodingattributes%28%29.md): Returns a set of video attributes of the decoded source media file.
- [startTimeCodeForMedia()](compressormediadecoder/starttimecodeformedia%28%29.md): Returns the source media timecode details.

# CompressorMediaDecoder (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An interface with methods you use to retrieve decoded video, audio, and image data from a source media file.

## Declaration

```objectivec
@protocol CompressorMediaDecoder
```

<a id="overview"></a>

## Overview

The Compressor app configures a decoder object to produce decoded video frames and audio samples based on the encoder attributes and source media properties.

During the encoding process, the Compressor app provides this decoder object to the extension. Call the methods in the decoder object to get:

- Source video frames at the width, height, and frame rate specified in the decoding attributes.
- Audio samples at the sample rate and channel layout specified in the encoder settings.
- Uncompressed images from the decoder object with an image format that the extension, the source media, and the Compressor app filters support.
- Closed-caption data and details of the source media timecode.

## Topics

### Getting Decoded Frames and Samples

- [copyAudioAtStart:count:](compressormediadecoder/copyaudio%28atstart_count_%29.md): Returns decoded audio samples starting from the specified temporal position.
- [copyCloseCaptionData:frameCount:](compressormediadecoder/copyclosecaptiondata%28__framecount_%29.md): Returns a list of closed-caption tracks associated with the specified video frames.
- [copyFrame:](compressormediadecoder/copyframe%28__%29.md): Returns the decoded video frame indicated by the frame number.
- [releaseFrame:](compressormediadecoder/releaseframe%28__%29.md): Release a decoded frame when the encoder extension no longer needs the frame.
- [CompressorMediaDecoderPtr](compressormediadecoderptr.md): The type alias for referencing the decoder object.

### Getting Decoding Attributes

- [decodingAttributes](compressormediadecoder/decodingattributes%28%29.md): Returns a set of video attributes of the decoded source media file.
- [startTimeCodeForMedia](compressormediadecoder/starttimecodeformedia%28%29.md): Returns the source media timecode details.
