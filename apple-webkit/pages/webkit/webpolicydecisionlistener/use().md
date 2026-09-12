> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydecisionlistener/use()](https://developer.apple.com/documentation/webkit/webpolicydecisionlistener/use())

# use() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to use the resource.

## Declaration

```swift
func use()
```

<a id="Discussion"></a>

## Discussion

If there are pending policy decisions, the next policy delegate method has the opportunity to decide what to do with the resource. This will be either the next navigation policy delegate (if there is a redirect), or the content policy delegate. If there are no pending policy decisions, the resource will be displayed if possible. If there is no document view available to display the resource, then the webView:unableToImplementPolicyWithError:frame: message will be sent to the web view policy delegate with an appropriate error. Invoking this method creates any new windows needed to handle the resource.

## See Also

### Related Documentation

- [registerClass(\_:representationClass:forMIMEType:)](../webview-swift.class/registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.

### Making Resource-Usage Decisions

- [download()](download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [ignore()](ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.

# use (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to use the resource.

## Declaration

```objectivec
- (void) use;
```

<a id="Discussion"></a>

## Discussion

If there are pending policy decisions, the next policy delegate method has the opportunity to decide what to do with the resource. This will be either the next navigation policy delegate (if there is a redirect), or the content policy delegate. If there are no pending policy decisions, the resource will be displayed if possible. If there is no document view available to display the resource, then the webView:unableToImplementPolicyWithError:frame: message will be sent to the web view policy delegate with an appropriate error. Invoking this method creates any new windows needed to handle the resource.

## See Also

### Related Documentation

- [registerViewClass:representationClass:forMIMEType:](../webview-swift.class/registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.

### Making Resource-Usage Decisions

- [download](download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [ignore](ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.
