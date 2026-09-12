> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/directions/directionsconstructor](https://developer.apple.com/documentation/mapkitjs/directions/directionsconstructor)

# new Directions(options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.0+

Creates a directions object with options you provide.

## Declaration

```
constructor(options?: DirectionsConstructorOptions);
```

## Parameters

- `options`: An object containing the options for creating a directions object. This parameter is optional.

<a id="Discussion"></a>

## Discussion

To request directions, create an instance of the [Directions](../directions.md) object, then call the [route()](route.md) function with a [DirectionsRequest](../directionsrequest.md) object as the first parameter. The second parameter for [route()](route.md) is a callback function, through which MapKit JS returns the directions response asynchronously.

To return directions in a specific language, set [language](../directionsconstructoroptions/language.md) in [DirectionsConstructorOptions](../directionsconstructoroptions.md) when you create an instance of the [Directions](../directions.md) object.

## See Also

### Creating a directions object

- [DirectionsConstructorOptions](../directionsconstructoroptions.md): Options that you may provide when creating a directions object.
