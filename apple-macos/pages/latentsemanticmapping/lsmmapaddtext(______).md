> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapaddtext(_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapaddtext(_:_:_:))

# LSMMapAddText(\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a training text to the specified category.

## Declaration

```swift
func LSMMapAddText(_ mapref: LSMMap, _ textref: LSMText, _ category: LSMCategory) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The `textref` is no longer needed after this call.

## See Also

### Starting Training Mode

- [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory(\_:)](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddTextWithWeight(\_:\_:\_:\_:)](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

# LSMMapAddText (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a training text to the specified category.

## Declaration

```objectivec
OSStatus LSMMapAddText(LSMMapRef mapref, LSMTextRef textref, LSMCategory category);
```

<a id="Discussion"></a>

## Discussion

The `textref` is no longer needed after this call.

## See Also

### Starting Training Mode

- [LSMMapStartTraining](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddTextWithWeight](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.
