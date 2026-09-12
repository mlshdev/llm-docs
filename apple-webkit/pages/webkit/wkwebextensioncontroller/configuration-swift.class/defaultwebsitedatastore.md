> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/configuration-swift.class/defaultwebsitedatastore](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/configuration-swift.class/defaultwebsitedatastore)

# defaultWebsiteDataStore (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default data store for website data and cookie access in extension contexts.

## Declaration

```swift
var defaultWebsiteDataStore: WKWebsiteDataStore! { get set }
```

<a id="discussion"></a>

## Discussion

This property sets the primary data store for managing website data, including cookies, which extensions can access, subject to the granted permissions within the extension contexts. Defaults to [default()](../../wkwebsitedatastore/default%28%29.md).

> **Note**

> In addition to this data store, extensions can also access other data stores, such as non-persistent ones, for any open tabs.

# defaultWebsiteDataStore (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The default data store for website data and cookie access in extension contexts.

## Declaration

```objectivec
@property (nonatomic, retain, null_resettable) WKWebsiteDataStore * defaultWebsiteDataStore;
```

<a id="discussion"></a>

## Discussion

This property sets the primary data store for managing website data, including cookies, which extensions can access, subject to the granted permissions within the extension contexts. Defaults to [defaultDataStore](../../wkwebsitedatastore/default%28%29.md).

> **Note**

> In addition to this data store, extensions can also access other data stores, such as non-persistent ones, for any open tabs.
