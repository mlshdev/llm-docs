> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeiohandle(url:compressionmethod:)](https://developer.apple.com/documentation/metal/mtldevice/makeiohandle(url:compressionmethod:))

# makeIOHandle(url:compressionMethod:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an input/output file handle instance that represents a compressed file at a URL.

> Use [makeIOFileHandle(url:compressionMethod:)](makeiofilehandle%28url_compressionmethod_%29.md) instead.

## Declaration

```swift
func makeIOHandle(url: URL, compressionMethod: MTLIOCompressionMethod) throws -> any MTLIOFileHandle
```

## Parameters

- `url`: A location URL to a compressed file in the file system.
- `compressionMethod`: The file’s compression format.

<a id="return-value"></a>

## Return Value

A new [MTLIOFileHandle](../mtliofilehandle.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).

## See Also

### Creating I/O file handles

- [makeIOFileHandle(url:)](makeiofilehandle%28url_%29.md): Creates an input/output file handle instance that represents a file at a URL.
- [makeIOFileHandle(url:compressionMethod:)](makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [makeIOHandle(url:)](makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.

# newIOHandleWithURL:compressionMethod:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 17.0) · iPadOS 16.0+ (deprecated in 17.0) · Mac Catalyst 16.0+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an input/output file handle instance that represents a compressed file at a URL.

> Use [newIOFileHandleWithURL:compressionMethod:error:](makeiofilehandle%28url_compressionmethod_%29.md) instead.

## Declaration

```objectivec
- (id<MTLIOFileHandle>) newIOHandleWithURL:(NSURL *) url compressionMethod:(MTLIOCompressionMethod) compressionMethod error:(NSError **) error;
```

## Parameters

- `url`: A location URL to a compressed file in the file system.
- `compressionMethod`: The file’s compression format.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLIOFileHandle](../mtliofilehandle.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).

## See Also

### Creating I/O file handles

- [newIOFileHandleWithURL:error:](makeiofilehandle%28url_%29.md): Creates an input/output file handle instance that represents a file at a URL.
- [newIOFileHandleWithURL:compressionMethod:error:](makeiofilehandle%28url_compressionmethod_%29.md): Creates an input/output file handle instance that represents a compressed file at a URL.
- [newIOHandleWithURL:error:](makeiohandle%28url_%29.md): Deprecated. Creates an input/output file handle instance that represents a file at a URL.
