> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultcopytoken(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultcopytoken(_:_:))

# LSMResultCopyToken(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the token for the n-th best (zero-based) result.

## Declaration

```swift
func LSMResultCopyToken(_ result: LSMResult, _ n: CFIndex) -> Unmanaged<CFData>?
```

## See Also

### Getting a Result

- [LSMResultCopyTokenCluster(\_:\_:)](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord(\_:\_:)](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.
- [LSMResultCopyWordCluster(\_:\_:)](lsmresultcopywordcluster%28____%29.md): Returns the cluster of words for the n-th best (zero-based) result.

# LSMResultCopyToken (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the token for the n-th best (zero-based) result.

## Declaration

```objectivec
CFDataRefLSMResultCopyToken(LSMResultRef result, CFIndex n);
```

## See Also

### Getting a Result

- [LSMResultCopyTokenCluster](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.
- [LSMResultCopyWordCluster](lsmresultcopywordcluster%28____%29.md): Returns the cluster of words for the n-th best (zero-based) result.
