> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofile](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile)

# LanguageModelSession.DynamicProfile

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamic profile that contains one or more profiles.

## Declaration

```swift
protocol DynamicProfile
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)
- [Expanding generation with tool calling](../expanding-generation-with-tool-calling.md)

<a id="overview"></a>

## Overview

A dynamic profile is the top-level coordination layer that manages profiles. It determines which [LanguageModelSession.DynamicProfile.Profile](dynamicprofile/profile.md) is in an active state and allows a [LanguageModelSession](../languagemodelsession.md) to switch between entirely different configurations as app state changes. A body must resolve to a single profile.

[DynamicInstructions](../dynamicinstructions.md) declares what content and tools the model sees, and [LanguageModelSession.DynamicProfile.Profile](dynamicprofile/profile.md) binds that content to how a single configuration runs. That configuration includes details like the model to use, temperature, reasoning level, and so on.

```swift
struct PresentationProfile: LanguageModelSession.DynamicProfile {
    // The data source for the profile.
    var isEditingImage = true
    var isEditingAnimation = false

    // Determine which profile to load based on the current state.
    var body: some LanguageModelSession.DynamicProfile {
        if isEditingImage {
            // Use the editing image profile.
        } else if isEditingAnimation {
            // Use the editing animation profile.
        } else {
            // Use the default profile.
        }
    }
}
```

Use [historyTransform(\_:)](dynamicprofile/historytransform%28__%29.md) to perform stateless transcript transforms. This allows you to modify the transcript that’s sent to the model, but doesn’t impact the global transcript state. For example, the request might only need the last twenty entries instead of the full transcript:

```swift
Profile {
    // The instructions and tools necessary for the task.
}
.historyTransform { history in
    Array(history.suffix(20))
}
```

## Topics

### Implementing a dynamic profile

- [body](dynamicprofile/body-swift.property.md): The content of the dynamic profile.
- [Body](dynamicprofile/body-swift.associatedtype.md): The type of dynamic profile that represent this profile.
- [LanguageModelSession.DynamicProfile.DynamicProfile](dynamicprofile/dynamicprofile.md)
- [LanguageModelSession.DynamicProfile.Profile](dynamicprofile/profile.md)
- [LanguageModelSession.DynamicProfile.SessionProperty](dynamicprofile/sessionproperty.md)

### Transforming the history

- [historyTransform(\_:)](dynamicprofile/historytransform%28__%29.md): Applies a transformation to the history prior to invoking the model.

### Observing life cycle modifiers

- [onActivate(perform:)](dynamicprofile/onactivate%28perform_%29.md): Runs an action when this dynamic profile becomes active.
- [onDeactivate(perform:)](dynamicprofile/ondeactivate%28perform_%29.md): Runs an action when this dynamic profile becomes inactive.
- [onPrompt(perform:)](dynamicprofile/onprompt%28perform_%29.md): Runs an action before the model is invoked for this dynamic profile.
- [onReasoning(perform:)](dynamicprofile/onreasoning%28perform_%29.md): Runs an action whenever this dynamic profile produces reasoning.
- [onResponse(perform:)](dynamicprofile/onresponse%28perform_%29.md): Runs an action after this dynamic profile produces a response.
- [onToolCall(perform:)](dynamicprofile/ontoolcall%28perform_%29.md): Runs an action whenever a tool is called within this dynamic profile.
- [onToolOutput(perform:)](dynamicprofile/ontooloutput%28perform_%29.md): Runs an action whenever a tool call output is received within this dynamic profile.

### Applying tool modifiers

- [toolCallingMode(\_:)](dynamicprofile/toolcallingmode%28__%29.md)

### Configuring the model

- [model(\_:)](dynamicprofile/model%28__%29.md): Sets the model.
- [temperature(\_:)](dynamicprofile/temperature%28__%29.md): Sets the model temperature.
- [samplingMode(\_:)](dynamicprofile/samplingmode%28__%29.md): Sets the samping mode.
- [reasoningLevel(\_:)](dynamicprofile/reasoninglevel%28__%29.md): Sets the reasoning level.
- [maximumResponseTokens(\_:)](dynamicprofile/maximumresponsetokens%28__%29.md): Sets the maximum response tokens.
- [modifier(\_:)](dynamicprofile/modifier%28__%29.md): Applies a modifier to the dynamic profile.

### Handling the error policy

- [transcriptErrorHandlingPolicy(\_:)](dynamicprofile/transcripterrorhandlingpolicy%28__%29.md): Sets the policy for managing the transcript when errors occur.

## Relationships

### Conforming Types

- [LanguageModelSession.AnyDynamicProfile](anydynamicprofile.md)
- [LanguageModelSession.ConditionalDynamicProfile](conditionaldynamicprofile.md)
- [LanguageModelSession.DynamicProfileModifierContent](dynamicprofilemodifiercontent.md)
- [LanguageModelSession.ModifiedDynamicProfile](modifieddynamicprofile.md)
- [LanguageModelSession.Profile](profile.md)

## See Also

### Dynamic profiles

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Origami: Crafting a dynamic tutorial for Apple Intelligence](../origami-crafting-a-dynamic-tutorial-for-apple-intelligence.md): Build interactive experiences with Foundation Models and Private Cloud Compute using multimodal prompts.
- [DynamicInstructions](../dynamicinstructions.md): A type that represents dynamic instructions.
- [DynamicInstructionsForEach](../dynamicinstructionsforeach.md)
- [LanguageModelSession.DynamicProfileModifier](dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.
