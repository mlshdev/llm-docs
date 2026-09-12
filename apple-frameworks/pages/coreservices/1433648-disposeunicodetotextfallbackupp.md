> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433648-disposeunicodetotextfallbackupp](https://developer.apple.com/documentation/coreservices/1433648-disposeunicodetotextfallbackupp)

# DisposeUnicodeToTextFallbackUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes of a a new universal procedure pointer (UPP)to a Unicode-to-text fallback callback.

## Declaration

```objectivec
void DisposeUnicodeToTextFallbackUPP(UnicodeToTextFallbackUPP userUPP);
```

## Parameters

- `userUPP`: The universal procedure pointer.

<a id="discussion"></a>

## Discussion

See the callback [UnicodeToTextFallbackProcPtr](unicodetotextfallbackprocptr.md) formore information.

## See Also

### Working With Universal Procedure Pointers

- [NewUnicodeToTextFallbackUPP](1433556-newunicodetotextfallbackupp.md): Creates a new universal procedure pointer (UPP) to a Unicode-to-textfallback callback.
- [InvokeUnicodeToTextFallbackUPP](1433599-invokeunicodetotextfallbackupp.md): Calls your Unicode-to-text fallback callback.
