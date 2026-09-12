> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/loadedlibraries](https://developer.apple.com/documentation/mapkitjs/mapkit/loadedlibraries)

# loadedLibraries

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.75+

A string that describes the list of loaded libraries.

## Declaration

```
get loadedLibraries(): string[] | undefined;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The full bundle of MapKit JS doesn’t implement this property.

## See Also

### Initialization

- [Handling initialization events](../handling-initialization-events.md): Respond to events that trigger when MapKit JS initializes.
- [init()](init.md): Initializes MapKit JS by providing an authorization callback function and optional language.
- [MapKitInitializationOptions](../mapkitinitializationoptions.md): Initialization options for MapKit JS.
- [Libraries](libraries.md): The list of available libraries.
- [load()](load.md): Tells MapKit JS which libraries to load.
