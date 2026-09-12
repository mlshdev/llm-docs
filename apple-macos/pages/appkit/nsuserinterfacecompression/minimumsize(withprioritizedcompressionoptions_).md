> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompression/minimumsize(withprioritizedcompressionoptions:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompression/minimumsize(withprioritizedcompressionoptions:))

# minimumSize(withPrioritizedCompressionOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the minimum size a view can achieve by applying the supplied compression options.

## Declaration

```swift
func minimumSize(withPrioritizedCompressionOptions prioritizedOptions: [NSUserInterfaceCompressionOptions]) -> NSSize
```

## Parameters

- `prioritizedOptions`: An array of compression options that the view should apply to reduce its size.

<a id="return-value"></a>

## Return Value

The minimum size of a view when applying the supplied compression options.

<a id="Discussion"></a>

## Discussion

Compression options that are handled by the system are not included in the supplied array.

## See Also

### Querying Compression Status

- [activeCompressionOptions](activecompressionoptions.md): The compression options that are currently applied to the view.

# minimumSizeWithPrioritizedCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the minimum size a view can achieve by applying the supplied compression options.

## Declaration

```objectivec
- (NSSize) minimumSizeWithPrioritizedCompressionOptions:(NSArray<NSUserInterfaceCompressionOptions *> *) prioritizedOptions;
```

## Parameters

- `prioritizedOptions`: An array of compression options that the view should apply to reduce its size.

<a id="return-value"></a>

## Return Value

The minimum size of a view when applying the supplied compression options.

<a id="Discussion"></a>

## Discussion

Compression options that are handled by the system are not included in the supplied array.

## See Also

### Querying Compression Status

- [activeCompressionOptions](activecompressionoptions.md): The compression options that are currently applied to the view.
