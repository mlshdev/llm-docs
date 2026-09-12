> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/islockdownmodeenabled](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/islockdownmodeenabled)

# isLockdownModeEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether to use Lockdown Mode in the web view.

## Declaration

```swift
var isLockdownModeEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this reflects whether the user has enabled Lockdown Mode on the device. Update this preference to override the device setting when you implement a per-website or similar setting.

For more information about Lockdown Mode, see [About Lockdown Mode](https://support.apple.com/en-us/HT212650).

# lockdownModeEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether to use Lockdown Mode in the web view.

## Declaration

```objectivec
@property (nonatomic, getter=isLockdownModeEnabled) BOOL lockdownModeEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, this reflects whether the user has enabled Lockdown Mode on the device. Update this preference to override the device setting when you implement a per-website or similar setting.

For more information about Lockdown Mode, see [About Lockdown Mode](https://support.apple.com/en-us/HT212650).
