> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapcreateclusters(_:_:_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapcreateclusters(_:_:_:_:_:))

# LSMMapCreateClusters(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Computes a set of clusters that group similar categories or words.

## Declaration

```swift
func LSMMapCreateClusters(_ alloc: CFAllocator?, _ mapref: LSMMap, _ subset: CFArray?, _ numClusters: CFIndex, _ flags: CFOptionFlags) -> Unmanaged<CFArray>?
```

<a id="Discussion"></a>

## Discussion

If `subset` is non-`NULL`, this function only performs clustering on the categories or words in `subset`.

## See Also

### Starting Classification Mode

- [LSMMapCompile(\_:)](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters(\_:\_:)](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.

# LSMMapCreateClusters (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Computes a set of clusters that group similar categories or words.

## Declaration

```objectivec
CFArrayRefLSMMapCreateClusters(CFAllocatorRef alloc, LSMMapRef mapref, CFArrayRef subset, CFIndex numClusters, CFOptionFlags flags);
```

<a id="Discussion"></a>

## Discussion

If `subset` is non-`NULL`, this function only performs clustering on the categories or words in `subset`.

## See Also

### Starting Classification Mode

- [LSMMapCompile](lsmmapcompile%28__%29.md): Compiles the map into executable form and puts it into mapping mode, preparing it for the classification of texts.
- [Clustering Flags](clustering-flags.md): Options for creating clusters.
- [LSMMapApplyClusters](lsmmapapplyclusters%28____%29.md): Groups categories or words (tokens) into the specified sets of clusters.
