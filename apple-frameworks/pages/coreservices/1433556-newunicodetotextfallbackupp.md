> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433556-newunicodetotextfallbackupp](https://developer.apple.com/documentation/coreservices/1433556-newunicodetotextfallbackupp)

# NewUnicodeToTextFallbackUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates a new universal procedure pointer (UPP) to a Unicode-to-textfallback callback.

## Declaration

```objectivec
UnicodeToTextFallbackUPP NewUnicodeToTextFallbackUPP(UnicodeToTextFallbackProcPtr userRoutine);
```

## Parameters

- `userRoutine`: A pointer to your Unicode-to-text fallback callback.

<a id="return_value"></a>

## Return Value

On return, a UPP tothe Unicode-to-text fallback callback.

<a id="discussion"></a>

## Discussion

See the callback [UnicodeToTextFallbackProcPtr](unicodetotextfallbackprocptr.md) formore information.

## See Also

### Working With Universal Procedure Pointers

- [DisposeUnicodeToTextFallbackUPP](1433648-disposeunicodetotextfallbackupp.md): Disposes of a a new universal procedure pointer (UPP)to a Unicode-to-text fallback callback.
- [InvokeUnicodeToTextFallbackUPP](1433599-invokeunicodetotextfallbackupp.md): Calls your Unicode-to-text fallback callback.
