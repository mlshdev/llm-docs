> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/globalprivacycontrolenabled](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/globalprivacycontrolenabled)

# globalPrivacyControlEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var globalPrivacyControlEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Whether the Global Privacy Control (GPC) signal is enabled for the navigation.

The default value is NO. When enabled, both navigator.globalPrivacyControl and the Sec-GPC: 1 request header are active for the main frame, its subframes, and their subresources.

# globalPrivacyControlEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic) BOOL globalPrivacyControlEnabled;
```

<a id="discussion"></a>

## Discussion

Whether the Global Privacy Control (GPC) signal is enabled for the navigation.

The default value is NO. When enabled, both navigator.globalPrivacyControl and the Sec-GPC: 1 request header are active for the main frame, its subframes, and their subresources.
