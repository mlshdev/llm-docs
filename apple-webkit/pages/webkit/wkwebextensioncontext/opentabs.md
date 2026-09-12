> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/opentabs](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/opentabs)

# openTabs (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A set of open tabs in all open windows that are exposed to this extension.

## Declaration

```swift
var openTabs: Set<AnyHashable> { get }
```

<a id="discussion"></a>

## Discussion

Provides a set of tabs in all open windows that are visible to the extension, as updated by the [didOpenTab(\_:)](didopentab%28__%29.md) and [didCloseTab:windowIsClosing:](didclosetab_windowisclosing_.md) methods.

Initially populated by the tabs in the windows returned by the extension controller delegate method [webExtensionController(\_:openWindowsFor:)](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md).

## See Also

### Related Documentation

- [didOpenTab(\_:)](didopentab%28__%29.md): Called by the app when a new tab is opened to fire appropriate events with only this extension.

# openTabs (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A set of open tabs in all open windows that are exposed to this extension.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<id<WKWebExtensionTab>> * openTabs;
```

<a id="discussion"></a>

## Discussion

Provides a set of tabs in all open windows that are visible to the extension, as updated by the [didOpenTab:](didopentab%28__%29.md) and [didCloseTab:windowIsClosing:](didclosetab_windowisclosing_.md) methods.

Initially populated by the tabs in the windows returned by the extension controller delegate method [webExtensionController:openWindowsForExtensionContext:](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__openwindowsfor_%29.md).

## See Also

### Related Documentation

- [didOpenTab:](didopentab%28__%29.md): Called by the app when a new tab is opened to fire appropriate events with only this extension.
- [didCloseTab:windowIsClosing:](didclosetab_windowisclosing_.md): Called by the app when a tab is closed to fire appropriate events with only this extension.
