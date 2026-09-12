> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/remove(_:willinserttext:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/remove(_:willinserttext:completionhandler:))

# remove(\_:willInsertText:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Removes a placeholder object from the text input view.

## Declaration

```swift
func remove(_ placeholder: UITextPlaceholder, willInsertText: Bool, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func remove(_ placeholder: UITextPlaceholder, willInsertText: Bool) async
```

# removeTextPlaceholder:willInsertText:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Removes a placeholder object from the text input view.

## Declaration

```objectivec
- (void) removeTextPlaceholder:(UITextPlaceholder *) placeholder willInsertText:(BOOL) willInsertText completionHandler:(void (^)()) completionHandler;
```
