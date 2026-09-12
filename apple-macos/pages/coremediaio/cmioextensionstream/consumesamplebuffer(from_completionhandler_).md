> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/consumesamplebuffer(from:completionhandler:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/consumesamplebuffer(from:completionhandler:))

# consumeSampleBuffer(from:completionHandler:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Consumes a sample buffer from a client.

## Declaration

```swift
func consumeSampleBuffer(from client: CMIOExtensionClient, completionHandler: @escaping @Sendable (CMSampleBuffer?, UInt64, CMIOExtensionStream.DiscontinuityFlags, Bool, (any Error)?) -> Void)
```

```swift
func consumeSampleBuffer(from client: CMIOExtensionClient) async throws -> (CMSampleBuffer, UInt64, CMIOExtensionStream.DiscontinuityFlags, Bool)
```

## Parameters

- `client`: The client with a sample to process.
- `completionHandler`: A callback the system invokes with the following data:

  - **`sampleBuffer`**: A sample buffer that contains the media sample to consume, or `nil` if an error occurs.
  - **`sampleBufferSequenceNumber`**: The sequence number of the current sample.
  - **`discontinuity`**: A flag that indicates if there’s a discontinuity in the stream.
  - **`hasMoreSampleBuffers`**: A Boolean value that indicates whether there are more buffers available.
  - **`error`**: An optional error. If an error occurs, it contains the details of the failure.

## See Also

### Processing Data

- [send(\_:discontinuity:hostTimeInNanoseconds:)](send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.
- [CMIOExtensionStream.DiscontinuityFlags](discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.

# consumeSampleBufferFromClient:completionHandler: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Consumes a sample buffer from a client.

## Declaration

```objectivec
- (void) consumeSampleBufferFromClient:(CMIOExtensionClient *) client completionHandler:(void (^)(CMSampleBufferRef sampleBuffer, uint64_t sampleBufferSequenceNumber, CMIOExtensionStreamDiscontinuityFlags discontinuity, BOOL hasMoreSampleBuffers, NSError *error)) completionHandler;
```

## Parameters

- `client`: The client with a sample to process.
- `completionHandler`: A callback the system invokes with the following data:

  - **`sampleBuffer`**: A sample buffer that contains the media sample to consume, or `nil` if an error occurs.
  - **`sampleBufferSequenceNumber`**: The sequence number of the current sample.
  - **`discontinuity`**: A flag that indicates if there’s a discontinuity in the stream.
  - **`hasMoreSampleBuffers`**: A Boolean value that indicates whether there are more buffers available.
  - **`error`**: An optional error. If an error occurs, it contains the details of the failure.

## See Also

### Processing Data

- [sendSampleBuffer:discontinuity:hostTimeInNanoseconds:](send%28__discontinuity_hosttimeinnanoseconds_%29.md): Sends a media sample to stream client.
- [CMIOExtensionStreamDiscontinuityFlags](discontinuityflags.md): Constants that specify the types of discontinuities that can occur in a media stream.
