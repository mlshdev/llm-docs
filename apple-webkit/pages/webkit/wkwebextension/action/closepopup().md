> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/closepopup()](https://developer.apple.com/documentation/webkit/wkwebextension/action/closepopup())

# closePopup() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Triggers the dismissal process of the pop-up.

## Declaration

```swift
func closePopup()
```

<a id="discussion"></a>

## Discussion

Invoke this method to manage the pop-up’s lifecycle, ensuring the web view is unloaded and resources are released once the pop-up closes. This method is automatically called upon the dismissal of the action’s [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) or [NSPopover](https://developer.apple.com/documentation/appkit/nspopover).  For custom scenarios where the pop-up’s lifecycle is manually managed, it must be explicitly invoked to ensure proper closure.

# closePopup (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Triggers the dismissal process of the pop-up.

## Declaration

```objectivec
- (void) closePopup;
```

<a id="discussion"></a>

## Discussion

Invoke this method to manage the pop-up’s lifecycle, ensuring the web view is unloaded and resources are released once the pop-up closes. This method is automatically called upon the dismissal of the action’s [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) or [NSPopover](https://developer.apple.com/documentation/appkit/nspopover).  For custom scenarios where the pop-up’s lifecycle is manually managed, it must be explicitly invoked to ensure proper closure.
