> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/geometrymodifier/descriptor/init(named:in:)

# init(named:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor referencing the named function in the given library.

## Declaration

```swift
init(named name: String, in library: any MTLLibrary)
```

## Parameters

- `name`: The name of the Metal function in the library.
- `library`: The Metal library that contains the function.
