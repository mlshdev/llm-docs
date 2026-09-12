> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516523-opendefaultcomponent](https://developer.apple.com/documentation/coreservices/1516523-opendefaultcomponent)

# OpenDefaultComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Opens a connection to a registered component of the component type and subtype specified by your application.

## Declaration

```objectivec
ComponentInstance OpenDefaultComponent(OSType componentType, OSType componentSubType);
```

## Parameters

- `componentType`: The type of the component. All components of a particular type support a common set of interface functions. Use this parameter to search for components of a given type.
- `componentSubType`: The subtype of the component. Different subtypes of a component type may support additional features or provide interfaces that extend beyond the standard functions for a given component type. For example, the subtype of an image compressor component indicates the compression algorithm employed by the compressor.

  Your application can use the `componentSubType` parameter to perform a more specific lookup operation than is possible using only the `componentType` parameter. For example, you may want your application to use only components of a certain component type (`'draw'`) that also have a specific subtype (`'oval'`). Set this parameter to 0 to select a component with any subtype value.

<a id="return_value"></a>

## Return Value

A component instance that identifies the connection opened to the component which matches your search criteria. You must supply this component instance whenever you call the functions provided by the component. When you close the component, you must also supply this component instance to the [CloseComponent](1516436-closecomponent.md) function.

If more than one component in the list of registered components meets the search criteria, the function opens the first one that it finds in its list. If it cannot open the specified component, it returns `NULL`.

See the description of the `ComponentInstance` data type.

<a id="discussion"></a>

## Discussion

Your application must open a component before it can call any component functions. This function searches for a component by type and subtype. You do not have to supply a component description structure or call the  [FindNextComponent](1516552-findnextcomponent.md)  function to use this function. If you want to exert more control over the selection process, you can use the `FindNextComponent` and  [OpenComponent](1516607-opencomponent.md)  functions.

## See Also

### Opening and Closing Components

- [OpenAComponent](1516558-openacomponent.md): Deprecated.
- [OpenADefaultComponent](1516360-openadefaultcomponent.md): Deprecated.
- [OpenComponent](1516607-opencomponent.md): Deprecated. Opens a connection to the component with the component identifier specified by your application.
- [CloseComponent](1516436-closecomponent.md): Deprecated. Terminates your application’s connection to a component.
