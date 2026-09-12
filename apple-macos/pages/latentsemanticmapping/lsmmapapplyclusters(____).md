> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapapplyclusters(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapapplyclusters(_:_:))

# LSMMapApplyClusters(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Groups categories or words (tokens) into the specified sets of clusters.

## Declaration

```swift
func LSMMapApplyClusters(_ mapref: LSMMap, _ clusters: CFArray) -> OSStatus
```

## See Also

### Starting Classification Mode

- [LSMMapCompile(\_:)](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [LSMMapCreateClusters(\_:\_:\_:\_:\_:)](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.

# LSMMapApplyClusters (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Groups categories or words (tokens) into the specified sets of clusters.

## Declaration

```objectivec
OSStatus LSMMapApplyClusters(LSMMapRef mapref, CFArrayRef clusters);
```

## See Also

### Starting Classification Mode

- [LSMMapCompile](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [LSMMapCreateClusters](lsmmapcreateclusters%28__________%29.md): Computes a set of clusters that group similar categories or words.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
