> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/load](https://developer.apple.com/documentation/mapkitjs/mapkit/load)

# load(libraryNames)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.75+

Tells MapKit JS which libraries to load.

## Declaration

```
load?(libraryNames: string | string[]): Promise<MapKit>;
```

## Parameters

- `libraryNames`: The libraries to load.

<a id="return-value"></a>

## Return Value

A promise that resolves when the libraries finish loading. The promise resolves to the [mapkit](../mapkit.md) namespace object.

## Mentioned In

- [Loading the latest version of MapKit JS](../loading-the-latest-version-of-mapkit-js.md)
- [MapKit JS 6](../mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  The full bundle of MapKit JS doesn’t implement this method.

This method returns a `Promise` that resolves when the requested libraries finish loading. The promise resolves to the [mapkit](../mapkit.md) namespace object, allowing you to destructure the interfaces you need directly from the result:

```javascript
const { Map } = await mapkit.load(["map"]);
```

MapKit JS also dispatches either a `load` event or a `load-error` event when the libraries finish loading. The event ([MapKitLibraryLoadEvent](../mapkitlibraryloadevent.md)) contains the array of library names that you pass to this method. If the libraries fail to load, the returned promise rejects.

Calling `load()` with libraries that are already loaded is a no-op; the promise resolves immediately.

## See Also

### Initialization

- [Handling initialization events](../handling-initialization-events.md): Respond to events that trigger when MapKit JS initializes.
- [init()](init.md): Initializes MapKit JS by providing an authorization callback function and optional language.
- [MapKitInitializationOptions](../mapkitinitializationoptions.md): Initialization options for MapKit JS.
- [Libraries](libraries.md): The list of available libraries.
- [loadedLibraries](loadedlibraries.md): A string that describes the list of loaded libraries.
