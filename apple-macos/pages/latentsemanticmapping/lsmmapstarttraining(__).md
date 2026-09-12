> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapstarttraining(_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapstarttraining(_:))

# LSMMapStartTraining(\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Puts the map into training mode, preparing it for the addition of more categories or texts.

## Declaration

```swift
func LSMMapStartTraining(_ mapref: LSMMap) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

This function is somewhat computationally expensive, as it requires substantial data structure reorganization.

## See Also

### Starting Training Mode

- [LSMMapAddCategory(\_:)](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText(\_:\_:\_:)](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight(\_:\_:\_:\_:)](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

# LSMMapStartTraining (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Puts the map into training mode, preparing it for the addition of more categories or texts.

## Declaration

```objectivec
OSStatus LSMMapStartTraining(LSMMapRef mapref);
```

<a id="Discussion"></a>

## Discussion

This function is somewhat computationally expensive, as it requires substantial data structure reorganization.

## See Also

### Starting Training Mode

- [LSMMapAddCategory](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.
