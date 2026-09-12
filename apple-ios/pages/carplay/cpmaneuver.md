> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver](https://developer.apple.com/documentation/carplay/cpmaneuver)

# CPManeuver (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that describes a single navigation instruction.

## Declaration

```swift
class CPManeuver
```

<a id="overview"></a>

## Overview

You use maneuvers to provide turn-by-turn guidance in navigation apps. Each maneuver represents a single navigation instruction and can include a symbol, an instruction, and estimates for remaining time and distance.

You supply an instruction as an array of variants, each with a different length. CarPlay chooses the longest variant that best fits the available space on the screen. You can optionally provide attributed variants that embed images using [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment). See [attributedInstructionVariants](cpmaneuver/attributedinstructionvariants.md) for more information.

In addition to the route guidance panel, you can show maneuvers on the CarPlay dashboard or in notification banners. Use the relevant properties to provide context-specific instructions and images.

## Topics

### Providing instructions

- [dashboardInstructionVariants](cpmaneuver/dashboardinstructionvariants.md): An array of instruction variants for the CarPlay dashboard.
- [notificationInstructionVariants](cpmaneuver/notificationinstructionvariants.md): An array of instruction variants for notification banners.

### Providing attributed instructions

- [attributedInstructionVariants](cpmaneuver/attributedinstructionvariants.md): An array of attributed instruction variants for the maneuver.
- [dashboardAttributedInstructionVariants](cpmaneuver/dashboardattributedinstructionvariants.md): An array of attributed instruction variants for the CarPlay dashboard.
- [notificationAttributedInstructionVariants](cpmaneuver/notificationattributedinstructionvariants.md): An array of attributed instruction variants for notification banners.

### Providing travel estimates

- [initialTravelEstimates](cpmaneuver/initialtravelestimates.md): An object that describes the distance and time remaining before the maneuver completes.

### Providing symbol images

- [symbolImage](cpmaneuver/symbolimage.md): An image that represents the maneuver.
- [dashboardSymbolImage](cpmaneuver/dashboardsymbolimage.md): An image for the CarPlay dashboard that represents the maneuver.
- [notificationSymbolImage](cpmaneuver/notificationsymbolimage.md): An image for notification banners that represents the maneuver.
- [symbolSet](cpmaneuver/symbolset.md): Deprecated. An image set that represents the maneuver.

### Providing junction images

- [junctionImage](cpmaneuver/junctionimage.md): An image that represents an upcoming junction.
- [dashboardJunctionImage](cpmaneuver/dashboardjunctionimage.md): An image for the CarPlay dashboard that represents an upcoming junction.

### Providing junction information

- [junctionType](cpmaneuver/junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionExitAngle](cpmaneuver/junctionexitangle.md): The angle of the exit road of this junction.
- [junctionElementAngles](cpmaneuver/junctionelementangles.md): A set of angles for the rest of the roads of this junction.

### Providing maneuver information

- [maneuverType](cpmaneuver/maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](cpmaneuver/roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](cpmaneuver/linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](cpmaneuver/highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](cpmaneuver/trafficside.md): A value that represents which side of the road the traffic drives on.

### Providing additional information

- [userInfo](cpmaneuver/userinfo.md): A custom object associated with the maneuver.

### Instance properties

- [cardBackgroundColor](cpmaneuver/cardbackgroundcolor.md)

### Initializers

- [init(coder:)](cpmaneuver/init%28coder_%29.md)

### Instance Properties

- [instructionVariants](cpmaneuver/instructionvariants.md): An array of instruction variants for the maneuver.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Maneuvers

- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.

# CPManeuver (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that describes a single navigation instruction.

## Declaration

```objectivec
@interface CPManeuver : NSObject
```

<a id="overview"></a>

## Overview

You use maneuvers to provide turn-by-turn guidance in navigation apps. Each maneuver represents a single navigation instruction and can include a symbol, an instruction, and estimates for remaining time and distance.

You supply an instruction as an array of variants, each with a different length. CarPlay chooses the longest variant that best fits the available space on the screen. You can optionally provide attributed variants that embed images using [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment). See [attributedInstructionVariants](cpmaneuver/attributedinstructionvariants.md) for more information.

In addition to the route guidance panel, you can show maneuvers on the CarPlay dashboard or in notification banners. Use the relevant properties to provide context-specific instructions and images.

## Topics

### Providing instructions

- [dashboardInstructionVariants](cpmaneuver/dashboardinstructionvariants.md): An array of instruction variants for the CarPlay dashboard.
- [notificationInstructionVariants](cpmaneuver/notificationinstructionvariants.md): An array of instruction variants for notification banners.

### Providing attributed instructions

- [attributedInstructionVariants](cpmaneuver/attributedinstructionvariants.md): An array of attributed instruction variants for the maneuver.
- [dashboardAttributedInstructionVariants](cpmaneuver/dashboardattributedinstructionvariants.md): An array of attributed instruction variants for the CarPlay dashboard.
- [notificationAttributedInstructionVariants](cpmaneuver/notificationattributedinstructionvariants.md): An array of attributed instruction variants for notification banners.

### Providing travel estimates

- [initialTravelEstimates](cpmaneuver/initialtravelestimates.md): An object that describes the distance and time remaining before the maneuver completes.

### Providing symbol images

- [symbolImage](cpmaneuver/symbolimage.md): An image that represents the maneuver.
- [dashboardSymbolImage](cpmaneuver/dashboardsymbolimage.md): An image for the CarPlay dashboard that represents the maneuver.
- [notificationSymbolImage](cpmaneuver/notificationsymbolimage.md): An image for notification banners that represents the maneuver.
- [symbolSet](cpmaneuver/symbolset.md): Deprecated. An image set that represents the maneuver.

### Providing junction images

- [junctionImage](cpmaneuver/junctionimage.md): An image that represents an upcoming junction.
- [dashboardJunctionImage](cpmaneuver/dashboardjunctionimage.md): An image for the CarPlay dashboard that represents an upcoming junction.

### Providing junction information

- [junctionType](cpmaneuver/junctiontype.md): A value that represents the type of junction associated with this maneuver.
- [junctionExitAngle](cpmaneuver/junctionexitangle.md): The angle of the exit road of this junction.
- [junctionElementAngles](cpmaneuver/junctionelementangles.md): A set of angles for the rest of the roads of this junction.

### Providing maneuver information

- [maneuverType](cpmaneuver/maneuvertype.md): A value that represents the type of maneuver.
- [roadFollowingManeuverVariants](cpmaneuver/roadfollowingmaneuvervariants.md): An array of strings that represent the names of the road following this maneuver, arranged from most to least preferred.
- [linkedLaneGuidance](cpmaneuver/linkedlaneguidance.md): A value that represents lane guidance associated with this maneuver.
- [highwayExitLabel](cpmaneuver/highwayexitlabel.md): A string that describes a highway exit.
- [trafficSide](cpmaneuver/trafficside.md): A value that represents which side of the road the traffic drives on.

### Providing additional information

- [userInfo](cpmaneuver/userinfo.md): A custom object associated with the maneuver.

### Instance properties

- [cardBackgroundColor](cpmaneuver/cardbackgroundcolor.md)

### Instance Properties

- [instructionVariants](cpmaneuver/instructionvariants.md): An array of instruction variants for the maneuver.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Maneuvers

- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
