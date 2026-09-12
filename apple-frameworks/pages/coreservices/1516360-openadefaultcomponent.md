> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516360-openadefaultcomponent](https://developer.apple.com/documentation/coreservices/1516360-openadefaultcomponent)

# OpenADefaultComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr OpenADefaultComponent(OSType componentType, OSType componentSubType, ComponentInstance *ci);
```

## Parameters

- `componentType`:
- `componentSubType`:
- `ci`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Opening and Closing Components

- [OpenAComponent](1516558-openacomponent.md): Deprecated.
- [OpenComponent](1516607-opencomponent.md): Deprecated. Opens a connection to the component with the component identifier specified by your application.
- [OpenDefaultComponent](1516523-opendefaultcomponent.md): Deprecated. Opens a connection to a registered component of the component type and subtype specified by your application.
- [CloseComponent](1516436-closecomponent.md): Deprecated. Terminates your application’s connection to a component.
