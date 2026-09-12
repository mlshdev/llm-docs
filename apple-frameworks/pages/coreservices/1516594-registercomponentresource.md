> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516594-registercomponentresource](https://developer.apple.com/documentation/coreservices/1516594-registercomponentresource)

# RegisterComponentResource

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Registers a component stored in a resource file.

## Declaration

```objectivec
Component RegisterComponentResource(ComponentResourceHandle cr, SInt16 global);
```

## Parameters

- `cr`: A handle to a component resource that describes the component to be registered. The component resource contains all the information required to register the component. Components you register with this function must be stored in a resource file as a component resource. The Component Manager automatically registers component resources stored in files with file types of `'thng'` that are stored in the Extensions folder. See “Resources” for more information on component resource files.
- `global`: A set of flags that controls the scope of component registration. See [Register Component Resource flags](1516405-register_component_resource_flag.md) for a description of the flags.

<a id="return_value"></a>

## Return Value

The unique component identifier assigned to the component by the Component Manager, or `NULL `if the function could not register the component. See the description of the `Component` data type.

<a id="discussion"></a>

## Discussion

Before a component can be used by an application, the component must be registered with the Component Manager. Applications can then find and open the component using the standard Component Manager functions. 

If you want to register a component that is in memory, use the  [RegisterComponent](1516537-registercomponent.md)  function.

This function does not actually load the code specified by the component resource into memory. Rather, the Component Manager loads the component code the first time an application opens the component. If the code is not in the same file as the component resource or if the Component Manager cannot find the file, the open request fails.

Note that a component registered locally by your application remains registered until your application unregisters it or quits. When an application quits, the Component Manager automatically closes any component connections to that application. In addition, if the application has registered components that reside in its heap space, the Component Manager automatically unregisters those components. A component registered globally by your application remains registered until your application unregisters it or until the computer is shut down.

## See Also

### Registering Components

- [RegisterComponent](1516537-registercomponent.md): Deprecated. Registers a component stored in memory.
- [RegisterComponentResourceFile](1516511-registercomponentresourcefile.md): Deprecated. Registers all component resources in the given resource file.
- [UnregisterComponent](1516645-unregistercomponent.md): Deprecated. Removes a component from the Component Manager’s registration list.
- [RegisterComponentFileRef](1516564-registercomponentfileref.md): Deprecated.
- [RegisterComponentFileRefEntries](1516395-registercomponentfilerefentries.md): Deprecated.
