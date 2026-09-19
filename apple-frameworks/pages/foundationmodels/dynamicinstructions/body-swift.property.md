> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dynamicinstructions/body-swift.property

# body

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The content of the dynamic instructions.

## Declaration

```swift
@DynamicInstructionsBuilder var body: Self.Body { get }
```

## See Also

### Implementing dynamic instructions

- [Body](body-swift.associatedtype.md): The type of dynamic instructions that represent these instructions.
- [DynamicInstructions.ForEach](foreach.md): A shorthand for producing content for each element of a collection.
- [DynamicInstructions.SessionProperty](sessionproperty.md): A property wrapper that provides access to a session property within dynamic instructions.
