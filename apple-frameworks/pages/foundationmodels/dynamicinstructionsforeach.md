> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicinstructionsforeach](https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsforeach)

# DynamicInstructionsForEach

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct DynamicInstructionsForEach<Data, ID, Content> where Data : RandomAccessCollection, ID : Hashable, Content : DynamicInstructions
```

## Topics

### Creating an instance

- [init(\_:content:)](dynamicinstructionsforeach/init%28__content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` is `Data.Element.ID`, `Content` conforms to `DynamicInstructions`, and `Data.Element` conforms to `Identifiable`.
- [init(\_:id:content:)](dynamicinstructionsforeach/init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `DynamicInstructions`.

## Relationships

### Conforms To

- [DynamicInstructions](dynamicinstructions.md)

## See Also

### Dynamic profiles

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Origami: Crafting a dynamic tutorial for Apple Intelligence](origami-crafting-a-dynamic-tutorial-for-apple-intelligence.md): Build interactive experiences with Foundation Models and Private Cloud Compute using multimodal prompts.
- [DynamicInstructions](dynamicinstructions.md): A type that represents dynamic instructions.
- [LanguageModelSession.DynamicProfile](languagemodelsession/dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](languagemodelsession/dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.Profile](languagemodelsession/profile.md): A profile that contains dynamic instructions.
