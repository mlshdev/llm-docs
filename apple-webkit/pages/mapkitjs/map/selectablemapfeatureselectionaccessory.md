> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/map/selectablemapfeatureselectionaccessory](https://developer.apple.com/documentation/mapkitjs/map/selectablemapfeatureselectionaccessory)

# selectableMapFeatureSelectionAccessory

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.78.1+

An accessory for displaying place information when a person selects a map feature.

## Declaration

```
get selectableMapFeatureSelectionAccessory(): PlaceSelectionAccessory | null;
set selectableMapFeatureSelectionAccessory(
    value: PlaceSelectionAccessory | null,
);
```

## See Also

### Selecting map features

- [selectableMapFeatures](selectablemapfeatures.md): An array of map features that users can select from the map.
- [annotationForMapFeature](annotationformapfeature.md): The method MapKit JS calls when the framework creates a map feature annotation.
