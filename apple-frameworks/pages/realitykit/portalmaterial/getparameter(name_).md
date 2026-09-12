> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/getparameter(name:)](https://developer.apple.com/documentation/realitykit/portalmaterial/getparameter(name:))

# getParameter(name:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value of a parameter by name.

## Declaration

```swift
func getParameter(name: String) -> MaterialParameters.Value?
```

## Parameters

- `name`: The name of the parameter as declared in the shader graph.

<a id="return-value"></a>

## Return Value

The current value of the parameter, or `nil` if the parameter has no value set on this material.

## See Also

### Accessing shader parameters

- [getParameter(handle:)](getparameter%28handle_%29.md): Returns the value of a parameter identified by a handle.
- [setParameter(name:value:)](setparameter%28name_value_%29.md): Sets the value of a parameter by name.
- [setParameter(handle:value:)](setparameter%28handle_value_%29.md): Sets the value of a parameter identified by a handle.
- [parameterHandle(name:)](parameterhandle%28name_%29.md): Returns a handle for the parameter with the given name.
