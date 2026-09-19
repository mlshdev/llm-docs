> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbutton/minimumsize(withprioritizedcompressionoptions:)

# minimumSize(withPrioritizedCompressionOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the minimum size of the button by using the compression options.

## Declaration

```swift
func minimumSize(withPrioritizedCompressionOptions prioritizedOptions: [NSUserInterfaceCompressionOptions]) -> NSSize
```

## Parameters

- `prioritizedOptions`: An array of interface compression options.

<a id="return-value"></a>

## Return Value

The size of the compressed button.

## See Also

### Managing button compression

- [activeCompressionOptions](activecompressionoptions.md): The compression options active for this button.
- [compress(withPrioritizedCompressionOptions:)](compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.

# minimumSizeWithPrioritizedCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns the minimum size of the button by using the compression options.

## Declaration

```objectivec
- (NSSize) minimumSizeWithPrioritizedCompressionOptions:(NSArray<NSUserInterfaceCompressionOptions *> *) prioritizedOptions;
```

## Parameters

- `prioritizedOptions`: An array of interface compression options.

<a id="return-value"></a>

## Return Value

The size of the compressed button.

## See Also

### Managing button compression

- [activeCompressionOptions](activecompressionoptions.md): The compression options active for this button.
- [compressWithPrioritizedCompressionOptions:](compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.
