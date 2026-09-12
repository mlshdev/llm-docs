> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/klsmmapdiscardcounts](https://developer.apple.com/documentation/latentsemanticmapping/klsmmapdiscardcounts)

# kLSMMapDiscardCounts (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS

An option that specifies not to keep counts.

## Declaration

```swift
var kLSMMapDiscardCounts: Int { get }
```

<a id="Discussion"></a>

## Discussion

If you specify this option when loading the map, you must reload the map without this option before calling [LSMMapStartTraining(\_:)](lsmmapstarttraining%28__%29.md).

If you specify this option when storing the map, the stored map can’t be retrained at all. This option can save a lot of memory or disk space.

## See Also

### Constants

- [kLSMMapLoadMutable](klsmmaploadmutable.md): An option that specifies to load the map as mutable in training state.
- [kLSMMapHashText](klsmmaphashtext.md): An option that specifies to transform the text so it’s not human-readable.

# kLSMMapDiscardCounts (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

An option that specifies not to keep counts.

## Declaration

```objectivec
kLSMMapDiscardCounts
```

<a id="Discussion"></a>

## Discussion

If you specify this option when loading the map, you must reload the map without this option before calling [LSMMapStartTraining](lsmmapstarttraining%28__%29.md).

If you specify this option when storing the map, the stored map can’t be retrained at all. This option can save a lot of memory or disk space.

## See Also

### Constants

- [kLSMMapLoadMutable](klsmmaploadmutable.md): An option that specifies to load the map as mutable in training state.
- [kLSMMapHashText](klsmmaphashtext.md): An option that specifies to transform the text so it’s not human-readable.
