> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityattributes](https://developer.apple.com/documentation/activitykit/activityattributes)

# ActivityAttributes

**Framework:** ActivityKit  
**Kind:** Protocol  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The protocol you implement to describe the content of a Live Activity.

## Declaration

```swift
protocol ActivityAttributes : Decodable, Encodable
```

## Mentioned In

- [Displaying live data with Live Activities](displaying-live-data-with-live-activities.md)
- [Launching your app from a Live Activity](launching-your-app-from-a-live-activity.md)
- [Starting and updating Live Activities with ActivityKit push notifications](starting-and-updating-live-activities-with-activitykit-push-notifications.md)

<a id="overview"></a>

## Overview

The `ActivityAttributes` protocol describes the content that appears in your Live Activity. Its inner type [ContentState](activityattributes/contentstate.md) represents the dynamic content of the Live Activity.

The following example shows an implementation of the `ActivityAttributes` protocol for a pizza delivery app. The app’s Live Activity shows the number of ordered pizzas and the total amount on the bill as static data and the name of the driver and an estimated delivery time as dynamic data that changes over time. Note how the implementation defines the type alias `PizzaDeliveryStatus` to make the code more descriptive and easier to read.

```swift
public import Foundation
import ActivityKit

struct PizzaDeliveryAttributes: ActivityAttributes {
    public typealias PizzaDeliveryStatus = ContentState

    public struct ContentState: Codable, Hashable {
        var driverName: String
        var deliveryTimer: ClosedRange<Date>
    }

    var numberOfPizzas: Int
    var totalAmount: String
    var orderNumber: String
}
```

## Topics

### Dynamic content

- [ContentState](activityattributes/contentstate.md): The associated type that describes the dynamic content of a Live Activity.

### Instance Methods

- [previewContext(\_:isStale:viewKind:)](activityattributes/previewcontext%28__isstale_viewkind_%29.md): Generates a preview for a Live Activity.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](activity/request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](activity/request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](activity/attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityStyle](activitystyle.md)
- [content](activity/content.md): The dynamic content of a Live Activity.
- [ActivityContent](activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [Activity.ContentState](activity/contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [PushType](pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
- [ActivityAuthorizationError](activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
