> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/tabfocuseslinks](https://developer.apple.com/documentation/webkit/wkpreferences/tabfocuseslinks)

# tabFocusesLinks (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.4+

A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.

## Declaration

```swift
var tabFocusesLinks: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view includes links and form controls in the set of items that may receive focus. Pressing the Option key temporarily reverses this preference.

## See Also

### Setting Behavior Preferences

- [isTextInteractionEnabled](istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [isElementFullscreenEnabled](iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKPreferences.InactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

# tabFocusesLinks (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.4+

A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.

## Declaration

```objectivec
@property (nonatomic) BOOL tabFocusesLinks;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the web view includes links and form controls in the set of items that may receive focus. Pressing the Option key temporarily reverses this preference.

## See Also

### Setting Behavior Preferences

- [textInteractionEnabled](istextinteractionenabled.md): A Boolean value that indicates whether to allow people to select or otherwise interact with text.
- [elementFullscreenEnabled](iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKInactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
