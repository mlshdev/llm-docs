> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/hasoverridenewtabpage](https://developer.apple.com/documentation/webkit/wkwebextension/hasoverridenewtabpage)

# hasOverrideNewTabPage (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension provides an alternative to the default new tab page.

## Declaration

```swift
var hasOverrideNewTabPage: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension can specify a custom page that can be displayed when a new tab is opened in the app, instead of the default new tab page. The app should prompt the user for permission to use the extension’s new tab page as the default, which can be accessed via [overrideNewTabPageURL](../wkwebextensioncontext/overridenewtabpageurl.md) on an extension context.

# hasOverrideNewTabPage (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension provides an alternative to the default new tab page.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasOverrideNewTabPage;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension can specify a custom page that can be displayed when a new tab is opened in the app, instead of the default new tab page. The app should prompt the user for permission to use the extension’s new tab page as the default, which can be accessed via [overrideNewTabPageURL](../wkwebextensioncontext/overridenewtabpageurl.md) on an extension context.
