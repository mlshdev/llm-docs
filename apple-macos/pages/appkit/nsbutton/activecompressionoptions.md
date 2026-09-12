> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/activecompressionoptions](https://developer.apple.com/documentation/appkit/nsbutton/activecompressionoptions)

# activeCompressionOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The compression options active for this button.

## Declaration

```swift
@NSCopying var activeCompressionOptions: NSUserInterfaceCompressionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Only compression options that have been applied and are actively being respected are returned. For more information about managing button sizes when space is restriced, see [NSUserInterfaceCompressionOptions](../nsuserinterfacecompressionoptions.md).

## See Also

### Managing button compression

- [compress(withPrioritizedCompressionOptions:)](compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.
- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.

# activeCompressionOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The compression options active for this button.

## Declaration

```objectivec
@property (copy, readonly) NSUserInterfaceCompressionOptions * activeCompressionOptions;
```

<a id="Discussion"></a>

## Discussion

Only compression options that have been applied and are actively being respected are returned. For more information about managing button sizes when space is restriced, see [NSUserInterfaceCompressionOptions](../nsuserinterfacecompressionoptions.md).

## See Also

### Managing button compression

- [compressWithPrioritizedCompressionOptions:](compress%28withprioritizedcompressionoptions_%29.md): Sets the priority compression options for this button.
- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md): Returns the minimum size of the button by using the compression options.
