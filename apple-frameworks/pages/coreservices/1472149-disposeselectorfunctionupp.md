> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472149-disposeselectorfunctionupp](https://developer.apple.com/documentation/coreservices/1472149-disposeselectorfunctionupp)

# DisposeSelectorFunctionUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Disposes of a universal procedure pointer to a selector callback function.

## Declaration

```objectivec
void DisposeSelectorFunctionUPP(SelectorFunctionUPP userUPP);
```

## Parameters

- `userUPP`: The universal procedure pointer you want to dispose of.

## See Also

### Working With Universal Procedure Pointers for Gestalt Selector Functions

- [NewSelectorFunctionUPP](1472304-newselectorfunctionupp.md): Deprecated. Creates a universal procedure pointer (UPP) to a selector callback function.
- [InvokeSelectorFunctionUPP](1473043-invokeselectorfunctionupp.md): Deprecated. Invokes a selector callback function.
