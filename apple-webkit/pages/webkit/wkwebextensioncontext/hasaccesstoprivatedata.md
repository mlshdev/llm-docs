> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/hasaccesstoprivatedata](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/hasaccesstoprivatedata)

# hasAccessToPrivateData (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the extension has access to private data.

## Declaration

```swift
var hasAccessToPrivateData: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the extension is granted permission to interact with private windows, tabs, and cookies. Access to private data should be explicitly allowed by the user before setting this property. This value should be saved and restored as needed by the app.

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data is not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../wkwebsitedatastore.md).

# hasAccessToPrivateData (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating if the extension has access to private data.

## Declaration

```objectivec
@property (nonatomic) BOOL hasAccessToPrivateData;
```

<a id="discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), the extension is granted permission to interact with private windows, tabs, and cookies. Access to private data should be explicitly allowed by the user before setting this property. This value should be saved and restored as needed by the app.

> **Note**

> To ensure proper isolation between private and non-private data, web views associated with private data must use a different [WKUserContentController](../wkusercontentcontroller.md). Likewise, to be identified as a private web view and to ensure that cookies and other website data is not shared, private web views must be configured to use a non-persistent [WKWebsiteDataStore](../wkwebsitedatastore.md).
