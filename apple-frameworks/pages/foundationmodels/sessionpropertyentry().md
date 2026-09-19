> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/sessionpropertyentry()

# SessionPropertyEntry()

**Framework:** Foundation Models  
**Kind:** Macro  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(__Key_)) macro SessionPropertyEntry()
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](composing-dynamic-sessions-with-instructions-and-profiles.md)

## See Also

### Custom session properties

- [LanguageModelSession.SessionProperty](languagemodelsession/sessionproperty.md): A property wrapper that provides access to properties from within profiles, dynamic instructions, and tools.
- [SessionPropertyKey](sessionpropertykey.md): A protocol for defining a custom session property key.
- [SessionPropertyValues](sessionpropertyvalues.md): A container for property values.
