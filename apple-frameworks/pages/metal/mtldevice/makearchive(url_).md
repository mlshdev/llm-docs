> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makearchive(url:)](https://developer.apple.com/documentation/metal/mtldevice/makearchive(url:))

# makeArchive(url:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new archive from data available at an `NSURL` address.

## Declaration

```swift
func makeArchive(url: URL) throws -> any MTL4Archive
```

## Parameters

- `url`: An `NSURL` instance that represents the path from which the device loads the [MTL4Archive](../mtl4archive.md).

<a id="return-value"></a>

## Return Value

A [MTL4Archive](../mtl4archive.md) instance, or `nil` if the function failed.

# newArchiveWithURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new archive from data available at an `NSURL` address.

## Declaration

```objectivec
- (id<MTL4Archive>) newArchiveWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: An `NSURL` instance that represents the path from which the device loads the [MTL4Archive](../mtl4archive.md).
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4Archive](../mtl4archive.md) instance, or `nil` if the function failed.
