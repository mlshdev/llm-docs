> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/crownsequencer

# crownSequencer (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The object to use when directly tracking crown events.

## Declaration

```swift
var crownSequencer: WKCrownSequencer { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to monitor crown-related events yourself. You can use this object in an interface that also includes a [WKInterfacePicker](../wkinterfacepicker.md), but only one of those objects can receive crown events at any given time. For information about how to configure a crown sequencer object, see [WKCrownSequencer](../wkcrownsequencer.md).

# crownSequencer (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The object to use when directly tracking crown events.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WKCrownSequencer * crownSequencer;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to monitor crown-related events yourself. You can use this object in an interface that also includes a [WKInterfacePicker](../wkinterfacepicker.md), but only one of those objects can receive crown events at any given time. For information about how to configure a crown sequencer object, see [WKCrownSequencer](../wkcrownsequencer.md).
