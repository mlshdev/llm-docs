> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultgetcategory(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultgetcategory(_:_:))

# LSMResultGetCategory(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the category of the specified result.

## Declaration

```swift
func LSMResultGetCategory(_ result: LSMResult, _ n: CFIndex) -> LSMCategory
```

## See Also

### Querying Result Information

- [LSMResultGetCount(\_:)](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetScore(\_:\_:)](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.

# LSMResultGetCategory (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the category of the specified result.

## Declaration

```objectivec
LSMCategory LSMResultGetCategory(LSMResultRef result, CFIndex n);
```

## See Also

### Querying Result Information

- [LSMResultGetCount](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetScore](lsmresultgetscore%28____%29.md): Returns the likelihood of the specified result.
