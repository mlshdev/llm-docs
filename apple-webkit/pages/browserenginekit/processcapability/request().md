> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/request()](https://developer.apple.com/documentation/browserenginekit/processcapability/request())

# request()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Requests the capability to be granted to the current process.

## Declaration

```swift
func request() throws -> ProcessCapability.Grant
```

<a id="discussion"></a>

## Discussion

Returns the granted capability or throws an error if it can not be granted.
