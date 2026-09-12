> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1473043-invokeselectorfunctionupp](https://developer.apple.com/documentation/coreservices/1473043-invokeselectorfunctionupp)

# InvokeSelectorFunctionUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Invokes a selector callback function.

## Declaration

```objectivec
OSErr InvokeSelectorFunctionUPP(OSType selector, SInt32 *response, SelectorFunctionUPP userUPP);
```

## Parameters

- `selector`: The selector code for the function you want to invoke. You can provide any of the four-character sequences defined in [Constants](carbon_core/gestalt_manager.md#1667886).
- `response`: On output, the value associated with the selector code.
- `userUPP`: A universal procedure pointer to the selector callback function you want to invoke.

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

You should not need to call this function, as the operating system invokes your selector callback for you.

## See Also

### Working With Universal Procedure Pointers for Gestalt Selector Functions

- [NewSelectorFunctionUPP](1472304-newselectorfunctionupp.md): Deprecated. Creates a universal procedure pointer (UPP) to a selector callback function.
- [DisposeSelectorFunctionUPP](1472149-disposeselectorfunctionupp.md): Deprecated. Disposes of a universal procedure pointer to a selector callback function.
