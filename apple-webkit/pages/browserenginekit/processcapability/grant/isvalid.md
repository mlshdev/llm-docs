> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/processcapability/grant/isvalid](https://developer.apple.com/documentation/browserenginekit/processcapability/grant/isvalid)

# isValid

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

A Boolean value that indicates whether the system honors a granted capability for the browser extension process.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the system grants this capability to the browser extension process and you haven’t called [invalidate()](invalidate%28%29.md), then this property is `true`; otherwise, it’s false.

## See Also

### Testing and changing validity

- [invalidate()](invalidate%28%29.md): Invalidates the grant, removing the capability from the process it was granted to.
