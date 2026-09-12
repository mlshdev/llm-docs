> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516607-opencomponent](https://developer.apple.com/documentation/coreservices/1516607-opencomponent)

# OpenComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Opens a connection to the component with the component identifier specified by your application.

## Declaration

```objectivec
ComponentInstance OpenComponent(Component aComponent);
```

## Parameters

- `aComponent`: The component you wish to open. Your application obtains this identifier from the [FindNextComponent](1516552-findnextcomponent.md) function. If your application registers a component, it can also obtain a component identifier from the `RegisterComponent` function or the `RegisterComponentResource` function.

<a id="return_value"></a>

## Return Value

A component instance which identifies your application’s connection to the component. You must supply this component instance whenever you call the functions provided by the component. When you close the component, you must also supply this component instance to the [CloseComponent](1516436-closecomponent.md) function.

If it cannot open the specified component, the function returns `NULL`.

See the description of the `ComponentInstance` data type.

<a id="discussion"></a>

## Discussion

Your application must open a component before it can call any component functions. To use this function, you must already have obtained a component identifier. Alternatively, you can use the  [OpenDefaultComponent](1516523-opendefaultcomponent.md)  function to open a component without calling `FindNextComponent`. 

Note that your application may maintain several connections to a single component, or it may have connections to several components at the same time.

## See Also

### Opening and Closing Components

- [OpenAComponent](1516558-openacomponent.md): Deprecated.
- [OpenADefaultComponent](1516360-openadefaultcomponent.md): Deprecated.
- [OpenDefaultComponent](1516523-opendefaultcomponent.md): Deprecated. Opens a connection to a registered component of the component type and subtype specified by your application.
- [CloseComponent](1516436-closecomponent.md): Deprecated. Terminates your application’s connection to a component.
