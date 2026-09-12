> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/compress(withprioritizedcompressionoptions:)](https://developer.apple.com/documentation/appkit/nsbutton/compress(withprioritizedcompressionoptions:))

# compress(withPrioritizedCompressionOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Sets the priority compression options for this button.

## Declaration

```swift
func compress(withPrioritizedCompressionOptions prioritizedOptions: [NSUserInterfaceCompressionOptions])
```

## Parameters

- `prioritizedOptions`: An array of interface compression options.

## See Also

### Managing button compression

- [activeCompressionOptions](activecompressionoptions.md): The compression options active for this button.
- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.

# compressWithPrioritizedCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Sets the priority compression options for this button.

## Declaration

```objectivec
- (void) compressWithPrioritizedCompressionOptions:(NSArray<NSUserInterfaceCompressionOptions *> *) prioritizedOptions;
```

## Parameters

- `prioritizedOptions`: An array of interface compression options.

## See Also

### Managing button compression

- [activeCompressionOptions](activecompressionoptions.md): The compression options active for this button.
- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.
