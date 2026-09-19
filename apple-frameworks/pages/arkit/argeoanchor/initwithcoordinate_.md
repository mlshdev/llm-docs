> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/argeoanchor/initwithcoordinate:

# initWithCoordinate:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a new location anchor with the given coordinates.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: Lattitude and longitude of the anchor’s geographic location.

<a id="Discussion"></a>

## Discussion

Because this initializer does not take an altitude argument, ARKit sets the anchor’s [altitude](altitude-9kges.md) to ground level.

## See Also

### Creating a Geo Anchor

- [initWithCoordinate:altitude:](initwithcoordinate_altitude_.md): Initializes a location anchor with the given coordinate and altitude.
- [initWithName:coordinate:](initwithname_coordinate_.md): Initializes a named location anchor with the given coordinates.
- [initWithName:coordinate:altitude:](init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.
