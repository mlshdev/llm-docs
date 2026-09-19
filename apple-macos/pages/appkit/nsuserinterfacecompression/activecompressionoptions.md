> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsuserinterfacecompression/activecompressionoptions

# activeCompressionOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The compression options that are currently applied to the view.

## Declaration

```swift
@NSCopying var activeCompressionOptions: NSUserInterfaceCompressionOptions { get }
```

<a id="Discussion"></a>

## Discussion

This property includes only those compression options applied to the view that are actively being respected.

## See Also

### Querying Compression Status

- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size a view can achieve by applying the supplied compression options.

# activeCompressionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The compression options that are currently applied to the view.

## Declaration

```objectivec
@property (copy, readonly) NSUserInterfaceCompressionOptions * activeCompressionOptions;
```

<a id="Discussion"></a>

## Discussion

This property includes only those compression options applied to the view that are actively being respected.

## See Also

### Querying Compression Status

- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size a view can achieve by applying the supplied compression options.
