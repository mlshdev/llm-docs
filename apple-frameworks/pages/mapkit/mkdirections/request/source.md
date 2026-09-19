> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkdirections/request/source

# source (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The starting point for routing directions.

## Declaration

```swift
var source: MKMapItem? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the setter method `setSource:` to set this property.

## See Also

### Accessing the start and end points

- [destination](destination.md): The end point for routing directions.

# source (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The starting point for routing directions.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) MKMapItem * source;
```

<a id="Discussion"></a>

## Discussion

Use the setter method `setSource:` to set this property.

## See Also

### Accessing the start and end points

- [destination](destination.md): The end point for routing directions.
