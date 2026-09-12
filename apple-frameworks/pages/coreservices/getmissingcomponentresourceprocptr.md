> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/getmissingcomponentresourceprocptr](https://developer.apple.com/documentation/coreservices/getmissingcomponentresourceprocptr)

# GetMissingComponentResourceProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
typedef OSErr (*GetMissingComponentResourceProcPtr)(Component c, OSType resType, SInt16 resID, void *refCon, Handle *resource);
```

## Parameters

- `c`:
- `resType`:
- `resource`:

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/component_manager.md#1668759).

## See Also

### Callbacks

- [ComponentMPWorkFunctionProcPtr](componentmpworkfunctionprocptr.md)
- [ComponentRoutineProcPtr](componentroutineprocptr.md): Defines a pointer to your component callback function, which serves as the main entry point into your component and performs the component’s services.
