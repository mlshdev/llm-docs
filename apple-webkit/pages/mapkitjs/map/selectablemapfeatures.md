> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/selectablemapfeatures](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatures)

# selectableMapFeatures

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.74.1+

An array of map features that users can select from the map.

## Declaration

```
get selectableMapFeatures(): MapFeatureType[];
set selectableMapFeatures(value: MapFeatureType[]);
```

<a id="Discussion"></a>

## Discussion

This is an array of the selectable map features the map displays from the types available in [MapFeatureType](../mapfeaturetype.md).

## See Also

### Selecting map features

- [selectableMapFeatureSelectionAccessory](selectablemapfeatureselectionaccessory.md): An accessory for displaying place information when a person selects a map feature.
- [annotationForMapFeature](annotationformapfeature.md): The method MapKit JS calls when the framework creates a map feature annotation.
