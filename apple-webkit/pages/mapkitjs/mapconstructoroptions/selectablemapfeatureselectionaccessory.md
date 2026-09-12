> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapconstructoroptions/selectablemapfeatureselectionaccessory](https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/selectablemapfeatureselectionaccessory)

# selectableMapFeatureSelectionAccessory

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.78.1+

An accessory that displays place information when someone selects a map feature.

## Declaration

```
selectableMapFeatureSelectionAccessory?: PlaceSelectionAccessory;
```

<a id="Discussion"></a>

## Discussion

This option sets the initial value of [selectableMapFeatureSelectionAccessory](../map/selectablemapfeatureselectionaccessory.md). The default is `null`.

The map shows the accessory when the [selectableMapFeatures](selectablemapfeatures.md) includes at least one [MapFeatureType](../mapfeaturetype.md), and a map feature is selected.
