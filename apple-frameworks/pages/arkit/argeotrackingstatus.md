> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingstatus](https://developer.apple.com/documentation/arkit/argeotrackingstatus)

# ARGeoTrackingStatus (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The state, accuracy, and reason that are possible for geo-tracking’s current condition.

## Declaration

```swift
class ARGeoTrackingStatus
```

<a id="overview"></a>

## Overview

Geo tracking requires coordination with the user at various phases of the geo-tracking lifecycle. To elicit the right user actions, an app needs to provide clear instructions to the user based on the current frame’s [geoTrackingStatus](arframe/geotrackingstatus.md):

- Geo-tracking [state](argeotrackingstatus/state-swift.property.md) most notably regards the important process in which ARKit acquires a better understanding of the user’s geographic location and orientation than is possible with GPS and the compass heading alone. See [ARGeoTrackingStatus.State.localizing](argeotrackingstatus/state-swift.enum/localizing.md) for more information.
- Given a particular [state](argeotrackingstatus/state-swift.property.md), the app needs to tailor its user messaging according to the [stateReason](argeotrackingstatus/statereason-swift.property.md).
- An app may need to monitor [accuracy](argeotrackingstatus/accuracy-swift.property.md) closely if it requires high-precision localization.

## Topics

### Checking State

- [state](argeotrackingstatus/state-swift.property.md): A value that describes the session’s current geo-tracking state.
- [ARGeoTrackingStatus.State](argeotrackingstatus/state-swift.enum.md): Values that are possible for the current state of geo-tracking.

### Determining the Reason

- [stateReason](argeotrackingstatus/statereason-swift.property.md): The reasons for the app’s geotracking status.
- [ARGeoTrackingStatus.StateReason](argeotrackingstatus/statereason-swift.enum.md): The reasons for the app’s geotracking status.

### Judging Accuracy

- [accuracy](argeotrackingstatus/accuracy-swift.property.md): The accuracy of geo tracking at the time the session captured the frame.
- [ARGeoTrackingStatus.Accuracy](argeotrackingstatus/accuracy-swift.enum.md): Values that are possible for the current accuracy of geo tracking.

### Initializers

- [init(coder:)](argeotrackingstatus/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assessing geo-tracking condition

- [geoTrackingStatus](arframe/geotrackingstatus.md): The session’s condition with respect to geographic tracking at the time the session captured the frame.

# ARGeoTrackingStatus (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The state, accuracy, and reason that are possible for geo-tracking’s current condition.

## Declaration

```objectivec
@interface ARGeoTrackingStatus : NSObject
```

<a id="overview"></a>

## Overview

Geo tracking requires coordination with the user at various phases of the geo-tracking lifecycle. To elicit the right user actions, an app needs to provide clear instructions to the user based on the current frame’s [geoTrackingStatus](arframe/geotrackingstatus.md):

- Geo-tracking [state](argeotrackingstatus/state-swift.property.md) most notably regards the important process in which ARKit acquires a better understanding of the user’s geographic location and orientation than is possible with GPS and the compass heading alone. See [ARGeoTrackingStateLocalizing](argeotrackingstatus/state-swift.enum/localizing.md) for more information.
- Given a particular [state](argeotrackingstatus/state-swift.property.md), the app needs to tailor its user messaging according to the [stateReason](argeotrackingstatus/statereason-swift.property.md).
- An app may need to monitor [accuracy](argeotrackingstatus/accuracy-swift.property.md) closely if it requires high-precision localization.

## Topics

### Checking State

- [state](argeotrackingstatus/state-swift.property.md): A value that describes the session’s current geo-tracking state.
- [ARGeoTrackingState](argeotrackingstatus/state-swift.enum.md): Values that are possible for the current state of geo-tracking.

### Determining the Reason

- [stateReason](argeotrackingstatus/statereason-swift.property.md): The reasons for the app’s geotracking status.
- [ARGeoTrackingStateReason](argeotrackingstatus/statereason-swift.enum.md): The reasons for the app’s geotracking status.

### Judging Accuracy

- [accuracy](argeotrackingstatus/accuracy-swift.property.md): The accuracy of geo tracking at the time the session captured the frame.
- [ARGeoTrackingAccuracy](argeotrackingstatus/accuracy-swift.enum.md): Values that are possible for the current accuracy of geo tracking.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Assessing geo-tracking condition

- [geoTrackingStatus](arframe/geotrackingstatus.md): The session’s condition with respect to geographic tracking at the time the session captured the frame.
