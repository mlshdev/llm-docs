> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultcopywordcluster(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultcopywordcluster(_:_:))

# LSMResultCopyWordCluster(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the cluster of words for the n-th best (zero-based) result.

## Declaration

```swift
func LSMResultCopyWordCluster(_ result: LSMResult, _ n: CFIndex) -> Unmanaged<CFArray>?
```

## See Also

### Getting a Result

- [LSMResultCopyToken(\_:\_:)](lsmresultcopytoken%28____%29.md): Returns the token for the n-th best (zero-based) result.
- [LSMResultCopyTokenCluster(\_:\_:)](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord(\_:\_:)](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.

# LSMResultCopyWordCluster (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the cluster of words for the n-th best (zero-based) result.

## Declaration

```objectivec
CFArrayRefLSMResultCopyWordCluster(LSMResultRef result, CFIndex n);
```

## See Also

### Getting a Result

- [LSMResultCopyToken](lsmresultcopytoken%28____%29.md): Returns the token for the n-th best (zero-based) result.
- [LSMResultCopyTokenCluster](lsmresultcopytokencluster%28____%29.md): Returns the cluster of tokens for the n-th best (zero-based) result.
- [LSMResultCopyWord](lsmresultcopyword%28____%29.md): Returns the word for the n-th best (zero-based) result.
