> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask/didreceive(_:)-8t5f8](https://developer.apple.com/documentation/webkit/wkurlschemetask/didreceive(_:)-8t5f8)

# didReceive(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Sends some or all of the resource data to WebKit.

## Declaration

```swift
func didReceive(_ data: Data)
```

## Parameters

- `data`: Data for the resource. This object may contain all of the data or only some of it.

<a id="Discussion"></a>

## Discussion

Call this method to deliver any resource data back to WebKit. If you load the data incrementally, you may call this method multiple times to deliver each new portion of the data. Each time you call this method, WebKit appends the new data to any previously received data.

This method raises an exception if you call it before the [didReceive(\_:)](didreceive%28__%29-2u23r.md) method, or after the [didFinish()](didfinish%28%29.md) method. It also raises an exception if you call it after WebKit calls the [webView(\_:stop:)](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.

## See Also

### Reporting Progress Back to WebKit

- [didReceive(\_:)](didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didFinish()](didfinish%28%29.md): Signals the successful completion of the task.

# didReceiveData: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Sends some or all of the resource data to WebKit.

## Declaration

```objectivec
- (void) didReceiveData:(NSData *) data;
```

## Parameters

- `data`: Data for the resource. This object may contain all of the data or only some of it.

<a id="Discussion"></a>

## Discussion

Call this method to deliver any resource data back to WebKit. If you load the data incrementally, you may call this method multiple times to deliver each new portion of the data. Each time you call this method, WebKit appends the new data to any previously received data.

This method raises an exception if you call it before the [didReceiveResponse:](didreceive%28__%29-2u23r.md) method, or after the [didFinish](didfinish%28%29.md) method. It also raises an exception if you call it after WebKit calls the [webView:stopURLSchemeTask:](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.

## See Also

### Reporting Progress Back to WebKit

- [didReceiveResponse:](didreceive%28__%29-2u23r.md): Returns a URL response to WebKit with information about the requested resource.
- [didFinish](didfinish%28%29.md): Signals the successful completion of the task.
