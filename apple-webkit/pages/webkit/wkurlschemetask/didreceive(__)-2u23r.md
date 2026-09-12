> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask/didreceive(_:)-2u23r](https://developer.apple.com/documentation/webkit/wkurlschemetask/didreceive(_:)-2u23r)

# didReceive(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a URL response to WebKit with information about the requested resource.

## Declaration

```swift
func didReceive(_ response: URLResponse)
```

## Parameters

- `response`: The response to return to WebKit. Your response object must include the MIME type of the requested resource.

<a id="Discussion"></a>

## Discussion

Call this method to provide WebKit with the MIME type of the requested resource and its expected size. You must call this method at least once for each task, and you may call it multiple times if needed. Always call it before sending any data back to WebKit using the [didReceive(\_:)](didreceive%28__%29-8t5f8.md) method.

It is a programmer error to call this method after calling the [didFinish()](didfinish%28%29.md) method of the same task object. It is also a programmer error to call this method after WebKit calls the [webView(\_:stop:)](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object. If you do, this method raises an exception in both cases.

## See Also

### Reporting Progress Back to WebKit

- [didReceive(\_:)](didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.
- [didFinish()](didfinish%28%29.md): Signals the successful completion of the task.

# didReceiveResponse: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a URL response to WebKit with information about the requested resource.

## Declaration

```objectivec
- (void) didReceiveResponse:(NSURLResponse *) response;
```

## Parameters

- `response`: The response to return to WebKit. Your response object must include the MIME type of the requested resource.

<a id="Discussion"></a>

## Discussion

Call this method to provide WebKit with the MIME type of the requested resource and its expected size. You must call this method at least once for each task, and you may call it multiple times if needed. Always call it before sending any data back to WebKit using the [didReceiveData:](didreceive%28__%29-8t5f8.md) method.

It is a programmer error to call this method after calling the [didFinish](didfinish%28%29.md) method of the same task object. It is also a programmer error to call this method after WebKit calls the [webView:stopURLSchemeTask:](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object. If you do, this method raises an exception in both cases.

## See Also

### Reporting Progress Back to WebKit

- [didReceiveData:](didreceive%28__%29-8t5f8.md): Sends some or all of the resource data to WebKit.
- [didFinish](didfinish%28%29.md): Signals the successful completion of the task.
