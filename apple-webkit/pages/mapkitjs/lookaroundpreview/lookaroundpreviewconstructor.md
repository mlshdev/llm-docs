> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaroundpreview/lookaroundpreviewconstructor](https://developer.apple.com/documentation/mapkitjs/lookaroundpreview/lookaroundpreviewconstructor)

# new LookAroundPreview(parent, location, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.79+

Creates a Look Around preview you embed on a webpage and initializes it with the constructor options you choose.

## Declaration

```
constructor(
    parent?: HTMLElement,
    location?: CoordinateData | Place | LookAroundScene,
    options?: LookAroundPreviewOptions,
);
```

## Parameters

- `parent`: A DOM element, or the ID of a DOM element, to use as your view’s container.
- `location`: A [Coordinate](../coordinate.md) that describes the location the preview shows.
- `options`: Options that [LookAroundPreviewOptions](../lookaroundpreviewoptions.md) defines for initializing the properties of the preview.

<a id="return-value"></a>

## Return Value

A [LookAroundPreview](../lookaroundpreview.md) instance.

<a id="Discussion"></a>

## Discussion

The Look Around preview’s constructor takes an optional `parent` argument and an optional `options` argument. If you specify the `parent` argument, MapKit JS inserts the preview element into the DOM as a descendant of `parent`.
