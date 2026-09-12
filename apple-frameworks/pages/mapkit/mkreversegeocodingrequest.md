> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocodingrequest](https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest)

# MKReverseGeocodingRequest (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that looks up address strings for the provided geographic coordinates.

## Declaration

```swift
class MKReverseGeocodingRequest
```

<a id="Discussion"></a>

## Discussion

Use this class to look up an address by a coordinate you provide. This example shows how to use a [Task](https://developer.apple.com/documentation/swift/task) modifier on a SwiftUI view to reverse geocodes an array of coordinates to the corresponding addresses that MapKit returns in an array of [MKMapItem](mkmapitem.md) objects.

```swift

    struct MyReverseGeocoderView: View {

    let fountainCoordinates = [
        CLLocation(latitude: 39.042617, longitude: -94.587526),
        CLLocation(latitude: 40.774313, longitude: -73.970835),
        CLLocation(latitude: -33.870986, longitude: 151.211786), 
        CLLocation(latitude: 41.875790, longitude: -87.618953),
        ]

        // An array that holds resolved information about the fountains.
        @State var fountains: [MKMapItem] = []

        var body: some View {
        // SwiftUI body views
        }
        .task {
            var fountainMapItems = [MKMapItem]()
            for coordinate in fountainCoordinates {
                if let request = MKReverseGeocodingRequest(location: coordinate) {
                    let mapitems = try? await request.mapItems
                    if let mapitem = mapitems?.first {
                        fountainMapItems.append(mapitem)
                    }
                }
            }
            fountains = fountainMapItems
            // The fountains `MKMapItems` array contains information describing 
            // details about the following places based on the provided coordinates:
            //
            // Mill Creek Park Fountain, Kansas City, Missouri
            // Bethesda Terrace Fountain, Central Park, New York City
            // Archibald Fountain, Sydney, Australia
            // Buckingham Fountain, Chicago, Illinois
        }
    }
```

## Topics

### Creating a request object

- [init(location:)](mkreversegeocodingrequest/init%28location_%29.md): Initializes a new reverse geocoder request object with the provided location.

### Getting the reverse geocoder’s state

- [isLoading](mkreversegeocodingrequest/isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [isCancelled](mkreversegeocodingrequest/iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.
- [location](mkreversegeocodingrequest/location.md): The location provided to the initializer.

### Controlling the reverse geocoder’s operation

- [cancel()](mkreversegeocodingrequest/cancel%28%29.md): A method you call to cancel a reverse geocoding request that’s in progress.

### Getting information about map items and the reverse geocoder’s locale’

- [getMapItems(completionHandler:)](mkreversegeocodingrequest/getmapitems%28completionhandler_%29.md): Returns the map items relevant to the reverse geocoded location.
- [preferredLocale](mkreversegeocodingrequest/preferredlocale.md): A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Geocoding

- [MKGeocodingRequest](mkgeocodingrequest.md): A class that looks up a geographic coordinate using the provided string.

# MKReverseGeocodingRequest (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that looks up address strings for the provided geographic coordinates.

## Declaration

```objectivec
@interface MKReverseGeocodingRequest : NSObject
```

<a id="Discussion"></a>

## Discussion

Use this class to look up an address by a coordinate you provide. This example shows how to use a [Task](https://developer.apple.com/documentation/swift/task) modifier on a SwiftUI view to reverse geocodes an array of coordinates to the corresponding addresses that MapKit returns in an array of [MKMapItem](mkmapitem.md) objects.

```swift

    struct MyReverseGeocoderView: View {

    let fountainCoordinates = [
        CLLocation(latitude: 39.042617, longitude: -94.587526),
        CLLocation(latitude: 40.774313, longitude: -73.970835),
        CLLocation(latitude: -33.870986, longitude: 151.211786), 
        CLLocation(latitude: 41.875790, longitude: -87.618953),
        ]

        // An array that holds resolved information about the fountains.
        @State var fountains: [MKMapItem] = []

        var body: some View {
        // SwiftUI body views
        }
        .task {
            var fountainMapItems = [MKMapItem]()
            for coordinate in fountainCoordinates {
                if let request = MKReverseGeocodingRequest(location: coordinate) {
                    let mapitems = try? await request.mapItems
                    if let mapitem = mapitems?.first {
                        fountainMapItems.append(mapitem)
                    }
                }
            }
            fountains = fountainMapItems
            // The fountains `MKMapItems` array contains information describing 
            // details about the following places based on the provided coordinates:
            //
            // Mill Creek Park Fountain, Kansas City, Missouri
            // Bethesda Terrace Fountain, Central Park, New York City
            // Archibald Fountain, Sydney, Australia
            // Buckingham Fountain, Chicago, Illinois
        }
    }
```

## Topics

### Creating a request object

- [initWithLocation:](mkreversegeocodingrequest/init%28location_%29.md): Initializes a new reverse geocoder request object with the provided location.

### Getting the reverse geocoder’s state

- [loading](mkreversegeocodingrequest/isloading.md): A Boolean value that indicates whether the current reverse geocoding request is in a loading state.
- [cancelled](mkreversegeocodingrequest/iscancelled.md): A Boolean value that indicates whether the current reverse geocoding request is in a cancelled state.
- [location](mkreversegeocodingrequest/location.md): The location provided to the initializer.

### Controlling the reverse geocoder’s operation

- [cancel](mkreversegeocodingrequest/cancel%28%29.md): A method you call to cancel a reverse geocoding request that’s in progress.

### Getting information about map items and the reverse geocoder’s locale’

- [getMapItemsWithCompletionHandler:](mkreversegeocodingrequest/getmapitems%28completionhandler_%29.md): Returns the map items relevant to the reverse geocoded location.
- [preferredLocale](mkreversegeocodingrequest/preferredlocale.md): A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Geocoding

- [MKGeocodingRequest](mkgeocodingrequest.md): A class that looks up a geographic coordinate using the provided string.
