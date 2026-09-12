> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkurlschemetask/didfailwitherror(_:)](https://developer.apple.com/documentation/webkit/wkurlschemetask/didfailwitherror(_:))

# didFailWithError(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Completes the task and reports the specified error back to WebKit.

## Declaration

```swift
func didFailWithError(_ error: any Error)
```

## Parameters

- `error`: The error that caused the task to fail.

<a id="Discussion"></a>

## Discussion

This method signals to WebKit that the task is complete, but failed with the specified error. Use this method to report any errors during the load process.

After calling this method, it’s a programmer error to call other methods of the task object, and those methods raise an exception if you do. This method raises an exception if you call it after WebKit calls the [webView(\_:stop:)](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.

# didFailWithError: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Completes the task and reports the specified error back to WebKit.

## Declaration

```objectivec
- (void) didFailWithError:(NSError *) error;
```

## Parameters

- `error`: The error that caused the task to fail.

<a id="Discussion"></a>

## Discussion

This method signals to WebKit that the task is complete, but failed with the specified error. Use this method to report any errors during the load process.

After calling this method, it’s a programmer error to call other methods of the task object, and those methods raise an exception if you do. This method raises an exception if you call it after WebKit calls the [webView:stopURLSchemeTask:](../wkurlschemehandler/webview%28__stop_%29.md) method of the corresponding handler object.
