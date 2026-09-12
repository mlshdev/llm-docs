> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/union(_:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/union(_:))

# union(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a new compression options object representing the union with the provided options.

## Declaration

```swift
func union(_ options: NSUserInterfaceCompressionOptions) -> NSUserInterfaceCompressionOptions
```

## Parameters

- `options`: A set of compression options to add to the current object.

<a id="return-value"></a>

## Return Value

A new `NSCompressibleUserInterfaceOptions` object which represents the union with the supplied compression options.

## See Also

### Combining compression options

- [subtracting(\_:)](subtracting%28__%29.md): Creates a new compression options object with the supplied options removed.

# optionsByAddingOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a new compression options object representing the union with the provided options.

## Declaration

```objectivec
- (NSUserInterfaceCompressionOptions *) optionsByAddingOptions:(NSUserInterfaceCompressionOptions *) options;
```

## Parameters

- `options`: A set of compression options to add to the current object.

<a id="return-value"></a>

## Return Value

A new `NSCompressibleUserInterfaceOptions` object which represents the union with the supplied compression options.

## See Also

### Combining compression options

- [optionsByRemovingOptions:](subtracting%28__%29.md): Creates a new compression options object with the supplied options removed.
