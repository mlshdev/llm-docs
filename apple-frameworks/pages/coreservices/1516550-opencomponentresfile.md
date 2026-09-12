> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516550-opencomponentresfile](https://developer.apple.com/documentation/coreservices/1516550-opencomponentresfile)

# OpenComponentResFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Allows your component to gain access to its resource file.

## Declaration

```objectivec
ResFileRefNum OpenComponentResFile(Component aComponent);
```

## Parameters

- `aComponent`: The component whose resource file you wish to open. Applications that register components may obtain this identifier from the [RegisterComponentResource](1516594-registercomponentresource.md) function. You can use a component instance here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

A reference number that your component can use to read data from the appropriate resource file. If the specified component does not have an associated resource file or if the Component Manager cannot open the resource file, the function returns 0 or a negative number.

<a id="discussion"></a>

## Discussion

This function opens the resource file with read-only permission. The Component Manager adds the resource file to the current resource chain. Your component must close the resource file with the  [CloseComponentResFile](1516319-closecomponentresfile.md)  function before returning to the calling application. Note that there is only one resource file associated with a component.

Your component can use `FSpOpenResFile` or equivalent Resource Manager functions to open other resource files, but you must use this function to open your component’s resource file.

If you store your component in a component resource but register the component with the  [RegisterComponent](1516537-registercomponent.md)  function, rather than with the `RegisterComponentResource` or `RegisterComponentResourceFile` function, your component cannot access its resource file with this function.

Note that when working with resources, your component should always first save the current resource file, perform any resource operations, then restore the current resource file to its previous value before returning.

## See Also

### Accessing a Component’s Resource File

- [OpenAComponentResFile](1516643-openacomponentresfile.md): Deprecated.
- [CloseComponentResFile](1516319-closecomponentresfile.md): Deprecated. Closes the resource file that your component opened previously with the `OpenComponentResFile` function.
- [GetComponentResource](1516387-getcomponentresource.md): Deprecated.
- [GetComponentIndString](1516616-getcomponentindstring.md): Deprecated.
