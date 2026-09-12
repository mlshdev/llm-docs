> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapaddtextwithweight(_:_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapaddtextwithweight(_:_:_:_:))

# LSMMapAddTextWithWeight(\_:\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a training text to the specified category with a weight other than 1.

## Declaration

```swift
func LSMMapAddTextWithWeight(_ mapref: LSMMap, _ textref: LSMText, _ category: LSMCategory, _ weight: Float) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The weight may be negative, but global counts are pinned to `0`. The `textref` is no longer needed after this call.

## See Also

### Starting Training Mode

- [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory(\_:)](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText(\_:\_:\_:)](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

# LSMMapAddTextWithWeight (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a training text to the specified category with a weight other than 1.

## Declaration

```objectivec
OSStatus LSMMapAddTextWithWeight(LSMMapRef mapref, LSMTextRef textref, LSMCategory category, float weight);
```

<a id="Discussion"></a>

## Discussion

The weight may be negative, but global counts are pinned to `0`. The `textref` is no longer needed after this call.

## See Also

### Starting Training Mode

- [LSMMapStartTraining](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.
