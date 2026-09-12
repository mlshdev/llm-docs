> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassification/confidence](https://developer.apple.com/documentation/soundanalysis/snclassification/confidence)

# confidence (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The confidence value the model has in its prediction.

## Declaration

```swift
var confidence: Double { get }
```

<a id="Discussion"></a>

## Discussion

The model assigns confidence values in the range `[0, 1.0]`, where `1.0` represents 100% confidence.

## See Also

### Inspecting a Classification

- [identifier](identifier.md): A prediction label that’s one of the classifications a sound classifier’s underlying model defines.

# confidence (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The confidence value the model has in its prediction.

## Declaration

```objectivec
@property (assign, readonly) double confidence;
```

<a id="Discussion"></a>

## Discussion

The model assigns confidence values in the range `[0, 1.0]`, where `1.0` represents 100% confidence.

## See Also

### Inspecting a Classification

- [identifier](identifier.md): A prediction label that’s one of the classifications a sound classifier’s underlying model defines.
