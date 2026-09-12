> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/hasoptionspage](https://developer.apple.com/documentation/webkit/wkwebextension/hasoptionspage)

# hasOptionsPage (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has an options page.

## Declaration

```swift
var hasOptionsPage: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension includes a dedicated options page where users can customize settings. The app should provide access to this page through a user interface element, which can be accessed via [optionsPageURL](../wkwebextensioncontext/optionspageurl.md) on an extension context.

# hasOptionsPage (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension has an options page.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasOptionsPage;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension includes a dedicated options page where users can customize settings. The app should provide access to this page through a user interface element, which can be accessed via [optionsPageURL](../wkwebextensioncontext/optionspageurl.md) on an extension context.
