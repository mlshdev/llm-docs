> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultgetcount(_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultgetcount(_:))

# LSMResultGetCount(\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the number of results.

## Declaration

```swift
func LSMResultGetCount(_ result: LSMResult) -> CFIndex
```

## See Also

### Querying Result Information

- [LSMResultGetCategory(\_:\_:)](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.
- [LSMResultGetScore(\_:\_:)](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.

# LSMResultGetCount (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the number of results.

## Declaration

```objectivec
CFIndex LSMResultGetCount(LSMResultRef result);
```

## See Also

### Querying Result Information

- [LSMResultGetCategory](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.
- [LSMResultGetScore](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.
