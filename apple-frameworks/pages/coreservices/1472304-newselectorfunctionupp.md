> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472304-newselectorfunctionupp](https://developer.apple.com/documentation/coreservices/1472304-newselectorfunctionupp)

# NewSelectorFunctionUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a universal procedure pointer (UPP) to a selector callback function.

## Declaration

```objectivec
SelectorFunctionUPP NewSelectorFunctionUPP(SelectorFunctionProcPtr userRoutine);
```

## Parameters

- `userRoutine`: The address of the selector callback function.

<a id="return_value"></a>

## Return Value

On return, a universal procedure pointer to the selector callback function. See the description of the `SelectorFunctionUPP` data type.

<a id="discussion"></a>

## Discussion

You use the `NewSelectorFunctionUPP` function to create a UPP to pass to the `NewGestalt` or `ReplaceGestalt` functions.

## See Also

### Working With Universal Procedure Pointers for Gestalt Selector Functions

- [DisposeSelectorFunctionUPP](1472149-disposeselectorfunctionupp.md): Deprecated. Disposes of a universal procedure pointer to a selector callback function.
- [InvokeSelectorFunctionUPP](1473043-invokeselectorfunctionupp.md): Deprecated. Invokes a selector callback function.
