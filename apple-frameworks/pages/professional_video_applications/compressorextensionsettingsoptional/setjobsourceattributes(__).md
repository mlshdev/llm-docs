> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettingsoptional/setjobsourceattributes(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettingsoptional/setjobsourceattributes(_:))

# setJobSourceAttributes(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Sets the source media attributes based on the given values.

## Declaration

```swift
func setJobSourceAttributes(_ sourceProperties: [AnyHashable : Any]!)
```

## Parameters

- `sourceProperties`: A dictionary of key-value pairs that provide information about the source media, such as size and frame rate. The dictionary has same keys as defined in Encoder Attribute Keys.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method when users update the source media attributes for an encoding job. Use the source media attributes to compute encoding values for the encoder settings, such as height, width, and frame rate, that have values set to automatic. See [kCEAutoHeightKey](../kceautoheightkey.md), [kCEAutoWidthKey](../kceautowidthkey.md), and [kCEAutoRateKey](../kceautoratekey.md).

# setJobSourceAttributes: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the source media attributes based on the given values.

## Declaration

```objectivec
- (void) setJobSourceAttributes:(NSDictionary *) sourceProperties;
```

## Parameters

- `sourceProperties`: A dictionary of key-value pairs that provide information about the source media, such as size and frame rate. The dictionary has same keys as defined in Encoder Attribute Keys.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method when users update the source media attributes for an encoding job. Use the source media attributes to compute encoding values for the encoder settings, such as height, width, and frame rate, that have values set to automatic. See [kCEAutoHeightKey](../kceautoheightkey.md), [kCEAutoWidthKey](../kceautowidthkey.md), and [kCEAutoRateKey](../kceautoratekey.md).
