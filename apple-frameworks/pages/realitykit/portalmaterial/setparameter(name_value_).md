> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/setparameter(name:value:)](https://developer.apple.com/documentation/realitykit/portalmaterial/setparameter(name:value:))

# setParameter(name:value:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of a parameter by name.

## Declaration

```swift
mutating func setParameter(name: String, value newValue: MaterialParameters.Value) throws
```

## Parameters

- `name`: The name of the parameter as declared in the shader graph.

<a id="discussion"></a>

## Discussion

Call this method to drive a shader-graph input from Swift — for example, to animate a portal’s opacity each frame, or to swap in a different texture in response to user input.

> **Throws**

> An error if the parameter doesn’t exist on this material’s program, or if the value’s type doesn’t match the parameter’s declared type.

## See Also

### Accessing shader parameters

- [getParameter(name:)](getparameter%28name_%29.md): Returns the value of a parameter by name.
- [getParameter(handle:)](getparameter%28handle_%29.md): Returns the value of a parameter identified by a handle.
- [setParameter(handle:value:)](setparameter%28handle_value_%29.md): Sets the value of a parameter identified by a handle.
- [parameterHandle(name:)](parameterhandle%28name_%29.md): Returns a handle for the parameter with the given name.
