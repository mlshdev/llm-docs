> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516511-registercomponentresourcefile](https://developer.apple.com/documentation/coreservices/1516511-registercomponentresourcefile)

# RegisterComponentResourceFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Registers all component resources in the given resource file.

## Declaration

```objectivec
SInt32 RegisterComponentResourceFile(SInt16 resRefNum, SInt16 global);
```

## Parameters

- `resRefNum`: The reference number of the resource file containing the components to register.
- `global`: A set of flags that control the scope of the registration of the components in the resource file. See [Register Component Resource flags](1516405-register_component_resource_flag.md) for a description of the flags.

<a id="return_value"></a>

## Return Value

The number of components registered, if all components in the specified resource file are successfully registered. If one or more of the components in the resource file could not be registered, or if the specified file reference number is invalid, a negative function result.

<a id="discussion"></a>

## Discussion

Before a component can be used by an application, the component must be registered with the Component Manager. The Component Manager automatically registers component resources stored in files with file types of `'thng'` that are stored in the Extensions folder. For a description of the format and content of component resources, see “Resources”.

## See Also

### Registering Components

- [RegisterComponent](1516537-registercomponent.md): Deprecated. Registers a component stored in memory.
- [RegisterComponentResource](1516594-registercomponentresource.md): Deprecated. Registers a component stored in a resource file.
- [UnregisterComponent](1516645-unregistercomponent.md): Deprecated. Removes a component from the Component Manager’s registration list.
- [RegisterComponentFileRef](1516564-registercomponentfileref.md): Deprecated.
- [RegisterComponentFileRefEntries](1516395-registercomponentfilerefentries.md): Deprecated.
