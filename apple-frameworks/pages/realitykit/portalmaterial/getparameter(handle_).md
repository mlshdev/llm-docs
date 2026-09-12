> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/getparameter(handle:)](https://developer.apple.com/documentation/realitykit/portalmaterial/getparameter(handle:))

# getParameter(handle:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value of a parameter identified by a handle.

## Declaration

```swift
func getParameter(handle: MaterialParameters.Handle) -> MaterialParameters.Value?
```

## Parameters

- `handle`: A handle previously returned by [parameterHandle(name:)](parameterhandle%28name_%29.md).

<a id="return-value"></a>

## Return Value

The current value of the parameter, or `nil` if the parameter has no value set on this material.

## See Also

### Accessing shader parameters

- [getParameter(name:)](getparameter%28name_%29.md): Returns the value of a parameter by name.
- [setParameter(name:value:)](setparameter%28name_value_%29.md): Sets the value of a parameter by name.
- [setParameter(handle:value:)](setparameter%28handle_value_%29.md): Sets the value of a parameter identified by a handle.
- [parameterHandle(name:)](parameterhandle%28name_%29.md): Returns a handle for the parameter with the given name.
