> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapaddcategory(_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapaddcategory(_:))

# LSMMapAddCategory(\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds another category and returns its category identifier.

## Declaration

```swift
func LSMMapAddCategory(_ mapref: LSMMap) -> LSMCategory
```

## See Also

### Starting Training Mode

- [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText(\_:\_:\_:)](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight(\_:\_:\_:\_:)](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

# LSMMapAddCategory (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds another category and returns its category identifier.

## Declaration

```objectivec
LSMCategory LSMMapAddCategory(LSMMapRef mapref);
```

## See Also

### Starting Training Mode

- [LSMMapStartTraining](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.
