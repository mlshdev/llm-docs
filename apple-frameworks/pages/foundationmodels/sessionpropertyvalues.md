> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/sessionpropertyvalues](https://developer.apple.com/documentation/foundationmodels/sessionpropertyvalues)

# SessionPropertyValues

**Framework:** Foundation Models  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A container for property values.

## Declaration

```swift
final class SessionPropertyValues
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md)

<a id="overview"></a>

## Overview

Use session property values across your session. To help manage the context window, access [history](sessionpropertyvalues/history.md) to modify the transcript for the session:

```swift
struct CompactingProfile: LanguageModelSession.DynamicProfile {
    @SessionProperty(\.history)
    var history

    var body: some LanguageModelSession.DynamicProfile {
        Profile {
            // Custom instructions and tools that you define.
        }
        .onResponse { _ in
            // Compact the history when the entries exceed a certain limit.
            if history.count > 100 {
                history = Array(history.suffix(50))
            }
        }
    }
}
```

Because updating the transcript history can cause cache invalidations for some models, carefully consider how you modify an existing transcript. For more information, see [Optimizing key-value caching in language model sessions](optimizing-key-value-caching-in-language-model-sessions.md).

Use [SessionPropertyEntry()](sessionpropertyentry%28%29.md) to create custom session properties.

## Topics

### Accessing the session history and instructions

- [history](sessionpropertyvalues/history.md): The history portion of the session’s transcript.

### Accessing the subscript

- [subscript(\_:)](sessionpropertyvalues/subscript%28__%29.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom session properties

- [LanguageModelSession.SessionProperty](languagemodelsession/sessionproperty.md): A property wrapper that provides access to properties from within profiles, dynamic instructions, and tools.
- [SessionPropertyKey](sessionpropertykey.md): A protocol for defining a custom session property key.
- [SessionPropertyEntry()](sessionpropertyentry%28%29.md)
