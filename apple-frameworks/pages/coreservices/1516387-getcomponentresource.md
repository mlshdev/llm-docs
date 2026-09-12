> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516387-getcomponentresource](https://developer.apple.com/documentation/coreservices/1516387-getcomponentresource)

# GetComponentResource

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr GetComponentResource(Component aComponent, OSType resType, SInt16 resID, Handle *theResource);
```

## Parameters

- `aComponent`:
- `resType`:
- `theResource`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Accessing a Component’s Resource File

- [OpenAComponentResFile](1516643-openacomponentresfile.md): Deprecated.
- [OpenComponentResFile](1516550-opencomponentresfile.md): Deprecated. Allows your component to gain access to its resource file.
- [CloseComponentResFile](1516319-closecomponentresfile.md): Deprecated. Closes the resource file that your component opened previously with the `OpenComponentResFile` function.
- [GetComponentIndString](1516616-getcomponentindstring.md): Deprecated.
