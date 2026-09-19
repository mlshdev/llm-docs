> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/asseterror/init(kind:debugmessage:)

# init(kind:debugMessage:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an asset error.

## Declaration

```swift
init(kind: AssetError.Kind, debugMessage: String?)
```

## Parameters

- `kind`: The kind of error.
- `debugMessage`: An optional message with additional debugging context.
