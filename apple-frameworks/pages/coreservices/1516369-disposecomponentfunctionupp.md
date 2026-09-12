> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1516369-disposecomponentfunctionupp](https://developer.apple.com/documentation/coreservices/1516369-disposecomponentfunctionupp)

# DisposeComponentFunctionUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
void DisposeComponentFunctionUPP(ComponentFunctionUPP userUPP);
```

## Parameters

- `userUPP`:

## See Also

### Creating and Managing Universal Procedure Pointers

- [NewComponentRoutineUPP](1516579-newcomponentroutineupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to a component routine callback function.
- [InvokeComponentRoutineUPP](1516654-invokecomponentroutineupp.md): Deprecated. Calls your component routine callback function
- [DisposeComponentRoutineUPP](1516334-disposecomponentroutineupp.md): Deprecated. Disposes of the universal procedure pointer (UPP) to a component routine callback function.
- [NewComponentFunctionUPP](1516583-newcomponentfunctionupp.md): Deprecated.
- [NewComponentMPWorkFunctionUPP](1516448-newcomponentmpworkfunctionupp.md): Deprecated.
- [InvokeComponentMPWorkFunctionUPP](1516356-invokecomponentmpworkfunctionupp.md): Deprecated.
- [DisposeComponentMPWorkFunctionUPP](1516328-disposecomponentmpworkfunctionup.md): Deprecated.
- [NewGetMissingComponentResourceUPP](1516619-newgetmissingcomponentresourceup.md): Deprecated.
- [InvokeGetMissingComponentResourceUPP](1516491-invokegetmissingcomponentresourc.md): Deprecated.
- [DisposeGetMissingComponentResourceUPP](1516414-disposegetmissingcomponentresour.md): Deprecated.
