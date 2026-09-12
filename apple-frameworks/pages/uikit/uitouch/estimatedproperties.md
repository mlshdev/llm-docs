> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/estimatedproperties](https://developer.apple.com/documentation/uikit/uitouch/estimatedproperties)

# estimatedProperties (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of touch properties whose values contain only estimates.

## Declaration

```swift
var estimatedProperties: UITouch.Properties { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a bitmask of constants indicating which touch properties could not be reported immediately. For example, Apple Pencil records the force of a touch, but must transmit that information over the air to the underlying iPad. The delay incurred by transmitting the data may cause the information to be received after the touch has been reported to your app.

Values in this property are not guaranteed to be updated later. For a list of properties whose values are expected to be updated, see [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md).

## See Also

### Managing estimated touch attributes

- [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md): The set of touch properties for which updated values are expected in the future.
- [UITouch.Properties](properties.md): A bit mask of touch properties that may get updated.
- [estimationUpdateIndex](estimationupdateindex.md): An index number that lets you correlate an updated touch with the original touch.

# estimatedProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of touch properties whose values contain only estimates.

## Declaration

```objectivec
@property (nonatomic, readonly) UITouchProperties estimatedProperties;
```

<a id="Discussion"></a>

## Discussion

This property contains a bitmask of constants indicating which touch properties could not be reported immediately. For example, Apple Pencil records the force of a touch, but must transmit that information over the air to the underlying iPad. The delay incurred by transmitting the data may cause the information to be received after the touch has been reported to your app.

Values in this property are not guaranteed to be updated later. For a list of properties whose values are expected to be updated, see [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md).

## See Also

### Managing estimated touch attributes

- [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md): The set of touch properties for which updated values are expected in the future.
- [UITouchProperties](properties.md): A bit mask of touch properties that may get updated.
- [estimationUpdateIndex](estimationupdateindex.md): An index number that lets you correlate an updated touch with the original touch.
