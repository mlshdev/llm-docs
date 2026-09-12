> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/javascriptcanopenwindowsautomatically](https://developer.apple.com/documentation/webkit/webpreferences/javascriptcanopenwindowsautomatically)

# javaScriptCanOpenWindowsAutomatically (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether or not the web view allows JavaScript to open windows automatically.

## Declaration

```swift
var javaScriptCanOpenWindowsAutomatically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set to [true](https://developer.apple.com/documentation/swift/true) if the web view should allow JavaScript to open windows automatically, otherwise [false](https://developer.apple.com/documentation/swift/false).

Explicit calls to a JavaScript window opener that are activated by user action (such as a button click) are not affected by this setting.

## See Also

### Enabling JavaScript

- [isJavaScriptEnabled](isjavascriptenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript.

# javaScriptCanOpenWindowsAutomatically (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether or not the web view allows JavaScript to open windows automatically.

## Declaration

```objectivec
@property (nonatomic) BOOL javaScriptCanOpenWindowsAutomatically;
```

<a id="Discussion"></a>

## Discussion

Set to [true](https://developer.apple.com/documentation/swift/true) if the web view should allow JavaScript to open windows automatically, otherwise [false](https://developer.apple.com/documentation/swift/false).

Explicit calls to a JavaScript window opener that are activated by user action (such as a button click) are not affected by this setting.

## See Also

### Enabling JavaScript

- [javaScriptEnabled](isjavascriptenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript.
