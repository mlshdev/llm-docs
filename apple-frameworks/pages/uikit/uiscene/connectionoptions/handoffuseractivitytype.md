> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/handoffuseractivitytype](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/handoffuseractivitytype)

# handoffUserActivityType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The type of the pending Handoff activity.

## Declaration

```swift
var handoffUserActivityType: String? { get }
```

<a id="Discussion"></a>

## Discussion

When a Handoff activity is pending at scene-connection time, UIKit puts the type of that activity in this property. Use this information at connection time to prepare your scene to receive the actual activity object. After your scene connects, UIKit calls the appropriate delegate methods to deliver the [NSUserActivity](../../../foundation/nsuseractivity.md) object.

If the value of this property is `nil`, no Handoff activity is pending.

# handoffUserActivityType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The type of the pending Handoff activity.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * handoffUserActivityType;
```

<a id="Discussion"></a>

## Discussion

When a Handoff activity is pending at scene-connection time, UIKit puts the type of that activity in this property. Use this information at connection time to prepare your scene to receive the actual activity object. After your scene connects, UIKit calls the appropriate delegate methods to deliver the [NSUserActivity](../../../foundation/nsuseractivity.md) object.

If the value of this property is `nil`, no Handoff activity is pending.
