> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/configurationupdatehandler-swift.property](https://developer.apple.com/documentation/uikit/uibutton/configurationupdatehandler-swift.property)

# configurationUpdateHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A closure that executes when the button state changes.

## Declaration

```swift
var configurationUpdateHandler: UIButton.ConfigurationUpdateHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property as an alternative to overriding [updateConfiguration()](updateconfiguration%28%29.md). Set a closure to respond to button state changes by updating the button configuration.

In iOS 18 and later, UIKit supports automatic trait tracking inside this closure for traits from this button’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This closure supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in buttons

- [updateConfiguration()](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.

# configurationUpdateHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A closure that executes when the button state changes.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIButtonConfigurationUpdateHandler configurationUpdateHandler;
```

<a id="Discussion"></a>

## Discussion

Use this property as an alternative to overriding [updateConfiguration](updateconfiguration%28%29.md). Set a closure to respond to button state changes by updating the button configuration.

In iOS 18 and later, UIKit supports automatic trait tracking inside this closure for traits from this button’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This closure supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in buttons

- [updateConfiguration](updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
