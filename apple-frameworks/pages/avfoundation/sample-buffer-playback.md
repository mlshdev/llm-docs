> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/sample-buffer-playback](https://developer.apple.com/documentation/avfoundation/sample-buffer-playback)

# Sample buffer playback (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Create custom controllers to play and synchronize the timing of sample buffer streams.

## Topics

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferRequest](avsamplebufferrequest.md): An object that describes a sample buffer creation request.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

## See Also

### Playback

- [Media playback](media-playback.md): Manage the playback of media assets and interstitial content, independent of how you present that content in your interface.
- [Offline playback and storage](offline-playback-and-storage.md): Download streamed content to disk to allow offline playback, and define policies to automatically remove downloaded assets.
- [Streaming and AirPlay](streaming-and-airplay.md): Stream content wirelessly to other devices using AirPlay, and handle requests involving FairPlay-protected assets.

# Sample buffer playback (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Create custom controllers to play and synchronize the timing of sample buffer streams.

## Topics

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferRequest](avsamplebufferrequest.md): An object that describes a sample buffer creation request.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.

### Presentation

- [AVQueuedSampleBufferRendering](avqueuedsamplebufferrendering.md): Deprecated. Methods you can implement to enqueue sample buffers for presentation.
- [AVSampleBufferRenderSynchronizer](avsamplebufferrendersynchronizer.md): An object used to synchronize multiple queued sample buffers to a single timeline.
- [AVSampleBufferDisplayLayer](avsamplebufferdisplaylayer.md): An object that displays compressed or uncompressed video frames.
- [AVSampleBufferVideoRenderer](avsamplebuffervideorenderer.md): An object that enqueues video sample buffers for rendering.
- [AVSampleBufferAudioRenderer](avsamplebufferaudiorenderer.md): An object used to decompress audio and play compressed or uncompressed audio.

### Notifications

- [AVSampleBufferAudioRendererOutputConfigurationDidChangeNotification](avsamplebufferaudiorendereroutputconfigurationdidchangenotification.md): A notification that indicates the hardware configuration does not match the enqueued data format.
- [AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification](avsamplebufferaudiorendererwasflushedautomaticallynotification.md): A notification that fires whenever the receiver’s enqueued media data has been flushed for a reason other than a call to the -flush method.
- [AVSampleBufferDisplayLayerOutputObscuredDueToInsufficientExternalProtectionDidChangeNotification](avsamplebufferdisplaylayeroutputobscuredduetoinsufficientexternalprotectiondidchangenotification.md)
- [AVSampleBufferDisplayLayerReadyForDisplayDidChangeNotification](avsamplebufferdisplaylayerreadyfordisplaydidchangenotification.md)
- [AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification](avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification.md): A notification the system posts when a sample buffer display layer changes its decoding requirements.

## See Also

### Playback

- [Media playback](media-playback.md): Manage the playback of media assets and interstitial content, independent of how you present that content in your interface.
- [Offline playback and storage](offline-playback-and-storage.md): Download streamed content to disk to allow offline playback, and define policies to automatically remove downloaded assets.
- [Streaming and AirPlay](streaming-and-airplay.md): Stream content wirelessly to other devices using AirPlay, and handle requests involving FairPlay-protected assets.
