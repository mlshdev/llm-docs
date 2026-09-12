> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/renderingprocess/init(bundleidentifier:oninterruption:)](https://developer.apple.com/documentation/browserenginekit/renderingprocess/init(bundleidentifier:oninterruption:))

# init(bundleIdentifier:onInterruption:)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Launches a rendering extension process asynchronously.

## Declaration

```swift
init(bundleIdentifier: String? = nil, onInterruption: @escaping () -> Void) async throws
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the rendering extension to launch, or `nil` to use the default bundle identifier for this app’s rendering extension.
- `onInterruption`: A block that the system calls if the rendering extension process exits abnormally.

<a id="discussion"></a>

## Discussion

Your browser app can run one instance of each of its rendering extensions. The first time you initialize this object, the system launches your rendering extension. If you subsequently initialize new instances of `RenderingProcess` using the same bundle identifier, they refer to the same process.

The system guarantees that the process launched when this initializer returns.

## See Also

### Creating and invalidating extension processes

- [invalidate()](invalidate%28%29.md): Stops the rendering process.
