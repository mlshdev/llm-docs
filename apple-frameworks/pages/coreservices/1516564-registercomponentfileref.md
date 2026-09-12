> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516564-registercomponentfileref](https://developer.apple.com/documentation/coreservices/1516564-registercomponentfileref)

# RegisterComponentFileRef

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr RegisterComponentFileRef(const FSRef *ref, SInt16 global);
```

## Parameters

- `ref`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Registering Components

- [RegisterComponent](1516537-registercomponent.md): Deprecated. Registers a component stored in memory.
- [RegisterComponentResource](1516594-registercomponentresource.md): Deprecated. Registers a component stored in a resource file.
- [RegisterComponentResourceFile](1516511-registercomponentresourcefile.md): Deprecated. Registers all component resources in the given resource file.
- [UnregisterComponent](1516645-unregistercomponent.md): Deprecated. Removes a component from the Component Manager’s registration list.
- [RegisterComponentFileRefEntries](1516395-registercomponentfilerefentries.md): Deprecated.
