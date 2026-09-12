> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/subtracting(_:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/subtracting(_:))

# subtracting(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a new compression options object with the supplied options removed.

## Declaration

```swift
func subtracting(_ options: NSUserInterfaceCompressionOptions) -> NSUserInterfaceCompressionOptions
```

## Parameters

- `options`: A set of compression options to remove from the current object.

<a id="return-value"></a>

## Return Value

A new `NSCompressibleUserInterfaceOptions` object with the supplied options removed.

## See Also

### Combining compression options

- [union(\_:)](union%28__%29.md): Creates a new compression options object representing the union with the provided options.

# optionsByRemovingOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a new compression options object with the supplied options removed.

## Declaration

```objectivec
- (NSUserInterfaceCompressionOptions *) optionsByRemovingOptions:(NSUserInterfaceCompressionOptions *) options;
```

## Parameters

- `options`: A set of compression options to remove from the current object.

<a id="return-value"></a>

## Return Value

A new `NSCompressibleUserInterfaceOptions` object with the supplied options removed.

## See Also

### Combining compression options

- [optionsByAddingOptions:](union%28__%29.md): Creates a new compression options object representing the union with the provided options.
