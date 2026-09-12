> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/windowconfiguration/shouldbeprivate](https://developer.apple.com/documentation/webkit/wkwebextension/windowconfiguration/shouldbeprivate)

# shouldBePrivate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the window should be private.

## Declaration

```swift
var shouldBePrivate: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data is not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../../wkwebsitedatastore.md).

# shouldBePrivate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates whether the window should be private.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL shouldBePrivate;
```

<a id="discussion"></a>

## Discussion

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data is not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../../wkwebsitedatastore.md).
