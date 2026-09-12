> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516643-openacomponentresfile](https://developer.apple.com/documentation/coreservices/1516643-openacomponentresfile)

# OpenAComponentResFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr OpenAComponentResFile(Component aComponent, ResFileRefNum *resRef);
```

## Parameters

- `aComponent`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Accessing a Component’s Resource File

- [OpenComponentResFile](1516550-opencomponentresfile.md): Deprecated. Allows your component to gain access to its resource file.
- [CloseComponentResFile](1516319-closecomponentresfile.md): Deprecated. Closes the resource file that your component opened previously with the `OpenComponentResFile` function.
- [GetComponentResource](1516387-getcomponentresource.md): Deprecated.
- [GetComponentIndString](1516616-getcomponentindstring.md): Deprecated.
