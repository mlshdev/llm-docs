> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(sequence:)

# init(sequence:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a feature value that contains a sequence.

## Declaration

```swift
convenience init(sequence: MLSequence)
```

## Parameters

- `sequence`: An [MLSequence](../mlsequence.md) instance.

## See Also

### Creating collection feature values

- [init(dictionary:)](init%28dictionary_%29.md): Creates a feature value that contains a dictionary of numbers.

# featureValueWithSequence: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a feature value that contains a sequence.

## Declaration

```objectivec
+ (instancetype) featureValueWithSequence:(MLSequence *) sequence;
```

## Parameters

- `sequence`: An [MLSequence](../mlsequence.md) instance.

## See Also

### Creating collection feature values

- [featureValueWithDictionary:error:](init%28dictionary_%29.md): Creates a feature value that contains a dictionary of numbers.
