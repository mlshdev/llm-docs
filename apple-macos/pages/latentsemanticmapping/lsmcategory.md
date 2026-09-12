> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmcategory](https://developer.apple.com/documentation/latentsemanticmapping/lsmcategory)

# LSMCategory (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

An integral type that represents a category.

## Declaration

```swift
typealias LSMCategory = UInt32
```

## See Also

### Starting Training Mode

- [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory(\_:)](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText(\_:\_:\_:)](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight(\_:\_:\_:\_:)](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.

# LSMCategory (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

An integral type that represents a category.

## Declaration

```objectivec
typedef uint32_t LSMCategory;
```

## See Also

### Starting Training Mode

- [LSMMapStartTraining](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
