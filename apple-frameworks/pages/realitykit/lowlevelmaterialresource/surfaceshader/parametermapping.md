> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader/parametermapping

# parameterMapping

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The parameter name-to-slot mapping for this surface shader function, or `nil` if it takes no custom parameters.

## Declaration

```swift
final var parameterMapping: LowLevelMaterialParameterMapping? { get }
```

## See Also

### Configuring shader parameters

- [argumentTableDescriptor](argumenttabledescriptor.md): The argument table descriptor for this surface shader, or `nil` if it takes no per-draw arguments.
