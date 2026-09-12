> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/reducemetrics](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/reducemetrics)

# reduceMetrics (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

An option specifying that views should reduce their internal metrics.

## Declaration

```swift
@NSCopying class var reduceMetrics: NSUserInterfaceCompressionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Use this compression option to reduce the padding in system controls.

## See Also

### Creating standard options

- [hideImages](hideimages.md): An option specifying that views should hide their images.
- [hideText](hidetext.md): An option specifying that views should hide their text.
- [breakEqualWidths](breakequalwidths.md): An option specifying that views should no longer maintain equal width constraints.
- [standardOptions](standardoptions.md): An option that represents the union of all standard compression options.

# reduceMetricsOption (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

An option specifying that views should reduce their internal metrics.

## Declaration

```objectivec
@property (class, copy, readonly) NSUserInterfaceCompressionOptions * reduceMetricsOption;
```

<a id="Discussion"></a>

## Discussion

Use this compression option to reduce the padding in system controls.

## See Also

### Creating standard options

- [hideImagesOption](hideimages.md): An option specifying that views should hide their images.
- [hideTextOption](hidetext.md): An option specifying that views should hide their text.
- [breakEqualWidthsOption](breakequalwidths.md): An option specifying that views should no longer maintain equal width constraints.
- [standardOptions](standardoptions.md): An option that represents the union of all standard compression options.
