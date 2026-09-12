> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechlanguagemodel/configuration/vocabulary](https://developer.apple.com/documentation/speech/sfspeechlanguagemodel/configuration/vocabulary)

# vocabulary (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The location of a compiled vocabulary file.

## Declaration

```swift
var vocabulary: URL? { get }
```

## See Also

### Inspecting a language model

- [languageModel](languagemodel.md): The location of a compiled language model file.
- [weight](weight.md): The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.

# vocabulary (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The location of a compiled vocabulary file.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * vocabulary;
```

## See Also

### Inspecting a language model

- [languageModel](languagemodel.md): The location of a compiled language model file.
- [weight](weight.md): The relative weight of the language model customization. Value must be between 0.0 and 1.0 inclusive.
