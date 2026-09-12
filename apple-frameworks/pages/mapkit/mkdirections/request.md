> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request](https://developer.apple.com/documentation/mapkit/mkdirections/request)

# MKDirections.Request (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The start and end points of a route, along with the planned mode of transportation.

## Declaration

```swift
class Request
```

<a id="overview"></a>

## Overview

You use an [MKDirections.Request](request.md) object when requesting or providing directions. If your app provides directions, use this class to decode the URL that the Maps app sends to you. If you need to request directions from Apple, pass an instance of this class to an [MKDirections](../mkdirections.md) object. For example, an app that provides subway directions might request walking directions to and from relevant subway stations.

Prior to iOS 14, for apps that provide directions, you receive direction-related URLs in your app delegate’s [application(\_:open:options:)](../../uikit/uiapplicationdelegate/application%28__open_options_%29.md)method. Upon receiving a URL, call the [isDirectionsRequest(\_:)](request/isdirectionsrequest%28__%29.md) method of this class to determine whether the URL relates to routing directions. If it does, create an instance of this class using the provided URL and extract the map items associated with the start and end points.

> **Note**

>  Prior to iOS 14, to provide routing directions, your app needs to include special keys in its `Info.plist` file and be able to handle URLs that the Maps app sends to it. These keys indicate a special URL type that you app needs to handle. For information about how to implement this support, see [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497).

## Topics

### Creating a directions request object

- [isDirectionsRequest(\_:)](request/isdirectionsrequest%28__%29.md): Returns a Boolean value that indicates whether the specified URL contains a directions request.
- [init(contentsOfURL:)](request/init%28contentsofurl_%29.md): Creates and returns a directions request object using the specified URL.

### Accessing the start and end points

- [source](request/source.md): The starting point for routing directions.
- [destination](request/destination.md): The end point for routing directions.

### Specifying transportation options

- [transportType](request/transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](request/highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](request/tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirections.RoutePreference](routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](request/requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](request/departuredate.md): The departure date for the trip.
- [arrivalDate](request/arrivaldate.md): The arrival date for the trip.

### Constants

- [MKDirectionsTransportType](../mkdirectionstransporttype.md): Constants that specify the type of conveyance to use.

### Launch options

- [MKLaunchOptionsCameraKey](../mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeCycling](../mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](../mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](../mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](../mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](../mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](../mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](../mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.

### Initializers

- [init(contentsOf:)](request/init%28contentsof_%29.md)

### Default Implementations

- [Request Implementations](request/request-implementations.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Directions

- [MKDirections](../mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirections.Response](response.md): The route information that Apple servers return in response to your request for directions.
- [MKDirections.ETAResponse](etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.
- [MKRoute.Step](../mkroute/step.md): One portion of an overall route.

# MKDirectionsRequest (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The start and end points of a route, along with the planned mode of transportation.

## Declaration

```objectivec
@interface MKDirectionsRequest : NSObject
```

<a id="overview"></a>

## Overview

You use an [MKDirectionsRequest](request.md) object when requesting or providing directions. If your app provides directions, use this class to decode the URL that the Maps app sends to you. If you need to request directions from Apple, pass an instance of this class to an [MKDirections](../mkdirections.md) object. For example, an app that provides subway directions might request walking directions to and from relevant subway stations.

Prior to iOS 14, for apps that provide directions, you receive direction-related URLs in your app delegate’s [application:openURL:options:](../../uikit/uiapplicationdelegate/application%28__open_options_%29.md)method. Upon receiving a URL, call the [isDirectionsRequestURL:](request/isdirectionsrequest%28__%29.md) method of this class to determine whether the URL relates to routing directions. If it does, create an instance of this class using the provided URL and extract the map items associated with the start and end points.

> **Note**

>  Prior to iOS 14, to provide routing directions, your app needs to include special keys in its `Info.plist` file and be able to handle URLs that the Maps app sends to it. These keys indicate a special URL type that you app needs to handle. For information about how to implement this support, see [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497).

## Topics

### Creating a directions request object

- [isDirectionsRequestURL:](request/isdirectionsrequest%28__%29.md): Returns a Boolean value that indicates whether the specified URL contains a directions request.

### Accessing the start and end points

- [source](request/source.md): The starting point for routing directions.
- [destination](request/destination.md): The end point for routing directions.

### Specifying transportation options

- [transportType](request/transporttype.md): The type of conveyance that the directions apply to.
- [highwayPreference](request/highwaypreference.md): The value that indicates whether the framework uses or avoids highways when providing directions.
- [tollPreference](request/tollpreference.md): The value that indicates whether the framework avoids routes that have tolls when providing directions.
- [MKDirectionsRoutePreference](routepreference.md): Options that modify how the framework selects routes when calculating directions.
- [requestsAlternateRoutes](request/requestsalternateroutes.md): A Boolean value that indicates whether your app requests multiple routes when they’re available.
- [departureDate](request/departuredate.md): The departure date for the trip.
- [arrivalDate](request/arrivaldate.md): The arrival date for the trip.

### Constants

- [MKDirectionsTransportType](../mkdirectionstransporttype.md): Constants that specify the type of conveyance to use.

### Launch options

- [MKLaunchOptionsCameraKey](../mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeCycling](../mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](../mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](../mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](../mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](../mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](../mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](../mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.

### Instance Methods

- [initWithContentsOfURL:](request/init%28contentsof_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Directions

- [MKDirections](../mkdirections.md): A utility object that computes directions and travel-time information based on the route information you provide.
- [MKDirectionsResponse](response.md): The route information that Apple servers return in response to your request for directions.
- [MKETAResponse](etaresponse.md): The travel-time information that Apple servers return.
- [MKRoute](../mkroute.md): A single route between a requested start and end point.
- [MKRouteStep](../mkroute/step.md): One portion of an overall route.
