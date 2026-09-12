> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/padding](https://developer.apple.com/documentation/mapkitjs/padding)

# Padding

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+

The values that define content padding within the map view frame.

## Declaration

```
class Padding implements PaddingData
```

<a id="overview"></a>

## Overview

Use padding to define edge insets on the map. MapKit JS then uses these insets when it positions items on the map, such as the map controls or annotations. For example, if you want to add your own control on top of the map and ensure that the map doesn’t position annotations underneath it, you can add padding to the map and then position your control within the padded area.

You can use a [Padding](padding.md) object when setting the map’s [padding](map/padding.md) property or as an option of [showItems()](map/showitems.md). Positive values add padding to the inside edges of the map. MapKit JS clips negative values to `0`.

## Topics

### Creating padding

- [Padding()](padding/paddingconstructor.md): Creates a padding object with no inset margins.
- [Padding()](padding/paddingconstructor1.md): Creates a padding object and initializes its values with the provided object literal.
- [Padding()](padding/paddingconstructor2.md): Creates a padding object and initializes its top inset margin with the provided value.
- [Padding()](padding/paddingconstructor3.md): Creates a padding object and initializes it with the provided top and right side values.
- [Padding()](padding/paddingconstructor4.md): Creates a padding object and initializes it with the provided top, right, and bottom values.
- [Padding()](padding/paddingconstructor5.md): Creates a padding object and initializes it with the provided values.

### Controlling the map’s padding

- [bottom](padding/bottom.md): The amount of padding, in CSS pixels, to inset the map from the bottom edge.
- [left](padding/left.md): The amount of padding, in CSS pixels, to inset the map from the left edge.
- [right](padding/right.md): The amount of padding, in CSS pixels, to inset the map from the right edge.
- [top](padding/top.md): The amount of padding, in CSS pixels, to inset the map from the top edge.

### Variables

- [Zero](padding/zero.md): An object that represents zero padding values.

### Instance Methods

- [copy()](padding/copy.md): Returns a copy of the padding object.
- [equals()](padding/equals.md): Compares whether two padding values are equal.
- [toString()](padding/tostring.md): Returns a string representation of the padding object.

## Relationships

### Conforms To

- [PaddingData](paddingdata.md)

## See Also

### Map view customization

- [PaddingData](paddingdata.md): A plain object representation of edge inset values.
