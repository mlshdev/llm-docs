> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/applicationsupportsshaketoedit](https://developer.apple.com/documentation/uikit/uiapplication/applicationsupportsshaketoedit)

# applicationSupportsShakeToEdit (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether shaking the device displays the undo-redo user interface.

## Declaration

```swift
var applicationSupportsShakeToEdit: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). Set the property to [false](https://developer.apple.com/documentation/swift/false) if you don’t want your app to display the Undo and Redo buttons when users shake the device.

## See Also

### Controlling and handling events

- [sendEvent(\_:)](sendevent%28__%29.md): Dispatches an event to the appropriate responder objects in the app.
- [sendAction(\_:to:from:for:)](sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.

# applicationSupportsShakeToEdit (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that determines whether shaking the device displays the undo-redo user interface.

## Declaration

```objectivec
@property (nonatomic) BOOL applicationSupportsShakeToEdit;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). Set the property to [false](https://developer.apple.com/documentation/swift/false) if you don’t want your app to display the Undo and Redo buttons when users shake the device.

## See Also

### Controlling and handling events

- [sendEvent:](sendevent%28__%29.md): Dispatches an event to the appropriate responder objects in the app.
- [sendAction:to:from:forEvent:](sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.
