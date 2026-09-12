> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/webcontentprocess/init(bundleidentifier:oninterruption:)](https://developer.apple.com/documentation/browserenginekit/webcontentprocess/init(bundleidentifier:oninterruption:))

# init(bundleIdentifier:onInterruption:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Launches a web content process asynchronously.

## Declaration

```swift
init(bundleIdentifier: String? = nil, onInterruption: @escaping () -> Void) async throws
```

## Parameters

- `bundleIdentifier`: A unique bundle identifier for the content extension, or `nil` to use the default web content extension bundle identifier.
- `onInterruption`: A block that the system calls if the web content extension process ends abruptly.

<a id="discussion"></a>

## Discussion

Initializing a [WebContentProcess](../webcontentprocess.md) object launches a new instance of a web content extension. Control returns from this method only after the process for the new web content extension launches.

## See Also

### Creating and invalidating extension processes

- [invalidate()](invalidate%28%29.md): Stops the web content process.
