> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask/didfinish()](https://developer.apple.com/documentation/webkit/wkurlschemetask/didfinish())

# didFinish() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Signals the successful completion of the task.

## Declaration

```swift
func didFinish()
```

<a id="Discussion"></a>

## Discussion

This method signals to WebKit that it has all of the resource’s data and the task is now complete. Call this method after sending a response and the resource data to WebKit using the [didReceive(\_:)](didreceive%28__%29-2u23r.md) and [didReceive(\_:)](didreceive%28__%29-8t5f8.md) methods.

This method raises an exception if you call it before the [didReceive(\_:)](didreceive%28__%29-2u23r.md) method, or if the task is already complete. It also raises an exception if you call it after WebKit calls the [webView(\_:stop:)](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.

## See Also

### Reporting Progress Back to WebKit

- [didReceive(\_:)](didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didReceive(\_:)](didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.

# didFinish (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Signals the successful completion of the task.

## Declaration

```objectivec
- (void) didFinish;
```

<a id="Discussion"></a>

## Discussion

This method signals to WebKit that it has all of the resource’s data and the task is now complete. Call this method after sending a response and the resource data to WebKit using the [didReceiveResponse:](didreceive%28__%29-2u23r.md) and [didReceiveData:](didreceive%28__%29-8t5f8.md) methods.

This method raises an exception if you call it before the [didReceiveResponse:](didreceive%28__%29-2u23r.md) method, or if the task is already complete. It also raises an exception if you call it after WebKit calls the [webView:stopURLSchemeTask:](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.

## See Also

### Reporting Progress Back to WebKit

- [didReceiveResponse:](didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didReceiveData:](didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.
