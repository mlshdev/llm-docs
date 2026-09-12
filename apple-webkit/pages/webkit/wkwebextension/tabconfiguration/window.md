> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabconfiguration/window](https://developer.apple.com/documentation/webkit/wkwebextension/tabconfiguration/window)

# window (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the window where the tab should be opened.

## Declaration

```swift
var window: (any WKWebExtensionWindow)? { get }
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, no window was specified.

# window (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Indicates the window where the tab should be opened.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<WKWebExtensionWindow> window;
```

<a id="discussion"></a>

## Discussion

If this property is `nil`, no window was specified.
