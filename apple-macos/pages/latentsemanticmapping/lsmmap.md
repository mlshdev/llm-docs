> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmap](https://developer.apple.com/documentation/latentsemanticmapping/lsmmap)

# LSMMap (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

A map between a set of categories and related text.

## Declaration

```swift
class LSMMap
```

<a id="overview"></a>

## Overview

An [LSMMap](lsmmap.md) is a mutable, opaque Core Foundation type that represents a map.

## Topics

### Creating a Map

- [LSMMapCreate(\_:\_:)](lsmmapcreate%28____%29.md): Creates a new Latent Semantic Mapping map.
- [Map Flags](map-flags.md): Options for creating a map.

### Managing a Map’s Properties

- [LSMMapSetProperties(\_:\_:)](lsmmapsetproperties%28____%29.md): Sets a dictionary of properties for the map.
- [LSMMapGetProperties(\_:)](lsmmapgetproperties%28__%29.md): Gets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.

### Starting Training Mode

- [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory(\_:)](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount(\_:)](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords(\_:\_:)](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText(\_:\_:\_:)](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight(\_:\_:\_:\_:)](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

### Starting Classification Mode

- [LSMMapCompile(\_:)](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [LSMMapCreateClusters(\_:\_:\_:\_:\_:)](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters(\_:\_:)](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.

### Loading and Saving a Map

- [LSMMapCreateFromURL(\_:\_:\_:)](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToURL(\_:\_:\_:)](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [LSMMapWriteToStream(\_:\_:\_:\_:)](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.

### Getting the Type Identifier

- [LSMMapGetTypeID()](lsmmapgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping maps.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Text Classification

- [LSMText](lsmtext.md): An input text.
- [LSMResult](lsmresult.md): A result of a lookup in a map.

# LSMMapRef (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A map between a set of categories and related text.

## Declaration

```objectivec
typedef struct __LSMMap * LSMMapRef;
```

<a id="overview"></a>

## Overview

An [LSMMapRef](lsmmap.md) is a mutable, opaque Core Foundation type that represents a map.

## Topics

### Creating a Map

- [LSMMapCreate](lsmmapcreate%28____%29.md): Creates a new Latent Semantic Mapping map.
- [Map Flags](map-flags.md): Options for creating a map.

### Managing a Map’s Properties

- [LSMMapSetProperties](lsmmapsetproperties%28____%29.md): Sets a dictionary of properties for the map.
- [LSMMapGetProperties](lsmmapgetproperties%28__%29.md): Gets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.

### Starting Training Mode

- [LSMMapStartTraining](lsmmapstarttraining%28__%29.md): Puts the map into training mode, preparing it for the addition of more categories or texts.
- [LSMMapAddCategory](lsmmapaddcategory%28__%29.md): Adds another category and returns its category identifier.
- [LSMMapGetCategoryCount](lsmmapgetcategorycount%28__%29.md): Returns the number of categories in the map.
- [LSMMapSetStopWords](lsmmapsetstopwords%28____%29.md): Specifies which words to omit from all classification efforts.
- [LSMMapAddText](lsmmapaddtext%28______%29.md): Adds a training text to the specified category.
- [LSMMapAddTextWithWeight](lsmmapaddtextwithweight%28________%29.md): Adds a training text to the specified category with a weight other than 1.
- [LSMCategory](lsmcategory.md): An integral type that represents a category.

### Starting Classification Mode

- [LSMMapCompile](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [LSMMapCreateClusters](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.

### Loading and Saving a Map

- [LSMMapCreateFromURL](lsmmapcreatefromurl%28______%29.md): Loads a map from the specified file.
- [LSMMapWriteToURL](lsmmapwritetourl%28______%29.md): Compiles the map, if necessary, and stores it into the specified file.
- [LSMMapWriteToStream](lsmmapwritetostream%28________%29.md): Writes information about a map or text to a stream in text form.
- [Storage Flags](storage-flags.md): Options for loading and saving a map to a file.

### Getting the Type Identifier

- [LSMMapGetTypeID](lsmmapgettypeid%28%29.md): Returns the Core Foundation type identifier for Latent Semantic Mapping maps.

## See Also

### Text Classification

- [LSMTextRef](lsmtext.md): An input text.
- [LSMResultRef](lsmresult.md): A result of a lookup in a map.
