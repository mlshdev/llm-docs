> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516334-disposecomponentroutineupp](https://developer.apple.com/documentation/coreservices/1516334-disposecomponentroutineupp)

# DisposeComponentRoutineUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Disposes of the universal procedure pointer (UPP) to a component routine callback function.

## Declaration

```objectivec
void DisposeComponentRoutineUPP(ComponentRoutineUPP userUPP);
```

## Parameters

- `userUPP`:

<a id="discussion"></a>

## Discussion

See the  [ComponentRoutineProcPtr](componentroutineprocptr.md)  callback for more information.

## See Also

### Creating and Managing Universal Procedure Pointers

- [NewComponentRoutineUPP](1516579-newcomponentroutineupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a component routine callback function.
- [InvokeComponentRoutineUPP](1516654-invokecomponentroutineupp.md): Deprecated. Calls your component routine callback function
- [NewComponentFunctionUPP](1516583-newcomponentfunctionupp.md): Deprecated.
- [DisposeComponentFunctionUPP](1516369-disposecomponentfunctionupp.md): Deprecated.
- [NewComponentMPWorkFunctionUPP](1516448-newcomponentmpworkfunctionupp.md): Deprecated.
- [InvokeComponentMPWorkFunctionUPP](1516356-invokecomponentmpworkfunctionupp.md): Deprecated.
- [DisposeComponentMPWorkFunctionUPP](1516328-disposecomponentmpworkfunctionup.md): Deprecated.
- [NewGetMissingComponentResourceUPP](1516619-newgetmissingcomponentresourceup.md): Deprecated.
- [InvokeGetMissingComponentResourceUPP](1516491-invokegetmissingcomponentresourc.md): Deprecated.
- [DisposeGetMissingComponentResourceUPP](1516414-disposegetmissingcomponentresour.md): Deprecated.
