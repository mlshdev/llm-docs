> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/profile/init(_:)

# init(\_:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a profile that contains dynamic instructions.

## Declaration

```swift
init(@DynamicInstructionsBuilder _ dynamicInstructions: () -> some DynamicInstructions)
```

## Parameters

- `dynamicInstructions`: The dynamic instructions.
