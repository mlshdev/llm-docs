> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibrary/serialize(to:)](https://developer.apple.com/documentation/metal/mtldynamiclibrary/serialize(to:))

# serialize(to:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Writes the contents of the dynamic library to a file.

## Declaration

```swift
func serialize(to url: URL) throws
```

## Parameters

- `url`: The URL for the destination file.

<a id="discussion"></a>

## Discussion

When the methods succeeds, the file contains a representation of the [MTLLibrary](../mtllibrary.md) from the [MTLDynamicLibrary](../mtldynamiclibrary.md) that creates it, as well as the binaries it has for the device your app is running on.

Such files may be combined with offline tools to contain the compiled code for multiple devices.

If this MTLDynamicLibrary was created from a file that contained compiled code for multiple devices, the compiled code for all other devices is not written (since only compiled code for the current device was loaded).

# serializeToURL:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Writes the contents of the dynamic library to a file.

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

When the methods succeeds, the file contains a representation of the [MTLLibrary](../mtllibrary.md) from the [MTLDynamicLibrary](../mtldynamiclibrary.md) that creates it, as well as the binaries it has for the device your app is running on.

Such files may be combined with offline tools to contain the compiled code for multiple devices.

If this MTLDynamicLibrary was created from a file that contained compiled code for multiple devices, the compiled code for all other devices is not written (since only compiled code for the current device was loaded).
