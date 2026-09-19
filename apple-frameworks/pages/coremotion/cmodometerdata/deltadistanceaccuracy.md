> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmodometerdata/deltadistanceaccuracy

# deltaDistanceAccuracy (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The accuracy of the change in distance value.

## Declaration

```swift
var deltaDistanceAccuracy: CLLocationAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

This property measures the accuracy of the [deltaDistance](deltadistance.md) property.

## See Also

### Getting the location accuracy

- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value.
- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.

# deltaDistanceAccuracy (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The accuracy of the change in distance value.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationAccuracy deltaDistanceAccuracy;
```

<a id="Discussion"></a>

## Discussion

This property measures the accuracy of the [deltaDistance](deltadistance.md) property.

## See Also

### Getting the location accuracy

- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value.
- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.
