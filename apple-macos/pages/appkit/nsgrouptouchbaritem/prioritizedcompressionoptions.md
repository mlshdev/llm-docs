> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsgrouptouchbaritem/prioritizedcompressionoptions

# prioritizedCompressionOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The allowed compression options, in the order they should be applied.

## Declaration

```swift
var prioritizedCompressionOptions: [NSUserInterfaceCompressionOptions] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property when you want to control the order of the system compression options, or if you want to use custom compression options.

The default value is an array containing all standard AppKit options, in the AppKit-defined order.

## See Also

### Configuring item compression

- [effectiveCompressionOptions](effectivecompressionoptions.md): The compression options that are currently active on the group.

# prioritizedCompressionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The allowed compression options, in the order they should be applied.

## Declaration

```objectivec
@property (copy) NSArray<NSUserInterfaceCompressionOptions *> * prioritizedCompressionOptions;
```

<a id="Discussion"></a>

## Discussion

Use this property when you want to control the order of the system compression options, or if you want to use custom compression options.

The default value is an array containing all standard AppKit options, in the AppKit-defined order.

## See Also

### Configuring item compression

- [effectiveCompressionOptions](effectivecompressionoptions.md): The compression options that are currently active on the group.
