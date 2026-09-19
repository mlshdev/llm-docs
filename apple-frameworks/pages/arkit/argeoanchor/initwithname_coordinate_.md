> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/argeoanchor/initwithname:coordinate:

# initWithName:coordinate:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Initializes a named location anchor with the given coordinates.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name coordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `name`: Name of the anchor.
- `coordinate`: Lattitude and longitude of the anchor’s geographic location.

<a id="Discussion"></a>

## Discussion

Because this initializer does not take an altitude argument, ARKit will determine (and set) the anchor’s [altitude](altitude-9kges.md) at runtime.

## See Also

### Creating a Geo Anchor

- [initWithCoordinate:](initwithcoordinate_.md): Initializes a new location anchor with the given coordinates.
- [initWithCoordinate:altitude:](initwithcoordinate_altitude_.md): Initializes a location anchor with the given coordinate and altitude.
- [initWithName:coordinate:altitude:](init%28name_coordinate_altitude_%29-8sbh4.md): Initializes a named location anchor with the given coordinates and altitude.
