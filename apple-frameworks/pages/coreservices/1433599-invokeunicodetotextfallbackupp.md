> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433599-invokeunicodetotextfallbackupp](https://developer.apple.com/documentation/coreservices/1433599-invokeunicodetotextfallbackupp)

# InvokeUnicodeToTextFallbackUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Calls your Unicode-to-text fallback callback.

## Declaration

```objectivec
OSStatus InvokeUnicodeToTextFallbackUPP(UniChar *iSrcUniStr, ByteCount iSrcUniStrLen, ByteCount *oSrcConvLen, TextPtr oDestStr, ByteCount iDestStrLen, ByteCount *oDestConvLen, LogicalAddress iInfoPtr, ConstUnicodeMappingPtr iUnicodeMappingPtr, UnicodeToTextFallbackUPP userUPP);
```

<a id="discussion"></a>

## Discussion

You should not need to use the function `InvokeUnicodeToTextFallbackUPP`,as the system calls your Unicode-to-text fallback callback for you.See the callback [UnicodeToTextFallbackProcPtr](unicodetotextfallbackprocptr.md) formore information.

## See Also

### Working With Universal Procedure Pointers

- [NewUnicodeToTextFallbackUPP](1433556-newunicodetotextfallbackupp.md): Creates a new universal procedure pointer (UPP) to a Unicode-to-textfallback callback.
- [DisposeUnicodeToTextFallbackUPP](1433648-disposeunicodetotextfallbackupp.md): Disposes of a a new universal procedure pointer (UPP)to a Unicode-to-text fallback callback.
