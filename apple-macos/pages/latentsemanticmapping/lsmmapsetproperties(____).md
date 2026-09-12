> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmmapsetproperties(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmmapsetproperties(_:_:))

# LSMMapSetProperties(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Sets a dictionary of properties for the map.

## Declaration

```swift
func LSMMapSetProperties(_ mapref: LSMMap, _ properties: CFDictionary)
```

<a id="Discussion"></a>

## Discussion

Latent Semantic Mapping makes its own copy of the properties, so you don’t need to retain them past this call.

## See Also

### Managing a Map’s Properties

- [LSMMapGetProperties(\_:)](lsmmapgetproperties%28__%29.md): Gets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.

# LSMMapSetProperties (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Sets a dictionary of properties for the map.

## Declaration

```objectivec
void LSMMapSetProperties(LSMMapRef mapref, CFDictionaryRef properties);
```

<a id="Discussion"></a>

## Discussion

Latent Semantic Mapping makes its own copy of the properties, so you don’t need to retain them past this call.

## See Also

### Managing a Map’s Properties

- [LSMMapGetProperties](lsmmapgetproperties%28__%29.md): Gets a dictionary of properties for the map.
- [Map Properties](map-properties.md): Special properties that determine a map’s behavior.
