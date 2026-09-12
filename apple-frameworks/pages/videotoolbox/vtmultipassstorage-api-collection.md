> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtmultipassstorage-api-collection](https://developer.apple.com/documentation/videotoolbox/vtmultipassstorage-api-collection)

# VTMultiPassStorage (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that stores video encoding metadata from a multipass encoding session.

## Topics

### Creating Storage Objects

- [VTMultiPassStorageCreate(allocator:fileURL:timeRange:options:multiPassStorageOut:)](vtmultipassstoragecreate%28allocator_fileurl_timerange_options_multipassstorageout_%29.md): Creates a multipass storage object using a temporary file.

### Closing Storage Objects

- [VTMultiPassStorageClose(\_:)](vtmultipassstorageclose%28__%29.md): Ensures that any pending data is written to the multipass storage file and closes the file.

### Inspecting Storage Objects

- [VTMultiPassStorageGetTypeID()](vtmultipassstoragegettypeid%28%29.md): Retrieves the Core Foundation type identifier for the multipass storage object.

### Data Types

- [VTMultiPassStorage](vtmultipassstorage.md): An object for storing information for each frame of a multipass compression session.

### Constants

- [kVTMultiPassStorageCreationOption_DoNotDelete](kvtmultipassstoragecreationoption_donotdelete.md): Indicates that the multipass storage object’s backing store should not be deleted when finalized.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTDecompressionSession](vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.

# VTMultiPassStorage (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that stores video encoding metadata from a multipass encoding session.

## Topics

### Creating Storage Objects

- [VTMultiPassStorageCreate](vtmultipassstoragecreate%28allocator_fileurl_timerange_options_multipassstorageout_%29.md): Creates a multipass storage object using a temporary file.

### Closing Storage Objects

- [VTMultiPassStorageClose](vtmultipassstorageclose%28__%29.md): Ensures that any pending data is written to the multipass storage file and closes the file.

### Inspecting Storage Objects

- [VTMultiPassStorageGetTypeID](vtmultipassstoragegettypeid%28%29.md): Retrieves the Core Foundation type identifier for the multipass storage object.

### Data Types

- [VTMultiPassStorageRef](vtmultipassstorage.md): An object for storing information for each frame of a multipass compression session.

### Constants

- [kVTMultiPassStorageCreationOption_DoNotDelete](kvtmultipassstoragecreationoption_donotdelete.md): Indicates that the multipass storage object’s backing store should not be deleted when finalized.

## See Also

### Compression

- [Encoding video for low-latency conferencing](encoding-video-for-low-latency-conferencing.md): Configure a compression session to optimize encoding for video-conferencing apps.
- [Encoding video for live streaming](encoding-video-for-live-streaming.md): Configure a compression session to encode video for live streaming.
- [Encoding video for offline transcoding](encoding-video-for-offline-transcoding.md): Configure a compression session to transcode video in offline workflows.
- [VTCompressionSession](vtcompressionsession-api-collection.md): An object that compresses video data.
- [VTDecompressionSession](vtdecompressionsession-api-collection.md): An object that decompresses video data.
- [VTFrameSilo](vtframesilo-api-collection.md): An object that stores sample buffers from a multipass encoding session.
