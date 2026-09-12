> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/configuration/weight](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/configuration/weight)

# weight (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.

## Declaration

```swift
@NSCopying var weight: NSNumber? { get }
```

## See Also

### Inspecting a language model

- [languageModel](languagemodel.md): The location of a compiled language model file.
- [vocabulary](vocabulary.md): The location of a compiled vocabulary file.

# weight (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * weight;
```

## See Also

### Inspecting a language model

- [languageModel](languagemodel.md): The location of a compiled language model file.
- [vocabulary](vocabulary.md): The location of a compiled vocabulary file.
