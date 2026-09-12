> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/handling-initialization-events](https://developer.apple.com/documentation/mapkitjs/handling-initialization-events)

# Handling initialization events

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** API Collection

Respond to events that trigger when MapKit JS initializes.

<a id="overview"></a>

## Overview

Unless you wish to explicitly control initialization timing in JavaScript, use `data-token` instead of handling initialization events directly. See [Loading the latest version of MapKit JS](loading-the-latest-version-of-mapkit-js.md) for more information.

The `mapkit` object emits two events to indicate the success or failure of a configuration operation. The initialization process configures MapKit JS. In addition, there are two events indicate the success or failure of a batch of library loads.

| Event | Interface | Summary |
| --- | --- | --- |
| `configuration-change` | [MapKitConfigurationChangeEvent](mapkitconfigurationchangeevent.md) | The MapKit configuration changes due to either a successful initialization or a refresh. |
| `error` | [MapKitConfigurationErrorEvent](mapkitconfigurationerrorevent.md) | MapKit fails to initialize. |
| `load` | [MapKitLibraryLoadEvent](mapkitlibraryloadevent.md) | A batch of libraries loads. |
| `load-error` | [MapKitLibraryLoadEvent](mapkitlibraryloadevent.md) | A batch of libraries fails to load. |

MapKit JS invokes these events asynchronously upon success or failure of the initialization request. The example below shows a common use case:

```javascript
mapkit.init({ authorizationCallback: function(done) { done("your-token"); }, ... });
mapkit.addEventListener("configuration-change", function(event) {
    switch (event.status) {
    case "Initialized":
        // MapKit JS initializes and configures.
        break;
    case "Refreshed":
        // The MapKit JS configuration updates.
        break;
    }
});

```

## Topics

### Events

- [MapKitConfigurationChangeEvent](mapkitconfigurationchangeevent.md): An event that represents a configuration change.
- [MapKitConfigurationErrorEvent](mapkitconfigurationerrorevent.md): An event that represents a configuration error.
- [MapKitLibraryLoadEvent](mapkitlibraryloadevent.md): An event that occurs when the MapKit JS library is loaded or fails loading.

### Initialization and error status

- [ConfigurationChangeStatus](configurationchangestatus.md): Values that represent the status of a configuration change.
- [ConfigurationErrorStatus](configurationerrorstatus.md): A value that represents the status of a configuration error.

## See Also

### Initialization

- [init()](mapkit/init.md): Initializes MapKit JS by providing an authorization callback function and optional language.
- [MapKitInitializationOptions](mapkitinitializationoptions.md): Initialization options for MapKit JS.
- [Libraries](mapkit/libraries.md): The list of available libraries.
- [loadedLibraries](mapkit/loadedlibraries.md): A string that describes the list of loaded libraries.
- [load()](mapkit/load.md): Tells MapKit JS which libraries to load.
