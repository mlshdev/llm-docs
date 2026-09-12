> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516436-closecomponent](https://developer.apple.com/documentation/coreservices/1516436-closecomponent)

# CloseComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Terminates your application’s connection to a component.

## Declaration

```objectivec
OSErr CloseComponent(ComponentInstance aComponentInstance);
```

## Parameters

- `aComponentInstance`: The connection you wish to close. Your application obtains the component instance from the [OpenComponent](1516607-opencomponent.md) function or the [OpenDefaultComponent](1516523-opendefaultcomponent.md) function. You can use a component identifier here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

<a id="discussion"></a>

## Discussion

This function closes only a single connection. If your application has several connections to a single component, you must call it once for each connection.

## See Also

### Opening and Closing Components

- [OpenAComponent](1516558-openacomponent.md): Deprecated.
- [OpenADefaultComponent](1516360-openadefaultcomponent.md): Deprecated.
- [OpenComponent](1516607-opencomponent.md): Deprecated. Opens a connection to the component with the component identifier specified by your application.
- [OpenDefaultComponent](1516523-opendefaultcomponent.md): Deprecated. Opens a connection to a registered component of the component type and subtype specified by your application.
