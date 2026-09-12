> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeiofilehandle(url:)](https://developer.apple.com/documentation/metal/mtldevice/makeiofilehandle(url:))

# makeIOFileHandle(url:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an input/output file handle instance that represents a file at a URL.

## Declaration

```swift
func makeIOFileHandle(url: URL) throws -> any MTLIOFileHandle
```

## Parameters

- `url`: The URL to a resource file in the file system.

<a id="return-value"></a>

## Return Value

A new [MTLIOFileHandle](../mtliofilehandle.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).

## See Also

### Creating I/O file handles

- [makeIOFileHandle(url:compressionMethod:)](makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [makeIOHandle(url:)](makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.
- [makeIOHandle(url:compressionMethod:)](makeiohandle%28url_compressionmethod_%29.md): Deprecated. Creates an input/output file handle instance that represents a compressed file at a URL.

# newIOFileHandleWithURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an input/output file handle instance that represents a file at a URL.

## Declaration

```objectivec
- (id<MTLIOFileHandle>) newIOFileHandleWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL to a resource file in the file system.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLIOFileHandle](../mtliofilehandle.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).

## See Also

### Creating I/O file handles

- [newIOFileHandleWithURL:compressionMethod:error:](makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [newIOHandleWithURL:error:](makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.
- [newIOHandleWithURL:compressionMethod:error:](makeiohandle%28url_compressionmethod_%29.md): Deprecated. Creates an input/output file handle instance that represents a compressed file at a URL.
