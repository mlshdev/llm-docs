> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive/serialize(to:)](https://developer.apple.com/documentation/metal/mtlbinaryarchive/serialize(to:))

# serialize(to:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Writes the contents of the archive to a file.

## Declaration

```swift
func serialize(to url: URL) throws
```

## Parameters

- `url`: The URL for the destination file.

<a id="discussion"></a>

## Discussion

The destination folder needs to exist when you call this method.

# serializeToURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Writes the contents of the archive to a file.

## Declaration

```objectivec
- (BOOL) serializeToURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL for the destination file.
- `error`: On failure, a reference to the error that occurred.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

The destination folder needs to exist when you call this method.
