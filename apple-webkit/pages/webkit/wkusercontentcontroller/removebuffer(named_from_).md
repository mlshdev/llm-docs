> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/removebuffer(named:from:)](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/removebuffer(named:from:))

# removeBuffer(named:from:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Removes a previously added data buffer from the given `WKContentWorld`.

## Declaration

```swift
@MainActor @preconcurrency func removeBuffer(named name: String, from contentWorld: WKContentWorld)
```

## Parameters

- `name`: The name of the buffer to remove.
- `contentWorld`: The `WKContentWorld` from which to remove the buffer.
