> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/lightingfunction/parametermapping](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/lightingfunction/parametermapping)

# parameterMapping

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The parameter name-to-slot mapping for this lighting function, or `nil` if it takes no custom parameters.

## Declaration

```swift
final var parameterMapping: LowLevelMaterialParameterMapping? { get }
```

## See Also

### Configuring shader arguments

- [argumentTableDescriptor](argumenttabledescriptor.md): The argument table descriptor for this lighting function, or `nil` if it takes no per-draw arguments.
