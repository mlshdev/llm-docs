> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/analysistypes](https://developer.apple.com/documentation/visionkit/imageanalyzer/analysistypes)

# ImageAnalyzer.AnalysisTypes

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

The types of items that an image analyzer looks for in an image.

## Declaration

```swift
struct AnalysisTypes
```

## Topics

### Specifying types to find

- [machineReadableCode](analysistypes/machinereadablecode.md): An option that analyzes an image for machine-readable codes, such as QR codes.
- [text](analysistypes/text.md): An option that analyzes an image for text.
- [visualLookUp](analysistypes/visuallookup.md): An option that analyzes an image for subjects that the framework can look up for more information.

### Managing sets

- [Set properties and methods](../analysistypes-set-properties-and-methods.md): The properties and methods that conform to the option set protocol.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating configurations

- [init(\_:)](configuration/init%28__%29.md): Creates a configuration that an image analyzer uses to find items.
- [analysisTypes](configuration/analysistypes.md): The types of items that the image analyzer looks for in the image.
