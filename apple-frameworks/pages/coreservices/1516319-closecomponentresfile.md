> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516319-closecomponentresfile](https://developer.apple.com/documentation/coreservices/1516319-closecomponentresfile)

# CloseComponentResFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Closes the resource file that your component opened previously with the `OpenComponentResFile` function.

## Declaration

```objectivec
OSErr CloseComponentResFile(ResFileRefNum refnum);
```

## Parameters

- `refnum`: The reference number that identifies the resource file to be closed. Your component obtains this value from the [OpenComponentResFile](1516550-opencomponentresfile.md) function. Your component must close any open resource files before returning to the calling application.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Accessing a Component’s Resource File

- [OpenAComponentResFile](1516643-openacomponentresfile.md): Deprecated.
- [OpenComponentResFile](1516550-opencomponentresfile.md): Deprecated. Allows your component to gain access to its resource file.
- [GetComponentResource](1516387-getcomponentresource.md): Deprecated.
- [GetComponentIndString](1516616-getcomponentindstring.md): Deprecated.
