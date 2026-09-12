> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiforcetouchcapability](https://developer.apple.com/documentation/uikit/uiforcetouchcapability)

# UIForceTouchCapability (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys that indicate the availability of 3D Touch on a device.

## Declaration

```swift
enum UIForceTouchCapability
```

<a id="overview"></a>

## Overview

Only certain devices support 3D Touch. On those that do, the user can disable 3D Touch in the Accessibility area in Settings.

## Topics

### Availability options

- [UIForceTouchCapability.unknown](uiforcetouchcapability/unknown.md): The availability of 3D Touch is unknown.
- [UIForceTouchCapability.available](uiforcetouchcapability/available.md): 3D Touch is available on the device.
- [UIForceTouchCapability.unavailable](uiforcetouchcapability/unavailable.md): 3D Touch isn’t available on the device.

### Initializers

- [init(rawValue:)](uiforcetouchcapability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving the force touch capability traits

- [forceTouchCapability](uitraitcollection/forcetouchcapability.md): The force touch capability value of the trait collection.

# UIForceTouchCapability (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys that indicate the availability of 3D Touch on a device.

## Declaration

```objectivec
enum UIForceTouchCapability : NSInteger;
```

<a id="overview"></a>

## Overview

Only certain devices support 3D Touch. On those that do, the user can disable 3D Touch in the Accessibility area in Settings.

## Topics

### Availability options

- [UIForceTouchCapabilityUnknown](uiforcetouchcapability/unknown.md): The availability of 3D Touch is unknown.
- [UIForceTouchCapabilityAvailable](uiforcetouchcapability/available.md): 3D Touch is available on the device.
- [UIForceTouchCapabilityUnavailable](uiforcetouchcapability/unavailable.md): 3D Touch isn’t available on the device.

## See Also

### Retrieving the force touch capability traits

- [forceTouchCapability](uitraitcollection/forcetouchcapability.md): The force touch capability value of the trait collection.
