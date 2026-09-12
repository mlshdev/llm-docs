> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/haspersistentbackgroundcontent](https://developer.apple.com/documentation/webkit/wkwebextension/haspersistentbackgroundcontent)

# hasPersistentBackgroundContent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has background content that stays in memory as long as the extension is loaded.

## Declaration

```swift
var hasPersistentBackgroundContent: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> Note that extensions are only allowed to have persistent background content on macOS. An [WKWebExtension.Error.Code.invalidBackgroundPersistence](error/code/invalidbackgroundpersistence.md) error will be reported on iOS, iPadOS, and visionOS if an attempt is made to load a persistent extension.

# hasPersistentBackgroundContent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has background content that stays in memory as long as the extension is loaded.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasPersistentBackgroundContent;
```

<a id="discussion"></a>

## Discussion

> **Note**

> Note that extensions are only allowed to have persistent background content on macOS. An [WKWebExtensionErrorInvalidBackgroundPersistence](error/code/invalidbackgroundpersistence.md) error will be reported on iOS, iPadOS, and visionOS if an attempt is made to load a persistent extension.
