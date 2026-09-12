> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabconfiguration/url](https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration/url)

# url (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the initial URL for the tab.

## Declaration

```swift
var url: URL? { get }
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, the app’s default start page should appear in the tab.

# url (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the initial URL for the tab.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * url;
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, the app’s default start page should appear in the tab.
