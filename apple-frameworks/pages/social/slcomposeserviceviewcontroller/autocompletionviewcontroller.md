> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/autocompletionviewcontroller](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/autocompletionviewcontroller)

# autoCompletionViewController (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

The view controller that manages an autocompletion view for suggesting common text completions while users type.

## Declaration

```swift
var autoCompletionViewController: UIViewController! { get set }
```

<a id="Discussion"></a>

## Discussion

An autocompletion view can appear in place of the list of configuration items, just below the text view in the compose view. The compose view controller allows only one autocompletion view controller to be present at a time.

Note that your custom autocompletion view controller should set its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property to an appropriate value. `SLComposeServiceViewController` observes changes to the [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property and animates view size changes, if necessary.

# autoCompletionViewController (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

The view controller that manages an autocompletion view for suggesting common text completions while users type.

## Declaration

```objectivec
@property (nonatomic, strong) UIViewController * autoCompletionViewController;
```

<a id="Discussion"></a>

## Discussion

An autocompletion view can appear in place of the list of configuration items, just below the text view in the compose view. The compose view controller allows only one autocompletion view controller to be present at a time.

Note that your custom autocompletion view controller should set its [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property to an appropriate value. `SLComposeServiceViewController` observes changes to the [preferredContentSize](../../uikit/uiviewcontroller/preferredcontentsize.md) property and animates view size changes, if necessary.
