> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapcompile(_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapcompile(_:))

# LSMMapCompile(\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.

## Declaration

```swift
func LSMMapCompile(_ mapref: LSMMap) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

This function is computationally expensive.

## See Also

### Starting Classification Mode

- [LSMMapCreateClusters(\_:\_:\_:\_:\_:)](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters(\_:\_:)](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.

# LSMMapCompile (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.

## Declaration

```objectivec
OSStatus LSMMapCompile(LSMMapRef mapref);
```

<a id="Discussion"></a>

## Discussion

This function is computationally expensive.

## See Also

### Starting Classification Mode

- [LSMMapCreateClusters](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.
