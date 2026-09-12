> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkpreferences/javascriptenabled](https://developer.apple.com/documentation/webkit/wkpreferences/javascriptenabled)

# javaScriptEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether JavaScript is enabled.

> Use WKWebpagePreferences.allowsContentJavaScript to disable content JavaScript on a per-navigation basis

## Declaration

```swift
var javaScriptEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). Setting this property to [false](https://developer.apple.com/documentation/swift/false) disables JavaScripts that are loaded or executed by the webpage. This setting does not affect user scripts. See [WKUserContentController](../wkusercontentcontroller.md).

## See Also

### Deprecated

- [javaEnabled](javaenabled.md): Deprecated. A Boolean value that indicates whether Java is enabled.
- [plugInsEnabled](pluginsenabled.md): Deprecated. A Boolean value that indicates whether plug-ins are enabled.

# javaScriptEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether JavaScript is enabled.

> Use WKWebpagePreferences.allowsContentJavaScript to disable content JavaScript on a per-navigation basis

## Declaration

```objectivec
@property (nonatomic) BOOL javaScriptEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). Setting this property to [false](https://developer.apple.com/documentation/swift/false) disables JavaScripts that are loaded or executed by the webpage. This setting does not affect user scripts. See [WKUserContentController](../wkusercontentcontroller.md).

## See Also

### Deprecated

- [javaEnabled](javaenabled.md): Deprecated. A Boolean value that indicates whether Java is enabled.
- [plugInsEnabled](pluginsenabled.md): Deprecated. A Boolean value that indicates whether plug-ins are enabled.
