> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surfaceshader/argumenttabledescriptor](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader/argumenttabledescriptor)

# argumentTableDescriptor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The argument table descriptor for this surface shader, or `nil` if it takes no per-draw arguments.

## Declaration

```swift
final var argumentTableDescriptor: LowLevelArgumentTable.Descriptor? { get }
```

## See Also

### Configuring shader parameters

- [parameterMapping](parametermapping.md): The parameter name-to-slot mapping for this surface shader function, or `nil` if it takes no custom parameters.
