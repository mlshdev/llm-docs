> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapgetproperties(_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapgetproperties(_:))

# LSMMapGetProperties(\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Gets a dictionary of properties for the map.

## Declaration

```swift
func LSMMapGetProperties(_ mapref: LSMMap) -> Unmanaged<CFDictionary>
```

<a id="Discussion"></a>

## Discussion

Latent Semantic Mapping retains ownership of this dictionary; don’t release it.

## See Also

### Managing a Map’s Properties

- [LSMMapSetProperties(\_:\_:)](lsmmapsetproperties%28____%29.md): Sets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.

# LSMMapGetProperties (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Gets a dictionary of properties for the map.

## Declaration

```objectivec
CFDictionaryRefLSMMapGetProperties(LSMMapRef mapref);
```

<a id="Discussion"></a>

## Discussion

Latent Semantic Mapping retains ownership of this dictionary; don’t release it.

## See Also

### Managing a Map’s Properties

- [LSMMapSetProperties](lsmmapsetproperties%28____%29.md): Sets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.
