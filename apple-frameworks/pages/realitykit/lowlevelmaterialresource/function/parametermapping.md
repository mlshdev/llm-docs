> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/function/parametermapping](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/function/parametermapping)

# parameterMapping

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The parameter name-to-slot mapping for this function, used to look up binding indices by name at runtime, or `nil` if the function takes no custom parameters.

## Declaration

```swift
var parameterMapping: LowLevelMaterialParameterMapping? { get }
```

## See Also

### Configuring the function

- [argumentTableDescriptor](argumenttabledescriptor.md): The argument table descriptor that describes the buffer and texture slots this function requires, or `nil` if the function takes no per-draw arguments.
