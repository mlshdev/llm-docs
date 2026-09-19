> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clcirculargeographiccondition/initwithcenter:radius:

# initWithCenter:radius:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates a new circular geographic condition with the center point and radius you provide.

## Declaration

```objectivec
- (instancetype) initWithCenter:(CLLocationCoordinate2D) center radius:(CLLocationDistance) radius;
```

## Parameters

- `center`: The center of the circular geographic condition.
- `radius`: The radius of the circular geographic condition.

<a id="return-value"></a>

## Return Value

Returns an instance of `CLCircularGeographicCondition` with the specified center coordinate and radius.
