> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirectionstransporttype/cycling](https://developer.apple.com/documentation/mapkit/mkdirectionstransporttype/cycling)

# cycling (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Directions suitable for use while cycling.

## Declaration

```swift
static var cycling: MKDirectionsTransportType { get }
```

<a id="Discussion"></a>

## Discussion

Use this transportation type to request cycling directions between locations.

The following example shows a task that requests directions between two locations.

```swift
  // Bethesda Terrace in Central Park, New York, NY, United States
  let origin = MKMapItem(location: .init(latitude: 40.77396, longitude: -73.97097), address: nil)

  // Grand Central Terminal, New York, NY, United States
  let destination = MKMapItem(location: .init(latitude: 40.7528, longitude: -73.97715), address: nil)

  Task {
      let request = MKDirections.Request()
      request.transportType = .cycling
      request.source = origin
      request.destination = destination
      directions = try? await MKDirections(request: request).calculate()
  }
```

## See Also

### Transport types

- [any](any.md): Directions suitable for any transportation option.
- [automobile](automobile.md): Directions suitable for use while driving.
- [transit](transit.md): Directions suitable for public transportation.
- [walking](walking.md): Directions suitable for a pedestrian.

# MKDirectionsTransportTypeCycling (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Directions suitable for use while cycling.

## Declaration

```objectivec
MKDirectionsTransportTypeCycling
```

<a id="Discussion"></a>

## Discussion

Use this transportation type to request cycling directions between locations.

The following example shows a task that requests directions between two locations.

```swift
  // Bethesda Terrace in Central Park, New York, NY, United States
  let origin = MKMapItem(location: .init(latitude: 40.77396, longitude: -73.97097), address: nil)

  // Grand Central Terminal, New York, NY, United States
  let destination = MKMapItem(location: .init(latitude: 40.7528, longitude: -73.97715), address: nil)

  Task {
      let request = MKDirections.Request()
      request.transportType = .cycling
      request.source = origin
      request.destination = destination
      directions = try? await MKDirections(request: request).calculate()
  }
```

## See Also

### Transport types

- [MKDirectionsTransportTypeAny](any.md): Directions suitable for any transportation option.
- [MKDirectionsTransportTypeAutomobile](automobile.md): Directions suitable for use while driving.
- [MKDirectionsTransportTypeTransit](transit.md): Directions suitable for public transportation.
- [MKDirectionsTransportTypeWalking](walking.md): Directions suitable for a pedestrian.
