> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/ckdbqueryfilter/radiusinkilometers](https://developer.apple.com/documentation/cktooljs/ckdbqueryfilter/radiusinkilometers)

# radiusInKilometers

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A radius used to determine whether a field that is a location is inside a circular area.

## Declaration

```
attribute Double? radiusInKilometers;
```

<a id="Discussion"></a>

## Discussion

This property is only used if the record field indicated by `fieldName` has a value that is a `CKDBLocation` type. When used, the center of the circle is `fieldValue` and the radius is distance.
