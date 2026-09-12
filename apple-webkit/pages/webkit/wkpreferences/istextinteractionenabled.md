> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/istextinteractionenabled](https://developer.apple.com/documentation/webkit/wkpreferences/istextinteractionenabled)

# isTextInteractionEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether to allow people to select or otherwise interact with text.

## Declaration

```swift
var isTextInteractionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this preference is [true](https://developer.apple.com/documentation/swift/true) on macOS and iOS. On watchOS, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Behavior Preferences

- [tabFocusesLinks](tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [isElementFullscreenEnabled](iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKPreferences.InactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.

# textInteractionEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether to allow people to select or otherwise interact with text.

## Declaration

```objectivec
@property (nonatomic, getter=isTextInteractionEnabled) BOOL textInteractionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value for this preference is [true](https://developer.apple.com/documentation/swift/true) on macOS and iOS. On watchOS, the default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting Behavior Preferences

- [tabFocusesLinks](tabfocuseslinks.md): A Boolean value that indicates whether pressing the tab key changes the focus to links and form controls.
- [elementFullscreenEnabled](iselementfullscreenenabled.md): A Boolean value that indicates whether a web view can display content full screen.
- [inactiveSchedulingPolicy](inactiveschedulingpolicy-swift.property.md): A policy you set to specify how a web view that’s not in a window handles tasks.
- [WKInactiveSchedulingPolicy](inactiveschedulingpolicy-swift.enum.md): An enumeration that lists policies for how a web view that’s not in a window handles tasks.
