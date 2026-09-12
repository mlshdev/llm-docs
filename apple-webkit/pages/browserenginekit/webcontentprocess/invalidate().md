> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/webcontentprocess/invalidate()](https://developer.apple.com/documentation/browserenginekit/webcontentprocess/invalidate())

# invalidate()

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Stops the web content process.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

The system halts the web content process for your browser app when you call this function. In platform versions earlier than iOS 18, the system marks the web content process as no longer in use, and might stop it at a later time to free its resources. The system doesn’t call the interruption handler that you passed when you launched the extension.

After you call this method, other method calls on the web content process throw errors.

## See Also

### Creating and invalidating extension processes

- [init(bundleIdentifier:onInterruption:)](init%28bundleidentifier_oninterruption_%29.md): Launches a web content process asynchronously.
