> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/configurationupdatehandler-49slo](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/configurationupdatehandler-49slo)

# configurationUpdateHandler

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A block for handling updates to the view’s configuration using the current state.

## Declaration

```swift
@MainActor @preconcurrency var configurationUpdateHandler: UITableViewHeaderFooterView.ConfigurationUpdateHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

A configuration update handler provides an alternative approach to overriding [updateConfiguration(using:)](../uicollectionviewcell/updateconfiguration%28using_%29.md) in a subclass. Set a configuration update handler to update the header footer view’s configuration using the new state in response to a configuration state change.

Setting the value of this property calls [setNeedsUpdateConfiguration()](setneedsupdateconfiguration%28%29.md). The system calls this handler after calling [updateConfiguration(using:)](../uicollectionviewcell/updateconfiguration%28using_%29.md).

In iOS 18 and later, UIKit supports automatic trait tracking inside this closure for traits from this view’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This closure supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in table header and footer views

- [updateConfiguration(using:)](updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
