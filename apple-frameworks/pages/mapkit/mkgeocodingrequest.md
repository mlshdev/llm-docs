> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest)

# MKGeocodingRequest (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that looks up a geographic coordinate using the provided string.

## Declaration

```swift
class MKGeocodingRequest
```

<a id="Discussion"></a>

## Discussion

Use this class to look up the coordinate for an address string you provide, for example if you want to display the location in a map. This example shows how to use a [Task](https://developer.apple.com/documentation/swift/task) modifier on a SwiftUI view to geocode an array of street addresses to the corresponding coordinates that MapKit returns in an array of [MKMapItem](mkmapitem.md) objects.

```swift

struct MyGeocoderView: View {

    let addressVisits = [
        "Bethesda Terrace, Central Park \n New York, NY 10023 \n United States",
        "Mill Creek Park Fountain, \n Kansas City, Missouri, \n United States",
        "Archibald Fountain, 110 Elizabeth St \n Sydney NSW 2000 \n Australia"
    ]
    @State var addressVisitMapItems: [MKMapItem] = []
    var body: some View {
    // SwiftUI body views
    }
    .onAppear {
        Task {
            var addressMapItems = [MKMapItem]()
            for address in addressVisits {
                if let request = MKGeocodingRequest(addressString: address) {
                    do {
                        let mapitems = try await request.mapItems
                        if let mapitem = mapitems.first {
                            addressMppItems.append(mapitem)
                        }
                    } catch let error {
                        print("error: \(error)")
                    }
                }
            }
            addressVisitMapItems = addressMapItems

            // The `addressVisitMapItems` array contains `MKMapItem` items that provide information that describe
            // the geographic coordinates, the specific address, and other rich data about the provided locations:
            //
            // "New York, NY 10023 United States" at (40.76821482, -73.98669500)
            // "West 43rd St, Kansas City, MO 64111 United States" at (39.04979190, -94.59874170)
            // "110 Elizabeth St Sydney NSW 2000 Australia" at (33.87171620, 151.21150870)
        }
    }
```

## Topics

### Creating a geocoding request object

- [init(addressString:)](mkgeocodingrequest/init%28addressstring_%29.md): Initializes a new geocoder request object with the provided address string.

### Getting the geocoder’s state

- [isLoading](mkgeocodingrequest/isloading.md): A Boolean value that indicates whether the current geocoding request is in a loading state.
- [isCancelled](mkgeocodingrequest/iscancelled.md): A Boolean value that indicates whether the current geocoding request is in a cancelled state.

### Controlling the geocoder’s operation

- [cancel()](mkgeocodingrequest/cancel%28%29.md): A function you call to cancel a geocoding request that’s in progress.

### Getting information about the geocoder

- [addressString](mkgeocodingrequest/addressstring.md): The string used to initialize the geocoder.
- [getMapItems(completionHandler:)](mkgeocodingrequest/getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [preferredLocale](mkgeocodingrequest/preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.
- [region](mkgeocodingrequest/region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

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

- [MKReverseGeocodingRequest](mkreversegeocodingrequest.md): A class that looks up address strings for the provided geographic coordinates.

# MKGeocodingRequest (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A class that looks up a geographic coordinate using the provided string.

## Declaration

```objectivec
@interface MKGeocodingRequest : NSObject
```

<a id="Discussion"></a>

## Discussion

Use this class to look up the coordinate for an address string you provide, for example if you want to display the location in a map. This example shows how to use a [Task](https://developer.apple.com/documentation/swift/task) modifier on a SwiftUI view to geocode an array of street addresses to the corresponding coordinates that MapKit returns in an array of [MKMapItem](mkmapitem.md) objects.

```swift

struct MyGeocoderView: View {

    let addressVisits = [
        "Bethesda Terrace, Central Park \n New York, NY 10023 \n United States",
        "Mill Creek Park Fountain, \n Kansas City, Missouri, \n United States",
        "Archibald Fountain, 110 Elizabeth St \n Sydney NSW 2000 \n Australia"
    ]
    @State var addressVisitMapItems: [MKMapItem] = []
    var body: some View {
    // SwiftUI body views
    }
    .onAppear {
        Task {
            var addressMapItems = [MKMapItem]()
            for address in addressVisits {
                if let request = MKGeocodingRequest(addressString: address) {
                    do {
                        let mapitems = try await request.mapItems
                        if let mapitem = mapitems.first {
                            addressMppItems.append(mapitem)
                        }
                    } catch let error {
                        print("error: \(error)")
                    }
                }
            }
            addressVisitMapItems = addressMapItems

            // The `addressVisitMapItems` array contains `MKMapItem` items that provide information that describe
            // the geographic coordinates, the specific address, and other rich data about the provided locations:
            //
            // "New York, NY 10023 United States" at (40.76821482, -73.98669500)
            // "West 43rd St, Kansas City, MO 64111 United States" at (39.04979190, -94.59874170)
            // "110 Elizabeth St Sydney NSW 2000 Australia" at (33.87171620, 151.21150870)
        }
    }
```

## Topics

### Creating a geocoding request object

- [initWithAddressString:](mkgeocodingrequest/init%28addressstring_%29.md): Initializes a new geocoder request object with the provided address string.

### Getting the geocoder’s state

- [loading](mkgeocodingrequest/isloading.md): A Boolean value that indicates whether the current geocoding request is in a loading state.
- [cancelled](mkgeocodingrequest/iscancelled.md): A Boolean value that indicates whether the current geocoding request is in a cancelled state.

### Controlling the geocoder’s operation

- [cancel](mkgeocodingrequest/cancel%28%29.md): A function you call to cancel a geocoding request that’s in progress.

### Getting information about the geocoder

- [addressString](mkgeocodingrequest/addressstring.md): The string used to initialize the geocoder.
- [getMapItemsWithCompletionHandler:](mkgeocodingrequest/getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [preferredLocale](mkgeocodingrequest/preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.
- [region](mkgeocodingrequest/region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Geocoding

- [MKReverseGeocodingRequest](mkreversegeocodingrequest.md): A class that looks up address strings for the provided geographic coordinates.
