> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemrequest/init(mapitemidentifier:)](https://developer.apple.com/documentation/mapkit/mkmapitemrequest/init(mapitemidentifier:))

# init(mapItemIdentifier:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create a request with a map item identifier.

## Declaration

```swift
init(mapItemIdentifier identifier: MKMapItem.Identifier)
```

## Parameters

- `identifier`: The identifier to use for the request.

## See Also

### Creating a request

- [init(feature:)](init%28feature_%29.md): Creates a new map item request with the specified map feature.
- [init(mapFeatureAnnotation:)](init%28mapfeatureannotation_%29.md): Creates a new map item request with the specified feature annotation.

# initWithMapItemIdentifier: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create a request with a map item identifier.

## Declaration

```objectivec
- (instancetype) initWithMapItemIdentifier:(MKMapItemIdentifier *) identifier;
```

## Parameters

- `identifier`: The identifier to use for the request.

## See Also

### Creating a request

- [initWithMapFeatureAnnotation:](init%28mapfeatureannotation_%29.md): Creates a new map item request with the specified feature annotation.
