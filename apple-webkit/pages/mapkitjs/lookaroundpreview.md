> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaroundpreview](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview)

# LookAroundPreview

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.79+

A class that renders a preview of a Look Around view.

## Declaration

```
class LookAroundPreview extends AbstractLookAround
```

## Mentioned In

- [Loading the latest version of MapKit JS](loading-the-latest-version-of-mapkit-js.md)
- [MapKit JS 5](mapkit-js-5.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  The full bundle of MapKit JS doesn’t implement this class.

Use a `mapkit.LookAroundPreview` to create preview imagery for a specific geographic location on the map.

> **Note**

> Not all places support Look Around.

The following example contains the two elements needed to display a Look Around view on a webpage:

![A screenshot showing a map view with a marker showing New York Public Library in New York, NY, and a smaller Look Around preview framing the library on the top left.](https://developer.apple.com/images/com.apple.mapkitjs/LookAroundPreview-cl-01@2x.png)

The HTML code below implements a webpage that renders a `container` which has both a map and a Look Around preview.

```html
<script
  src="https://cdn.apple-mapkit.com/mk/x/mapkit.core.js"
  crossorigin async
  data-callback="initMapKit"
  data-token="YOUR TOKEN HERE"
  data-libraries="map,annotations,look-around,services"></script>
<style>
#map {
  width: 100%;
  height: 100%;
}
#container {
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 20px;
  overflow: hidden;
  width: 200px;
  height: 150px;
}
</style>

<main>
  <div id="map"></div>
  <div id="container"></div>
</main>
```

The JavaScript listing below implements a MapKitJS map object that the web page displays inside the `<div id="map">` element of the page, with a Look Around preview displays inside the `<div id="container">` element. The code centers the map on the area near the New York Public Library in New York City using a PlaceID. The Look Around preview on the map shows a view of The New York Public Library building. For more information on obtaining a PlaceID for a specific location. For more information on Place IDs, see [Identifying unique locations with Place IDs](https://developer.apple.com/maps/place-id-lookup/).

```javascript
async function initializeMapKitJS() {
  if (!window.mapkit || window.mapkit.loadedLibraries.length === 0) {
    await new Promise(res => window.initMapKit = res)
    delete window.initMapKit
  }
}

(async () => {
  await initializeMapKitJS();
  // Look Around view code

  const placeLookup = new mapkit.PlaceLookup();
  const place = await new Promise(
      resolve => placeLookup.getPlace(
        // The New York Public Library, 42nd St & 5th Ave,New York, NY
        "I88F02FEA4499C61D",
        (error, result) => resolve(result)
      )
  );

  const lookAround = new mapkit.LookAroundPreview(
      document.getElementById("container"),
      place
  );

  const map = new mapkit.Map("map", {
    center: place.coordinate,
    cameraDistance: 7000,
    showsPointsOfInterest: false,
    annotations: [
      new mapkit.PlaceAnnotation(place, {
        selected: true
      })
    ]
  });

})()
```

<a id="Handling-Look-Around-loading-states"></a>

## Handling Look Around loading states

LookAroundPreview object dispatches the following events:

- `load`: A DOM `Event`. The Look Around view loaded.
- `error`: A [LookAroundErrorEvent](lookarounderrorevent.md). The Look Around view encountered an error, for example, in an unsupported browser, or a location with no Look Around imagery.
- `readystatechange`: A DOM `Event`. The ready state changed.
- `open-dialog`:  A DOM `Event`. The Look Around view is about to expand.
- `leave-dialog`:  A DOM `Event`. The Look Around view is about to contract.
- `close`:  A DOM `Event`. A person interacted with the close control.

## Topics

### Creating a Look Around preview

- [LookAroundPreview()](lookaroundpreview/lookaroundpreviewconstructor.md): Creates a Look Around preview you embed on a webpage and initializes it with the constructor options you choose.

### Controlling the interactions with a Look Around view

- [isNavigationEnabled](abstractlookaround/isnavigationenabled.md): A Boolean value that indicates whether someone can navigate inside the Look Around view.
- [isScrollEnabled](abstractlookaround/isscrollenabled.md): A Boolean value that indicates whether someone can scroll the Look Around view.
- [isZoomEnabled](abstractlookaround/iszoomenabled.md): A Boolean value that indicates whether someone can zoom the Look Around view.

### Controlling additional information the Look Around view displays

- [showsPointsOfInterest](abstractlookaround/showspointsofinterest.md): A Boolean value that indicates whether the Look Around view shows points of interest (POIs).
- [showsRoadLabels](abstractlookaround/showsroadlabels.md): A Boolean value that indicates whether the Look Around view shows road labels.

### Positioning a badge

- [badgePosition](lookaroundpreview/badgeposition.md): A value you set to specify the position of a badge on the Look Around preview.
- [LookAroundBadgePosition](lookaroundbadgeposition.md): Values that control the positions of a badge on a Look Around preview.

### Controlling the LookAround dialog

- [openDialog](abstractlookaround/opendialog.md): Opens the Look Around view in a dialog.

### Getting information about the Look Around object and its state

- [element](abstractlookaround/element.md): A property that represents the Look Around view’s containing Document Object Model (DOM) element.
- [scene](abstractlookaround/scene.md): The Look Around scene the framework is displaying.
- [padding](abstractlookaround/padding.md): The padding options for the Look Around view.
- [readyState](abstractlookaround/readystate.md): A value that represents the loading state of the Look Around object.
- [LookAroundReadyState](lookaroundreadystate.md): Values that indicate the state of the Look Around object in the browser.

### Closing and releasing a Look Around view

- [destroy()](abstractlookaround/destroy.md): Releases the Look Around view and its resources from memory.

### Static properties

- [BadgePositions](lookaroundpreview/badgepositions.md): A static property that allows you to access the Look Around ready state enumeration.
- [ReadyStates](lookaroundpreview/readystates.md): A static property that allows you to access to access the look around ready state enumeration.

### Instance Methods

- [destroy()](lookaroundpreview/destroy.md): Destroys the Look Around view and releases its resources.

## Relationships

### Inherits From

- [AbstractLookAround](abstractlookaround.md)

## See Also

### Exploring at street level

- [LookAround](lookaround.md): A view that allows someone to see a street level view of a place.
- [LookAroundOptions](lookaroundoptions.md): Options for initializing a LookAround view.
- [LookAroundPreviewOptions](lookaroundpreviewoptions.md): Options for initializing a LookAroundPreview object.
- [LookAroundScene](lookaroundscene.md): Object that represents the current location of the view.
- [CommonLookAroundOptions](commonlookaroundoptions.md): Options that control the behavior of Look Around views.
- [AbstractLookAround](abstractlookaround.md): An abstract class that provides a common interface for Look Around views.
- [lookAroundViews](mapkit/lookaroundviews.md): A list of all the Look Around objects that are currently active on a page.
