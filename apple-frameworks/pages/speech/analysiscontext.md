> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analysiscontext](https://developer.apple.com/documentation/speech/analysiscontext)

# AnalysisContext

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Contextual information that may be shared among analyzers.

## Declaration

```swift
final class AnalysisContext
```

## Topics

### Creating a context

- [init()](analysiscontext/init%28%29.md)

### Providing textual context

- [contextualStrings](analysiscontext/contextualstrings.md): Words or phrases, grouped by tag, that should be recognized even if they are not in the system vocabulary.
- [AnalysisContext.ContextualStringsTag](analysiscontext/contextualstringstag.md)

### Preserving app-specific context

- [userData](analysiscontext/userdata.md): A dictionary of application-specific contextual information.
- [AnalysisContext.UserDataTag](analysiscontext/userdatatag.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom vocabulary

- [SFSpeechLanguageModel](sfspeechlanguagemodel.md): A language model built from custom training data.
- [SFSpeechLanguageModel.Configuration](sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
- [SFCustomLanguageModelData](sfcustomlanguagemodeldata.md): An object that generates and exports custom language model training data.
