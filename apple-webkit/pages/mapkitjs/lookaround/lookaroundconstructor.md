> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaround/lookaroundconstructor](https://developer.apple.com/documentation/mapkitjs/lookaround/lookaroundconstructor)

# new LookAround(parent, location, options)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Constructor  
**Availability:** MapKit JS 5.79+

Creates a Look Around object you embed on a webpage and initializes it with the constructor options you choose.

## Declaration

```
constructor(
    parent?: HTMLElement,
    location?: CoordinateData | Place | LookAroundScene,
    options?: LookAroundOptions,
);
```

## Parameters

- `parent`: A DOM element, or the ID of a DOM element, to use as your map’s container.
- `location`: A [Coordinate](../coordinate.md) that describes the location the Look Around view shows.
- `options`: Options that [LookAroundOptions](../lookaroundoptions.md) defines for initializing the properties of the preview.

<a id="return-value"></a>

## Return Value

A [LookAround](../lookaround.md) instance.

<a id="Discussion"></a>

## Discussion

The Look Around view’s constructor takes an optional `parent` argument and an optional `options` argument. If you specify the `parent` argument, MapKit JS inserts the preview element into the DOM as a descendant of `parent`.
