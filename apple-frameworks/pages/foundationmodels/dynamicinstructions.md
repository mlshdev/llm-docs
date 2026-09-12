> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicinstructions](https://developer.apple.com/documentation/foundationmodels/dynamicinstructions)

# DynamicInstructions

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents dynamic instructions.

## Declaration

```swift
protocol DynamicInstructions
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Optimizing key-value caching in language model sessions](optimizing-key-value-caching-in-language-model-sessions.md)

<a id="overview"></a>

## Overview

Dynamic instructions provide a declarative approach to assembling instructions and tools that a [LanguageModelSession](languagemodelsession.md) uses. The framework evaluates them before every request to the model, so the body can contain conditional logic that’s based on current app state.

```swift
struct PresentationInstructions: DynamicInstructions {
    // The data source for conditional instructions.
    var isEditingImage = true

    var body: some DynamicInstructions {
        // The instructions and tools that remain the same across any use of this type.
        Instructions {
            "Help people improve their presentation."
        }
        ListPhotosTool()
        AddPhotoTool()

        // Depending on the state of the app, include additional instructions
        // that provide the model with more task-specific instructions and tools.
        if isEditingImage {
            ImageEditingInstructions()
        }
    }
}
```

## Topics

### Implementing dynamic instructions

- [body](dynamicinstructions/body-swift.property.md): The content of the dynamic instructions.
- [Body](dynamicinstructions/body-swift.associatedtype.md): The type of dynamic instructions that represent these instructions.
- [DynamicInstructions.ForEach](dynamicinstructions/foreach.md)
- [DynamicInstructions.SessionProperty](dynamicinstructions/sessionproperty.md)

### Building dynamic instructions

- [DynamicInstructionsBuilder](dynamicinstructionsbuilder.md)
- [EmptyDynamicInstructions](emptydynamicinstructions.md): An empty dynamic instructions type.
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md): A dynamic instructions type that conditionally selects between two conditions.
- [AnyDynamicInstructions](anydynamicinstructions.md): A dynamic instructions type that’s type-erased.
- [TupleDynamicInstructions](tupledynamicinstructions.md): A dynamic instructions type that represents a tuple.

## Relationships

### Conforming Types

- [AnyDynamicInstructions](anydynamicinstructions.md)
- [ConditionalDynamicInstructions](conditionaldynamicinstructions.md)
- [DynamicInstructionsForEach](dynamicinstructionsforeach.md)
- [EmptyDynamicInstructions](emptydynamicinstructions.md)
- [Instructions](instructions.md)
- [TupleDynamicInstructions](tupledynamicinstructions.md)

## See Also

### Dynamic profiles

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Origami: Crafting a dynamic tutorial for Apple Intelligence](origami-crafting-a-dynamic-tutorial-for-apple-intelligence.md): Build interactive experiences with Foundation Models and Private Cloud Compute using multimodal prompts.
- [DynamicInstructionsForEach](dynamicinstructionsforeach.md)
- [LanguageModelSession.DynamicProfile](languagemodelsession/dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](languagemodelsession/dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.Profile](languagemodelsession/profile.md): A profile that contains dynamic instructions.
