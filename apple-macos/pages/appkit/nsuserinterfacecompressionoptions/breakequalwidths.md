> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/breakequalwidths](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/breakequalwidths)

# breakEqualWidths (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

An option specifying that views should no longer maintain equal width constraints.

## Declaration

```swift
@NSCopying class var breakEqualWidths: NSUserInterfaceCompressionOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is handled by the system, and no action is required by the views.

## See Also

### Creating standard options

- [hideImages](hideimages.md): An option specifying that views should hide their images.
- [hideText](hidetext.md): An option specifying that views should hide their text.
- [reduceMetrics](reducemetrics.md): An option specifying that views should reduce their internal metrics.
- [standardOptions](standardoptions.md): An option that represents the union of all standard compression options.

# breakEqualWidthsOption (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

An option specifying that views should no longer maintain equal width constraints.

## Declaration

```objectivec
@property (class, copy, readonly) NSUserInterfaceCompressionOptions * breakEqualWidthsOption;
```

<a id="Discussion"></a>

## Discussion

This option is handled by the system, and no action is required by the views.

## See Also

### Creating standard options

- [hideImagesOption](hideimages.md): An option specifying that views should hide their images.
- [hideTextOption](hidetext.md): An option specifying that views should hide their text.
- [reduceMetricsOption](reducemetrics.md): An option specifying that views should reduce their internal metrics.
- [standardOptions](standardoptions.md): An option that represents the union of all standard compression options.
