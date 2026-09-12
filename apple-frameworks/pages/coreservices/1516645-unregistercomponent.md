> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516645-unregistercomponent](https://developer.apple.com/documentation/coreservices/1516645-unregistercomponent)

# UnregisterComponent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Removes a component from the Component Manager’s registration list.

## Declaration

```objectivec
OSErr UnregisterComponent(Component aComponent);
```

## Parameters

- `aComponent`: The component to be removed. Applications that register components may obtain this identifier from the [RegisterComponent](1516537-registercomponent.md) or [RegisterComponentResource](1516594-registercomponentresource.md) functions. The component must not be in use by any applications or components. You can use a component instance here, but you must coerce the data type appropriately.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759). If there are open connections to the component, returns a `validInstancesExist` error.

<a id="discussion"></a>

## Discussion

Most components are registered at startup and remain registered until the computer is shut down. However, you may want to provide some services temporarily. In that case you dispose of the component that provides the temporary service by using this function.

## See Also

### Registering Components

- [RegisterComponent](1516537-registercomponent.md): Deprecated. Registers a component stored in memory.
- [RegisterComponentResource](1516594-registercomponentresource.md): Deprecated. Registers a component stored in a resource file.
- [RegisterComponentResourceFile](1516511-registercomponentresourcefile.md): Deprecated. Registers all component resources in the given resource file.
- [RegisterComponentFileRef](1516564-registercomponentfileref.md): Deprecated.
- [RegisterComponentFileRefEntries](1516395-registercomponentfilerefentries.md): Deprecated.
