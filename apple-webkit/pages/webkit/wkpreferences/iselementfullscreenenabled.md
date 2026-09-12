> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/iselementfullscreenenabled](https://developer.apple.com/documentation/webkit/wkpreferences/iselementfullscreenenabled)

# isElementFullscreenEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

A Boolean value that indicates whether a web view can display content full screen.

## Declaration

```swift
var isElementFullscreenEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this preference is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  When this value is [true](https://developer.apple.com/documentation/swift/true) and a page requests full-screen mode, the system removes the [WKWebView](../wkwebview.md) from your app’s view hierarchy.

## See Also

### Setting Behavior Preferences

- [tabFocusesLinks](tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [isTextInteractionEnabled](istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKPreferences.InactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

# elementFullscreenEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · visionOS 1.0+

A Boolean value that indicates whether a web view can display content full screen.

## Declaration

```objectivec
@property (nonatomic, getter=isElementFullscreenEnabled) BOOL elementFullscreenEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value for this preference is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  When this value is [true](https://developer.apple.com/documentation/swift/true) and a page requests full-screen mode, the system removes the [WKWebView](../wkwebview.md) from your app’s view hierarchy.

## See Also

### Setting Behavior Preferences

- [tabFocusesLinks](tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [textInteractionEnabled](istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKInactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
