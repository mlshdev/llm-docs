> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/allow(_:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/allow(_:completionhandler:))

# allow(\_:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Adds a previously blocked URL to the web content filter’s allow list.

## Declaration

```swift
func allow(_ url: URL, completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func allow(_ url: URL) async throws -> Bool
```

## Parameters

- `url`: The URL to unblock.
- `completionHandler`: A closure that the system invokes when the add operation finishes. The closure returns `true` on success; `false`, otherwise.

# allowURL:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+

Adds a previously blocked URL to the web content filter’s allow list.

## Declaration

```objectivec
- (void) allowURL:(NSURL *) url completionHandler:(void (^)(BOOL didAllow, NSError *error)) completionHandler;
```

## Parameters

- `url`: The URL to unblock.
- `completionHandler`: A closure that the system invokes when the add operation finishes. The closure returns `true` on success; `false`, otherwise.
