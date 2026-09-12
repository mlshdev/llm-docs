> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/parameterhandle(name:)](https://developer.apple.com/documentation/realitykit/portalmaterial/parameterhandle(name:))

# parameterHandle(name:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a handle for the parameter with the given name.

## Declaration

```swift
static func parameterHandle(name: String) -> MaterialParameters.Handle
```

## Parameters

- `name`: The name of the parameter as declared in the shader graph.

<a id="return-value"></a>

## Return Value

A handle that identifies the parameter on any [PortalMaterial](../portalmaterial.md) whose program declares an input with the given name.

<a id="discussion"></a>

## Discussion

Handles bypass the per-call string lookup that [setParameter(name:value:)](setparameter%28name_value_%29.md) and [getParameter(name:)](getparameter%28name_%29.md) perform. In performance-sensitive code that updates the same parameter every frame, obtain a handle once during setup and reuse it.

## See Also

### Accessing shader parameters

- [getParameter(name:)](getparameter%28name_%29.md): Returns the value of a parameter by name.
- [getParameter(handle:)](getparameter%28handle_%29.md): Returns the value of a parameter identified by a handle.
- [setParameter(name:value:)](setparameter%28name_value_%29.md): Sets the value of a parameter by name.
- [setParameter(handle:value:)](setparameter%28handle_value_%29.md): Sets the value of a parameter identified by a handle.
