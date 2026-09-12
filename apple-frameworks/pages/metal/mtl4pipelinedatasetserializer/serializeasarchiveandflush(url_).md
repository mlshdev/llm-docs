> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedatasetserializer/serializeasarchiveandflush(url:)](https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializer/serializeasarchiveandflush(url:))

# serializeAsArchiveAndFlush(url:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Serializes a pipeline data set to an archive.

## Declaration

```swift
func serializeAsArchiveAndFlush(url: URL) throws
```

## Parameters

- `url`: The URL used to serialize the serializer data set as an archive to.

# serializeAsArchiveAndFlushToURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Serializes a pipeline data set to an archive.

## Declaration

```objectivec
- (BOOL) serializeAsArchiveAndFlushToURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL used to serialize the serializer data set as an archive to.
- `error`: An optional parameter to store information in case of an error.

<a id="return-value"></a>

## Return Value

A boolean indicating whether the operation was successful.
