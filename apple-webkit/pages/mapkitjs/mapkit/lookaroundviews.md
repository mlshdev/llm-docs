> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/lookaroundviews](https://developer.apple.com/documentation/mapkitjs/mapkit/lookaroundviews)

# lookAroundViews

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

A list of all the Look Around objects that are currently active on a page.

## Declaration

```
get lookAroundViews(): AbstractLookAround[];
```

<a id="Discussion"></a>

## Discussion

You must load the appropriate library before accessing the property, otherwise, the property throws an `Error`.

## See Also

### Exploring at street level

- [LookAround](../lookaround.md): A view that allows someone to see a street level view of a place.
- [LookAroundOptions](../lookaroundoptions.md): Options for initializing a LookAround view.
- [LookAroundPreview](../lookaroundpreview.md): A class that renders a preview of a Look Around view.
- [LookAroundPreviewOptions](../lookaroundpreviewoptions.md): Options for initializing a LookAroundPreview object.
- [LookAroundScene](../lookaroundscene.md): Object that represents the current location of the view.
- [CommonLookAroundOptions](../commonlookaroundoptions.md): Options that control the behavior of Look Around views.
- [AbstractLookAround](../abstractlookaround.md): An abstract class that provides a common interface for Look Around views.
