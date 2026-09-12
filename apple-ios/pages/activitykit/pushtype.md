> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/pushtype](https://developer.apple.com/documentation/activitykit/pushtype)

# PushType

**Framework:** ActivityKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.

## Declaration

```swift
struct PushType
```

<a id="overview"></a>

## Overview

Pass the [token](pushtype/token.md) constant to the [request(attributes:contentState:pushType:)](activity/request%28attributes_contentstate_pushtype_%29.md) function to start a Live Activity that receives content updates with ActivityKit push notifications. Pass [channel(\_:)](pushtype/channel%28__%29.md) to [request(attributes:contentState:pushType:)](activity/request%28attributes_contentstate_pushtype_%29.md) function to specify that you want to use a broadcast channel instead of a token. You can only specify one [PushType](pushtype.md).

To learn more about using ActivityKit push notifications to update your Live Activity, see [Starting and updating Live Activities with ActivityKit push notifications](starting-and-updating-live-activities-with-activitykit-push-notifications.md).

## Topics

### Supporting ActivityKit push notifications

- [token](pushtype/token.md): A constant you use to configure a Live Activity that updates its dynamic content by receiving ActivityKit push notifications.
- [channel(\_:)](pushtype/channel%28__%29.md): A constant to configure a Live Activity that updates its dynamic content for broadcast channels.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](activity/request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](activity/request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](activity/attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [ActivityStyle](activitystyle.md)
- [content](activity/content.md): The dynamic content of a Live Activity.
- [ActivityContent](activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [Activity.ContentState](activity/contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [ActivityAuthorizationError](activityauthorizationerror.md): An error that indicates why the request to start a Live Activity failed.
