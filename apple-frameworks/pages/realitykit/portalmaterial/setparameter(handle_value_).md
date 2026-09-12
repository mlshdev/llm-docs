> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/setparameter(handle:value:)](https://developer.apple.com/documentation/realitykit/portalmaterial/setparameter(handle:value:))

# setParameter(handle:value:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of a parameter identified by a handle.

## Declaration

```swift
mutating func setParameter(handle: MaterialParameters.Handle, value newValue: MaterialParameters.Value) throws
```

## Parameters

- `handle`: A handle previously returned by [parameterHandle(name:)](parameterhandle%28name_%29.md).

<a id="discussion"></a>

## Discussion

Use this overload alongside [parameterHandle(name:)](parameterhandle%28name_%29.md) when you update the same parameter often enough that avoiding repeated name lookups matters. For one-off updates, [setParameter(name:value:)](setparameter%28name_value_%29.md) is more readable.

> **Throws**

> An error if the parameter doesn’t exist on this material’s program, or if the value’s type doesn’t match the parameter’s declared type.

## See Also

### Accessing shader parameters

- [getParameter(name:)](getparameter%28name_%29.md): Returns the value of a parameter by name.
- [getParameter(handle:)](getparameter%28handle_%29.md): Returns the value of a parameter identified by a handle.
- [setParameter(name:value:)](setparameter%28name_value_%29.md): Sets the value of a parameter by name.
- [parameterHandle(name:)](parameterhandle%28name_%29.md): Returns a handle for the parameter with the given name.
