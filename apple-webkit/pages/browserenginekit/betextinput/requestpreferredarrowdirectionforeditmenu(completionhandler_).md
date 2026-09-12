> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/requestpreferredarrowdirectionforeditmenu(completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/requestpreferredarrowdirectionforeditmenu(completionhandler:))

# requestPreferredArrowDirectionForEditMenu(completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

Invoked by the system to gather context, including the client’s preference for how the edit menu should be positioned relative to the selected text.

## Declaration

```swift
func requestPreferredArrowDirectionForEditMenu(completionHandler: @escaping @Sendable (UIEditMenuArrowDirection) -> Void)
```

```swift
func requestPreferredArrowDirectionForEditMenu() async -> UIEditMenuArrowDirection
```

# requestPreferredArrowDirectionForEditMenuWithCompletionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

Invoked by the system to gather context, including the client’s preference for how the edit menu should be positioned relative to the selected text.

## Declaration

```objectivec
- (void) requestPreferredArrowDirectionForEditMenuWithCompletionHandler:(void (^)(UIEditMenuArrowDirection )) completionHandler;
```
