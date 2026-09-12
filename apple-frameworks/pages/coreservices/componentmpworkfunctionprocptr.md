> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentmpworkfunctionprocptr](https://developer.apple.com/documentation/coreservices/componentmpworkfunctionprocptr)

# ComponentMPWorkFunctionProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
typedef ComponentResult (*ComponentMPWorkFunctionProcPtr)(void *globalRefCon, ComponentMPWorkFunctionHeaderRecordPtr header);
```

## Parameters

- `header`:

<a id="return_value"></a>

## Return Value

See the description of the `ComponentResult` data type.

## See Also

### Callbacks

- [ComponentRoutineProcPtr](componentroutineprocptr.md): Defines a pointer to your component callback function, which serves as the main entry point into your component and performs the component’s services.
- [GetMissingComponentResourceProcPtr](getmissingcomponentresourceprocptr.md)
