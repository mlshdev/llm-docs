> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct)

# AVPlayerItemLegibleOutput.TextStylingResolution (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A text styling resolution.

## Declaration

```swift
struct TextStylingResolution
```

## Topics

### Text styling options

- [default](textstylingresolution-swift.struct/default.md): The text styling information is the same level of information that AVFoundation uses within a player layer.
- [sourceAndRulesOnly](textstylingresolution-swift.struct/sourceandrulesonly.md): The level of resolution excludes styling provided by the user-level Media Accessibility settings.

### Initializers

- [init(rawValue:)](textstylingresolution-swift.struct/init%28rawvalue_%29.md): Creates a text styling resolution structure with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring text styling

- [textStylingResolution](textstylingresolution-swift.property.md): A string identifier indicating the degree of text styling to be applied to attributed strings vended by the object.

# AVPlayerItemLegibleOutputTextStylingResolution (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A text styling resolution.

## Declaration

```objectivec
typedef NSString * AVPlayerItemLegibleOutputTextStylingResolution;
```

## Topics

### Text styling options

- [AVPlayerItemLegibleOutputTextStylingResolutionDefault](textstylingresolution-swift.struct/default.md): The text styling information is the same level of information that AVFoundation uses within a player layer.
- [AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly](textstylingresolution-swift.struct/sourceandrulesonly.md): The level of resolution excludes styling provided by the user-level Media Accessibility settings.

## See Also

### Configuring text styling

- [textStylingResolution](textstylingresolution-swift.property.md): A string identifier indicating the degree of text styling to be applied to attributed strings vended by the object.
