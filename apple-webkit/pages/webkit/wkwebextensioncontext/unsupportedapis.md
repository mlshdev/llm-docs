> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/unsupportedapis](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/unsupportedapis)

# unsupportedAPIs (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Specifies unsupported APIs for this extension, making them `undefined` in JavaScript.

## Declaration

```swift
var unsupportedAPIs: Set<String>! { get set }
```

<a id="discussion"></a>

## Discussion

This property allows the app to specify a subset of web extension APIs that it chooses not to support, effectively making these APIs `undefined` within the extension’s JavaScript contexts. This enables extensions to employ feature detection techniques for unsupported APIs, allowing them to adapt their behavior based on the APIs actually supported by the app. Setting is only allowed when the context is not loaded. Only certain APIs can be specified here, particularly those within the `browser` namespace and other dynamic functions and properties, anything else will be silently ignored.

> **Note**

> For example, specifying `"browser.windows.create"` and `"browser.storage"` in this set will result in the `browser.windows.create()` function and `browser.storage` property being `undefined`.

# unsupportedAPIs (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Specifies unsupported APIs for this extension, making them `undefined` in JavaScript.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSSet<NSString *> * unsupportedAPIs;
```

<a id="discussion"></a>

## Discussion

This property allows the app to specify a subset of web extension APIs that it chooses not to support, effectively making these APIs `undefined` within the extension’s JavaScript contexts. This enables extensions to employ feature detection techniques for unsupported APIs, allowing them to adapt their behavior based on the APIs actually supported by the app. Setting is only allowed when the context is not loaded. Only certain APIs can be specified here, particularly those within the `browser` namespace and other dynamic functions and properties, anything else will be silently ignored.

> **Note**

> For example, specifying `"browser.windows.create"` and `"browser.storage"` in this set will result in the `browser.windows.create()` function and `browser.storage` property being `undefined`.
