> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webuidelegate/webview(_:validate:defaultvalidation:)](https://developer.apple.com/documentation/webkit/webuidelegate/webview(_:validate:defaultvalidation:))

# webView(\_:validate:defaultValidation:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value that indicates whether the specified user interface item is valid.

## Declaration

```swift
optional func webView(_ webView: WebView!, validate item: (any NSValidatedUserInterfaceItem)!, defaultValidation: Bool) -> Bool
```

## Parameters

- `webView`: The web view that sent the message.
- `item`: The user interface item being validated.
- `defaultValidation`: [true](https://developer.apple.com/documentation/swift/true) if the web view believes the user interface item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified user interface item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

See [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations) and [NSValidatedUserInterfaceItem](https://developer.apple.com/documentation/appkit/nsvalidateduserinterfaceitem) for more information about user interface validation. If you do not implement this method, the value of `defaultValidation` is used.

## See Also

### Controlling Other Behaviors

- [webView(\_:shouldPerformAction:fromSender:)](webview%28__shouldperformaction_fromsender_%29.md): Deprecated. Returns a Boolean value that indicates whether the action sent by the specified object should be performed.

# webView:validateUserInterfaceItem:defaultValidation: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns a Boolean value that indicates whether the specified user interface item is valid.

## Declaration

```objectivec
- (BOOL) webView:(WebView *) webView validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item defaultValidation:(BOOL) defaultValidation;
```

## Parameters

- `webView`: The web view that sent the message.
- `item`: The user interface item being validated.
- `defaultValidation`: [true](https://developer.apple.com/documentation/swift/true) if the web view believes the user interface item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified user interface item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

See [NSUserInterfaceValidations](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations) and [NSValidatedUserInterfaceItem](https://developer.apple.com/documentation/appkit/nsvalidateduserinterfaceitem) for more information about user interface validation. If you do not implement this method, the value of `defaultValidation` is used.

## See Also

### Controlling Other Behaviors

- [webView:shouldPerformAction:fromSender:](webview%28__shouldperformaction_fromsender_%29.md): Deprecated. Returns a Boolean value that indicates whether the action sent by the specified object should be performed.
