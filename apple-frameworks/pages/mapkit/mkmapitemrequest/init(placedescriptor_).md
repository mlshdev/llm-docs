> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemrequest/init(placedescriptor:)](https://developer.apple.com/documentation/mapkit/mkmapitemrequest/init(placedescriptor:))

# init(placeDescriptor:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new map item request with the specified place descriptor

## Declaration

```swift
convenience init(placeDescriptor: PlaceDescriptor)
```

## Parameters

- `placeDescriptor`: The [PlaceDescriptor](../../geotoolbox/placedescriptor.md) the system should use to try to resolve information about desired map location. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized map item object.

<a id="Discussion"></a>

## Discussion

Use this method to create a `MKMapItemRequest` from a [PlaceDescriptor](../../geotoolbox/placedescriptor.md) which you can then attempt to resolve asynchronously as shown here.

```swift
    Task {
        do {
            let request = MKMapItemRequest(placeDescriptor: descriptor)
            mapItem = try await request.mapItem
        } catch {
            handleLoadError(error, for: descriptor)
        }
    }
```
