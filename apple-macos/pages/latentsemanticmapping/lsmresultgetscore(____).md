> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmresultgetscore(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmresultgetscore(_:_:))

# LSMResultGetScore(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the likelihood of the specified result.

## Declaration

```swift
func LSMResultGetScore(_ result: LSMResult, _ n: CFIndex) -> Float
```

<a id="Discussion"></a>

## Discussion

A [nan](../kernel/1557310-nan.md) score typically indicates that the category doesn’t contain any token.

## See Also

### Querying Result Information

- [LSMResultGetCount(\_:)](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetCategory(\_:\_:)](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.

# LSMResultGetScore (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Returns the likelihood of the specified result.

## Declaration

```objectivec
float LSMResultGetScore(LSMResultRef result, CFIndex n);
```

<a id="Discussion"></a>

## Discussion

A [nan](../kernel/1557310-nan.md) score typically indicates that the category doesn’t contain any token.

## See Also

### Querying Result Information

- [LSMResultGetCount](lsmresultgetcount%28__%29.md): Returns the number of results.
- [LSMResultGetCategory](lsmresultgetcategory%28____%29.md): Returns the category of the specified result.
