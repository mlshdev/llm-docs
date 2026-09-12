> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/inserttextplaceholder(size:completionhandler:)](https://developer.apple.com/documentation/browserenginekit/betextinput/inserttextplaceholder(size:completionhandler:))

# insertTextPlaceholder(size:completionHandler:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts a placeholder object to reserve visual space during text input.

## Declaration

```swift
func insertTextPlaceholder(size: CGSize, completionHandler: @escaping @Sendable (UITextPlaceholder) -> Void)
```

```swift
func insertTextPlaceholder(size: CGSize) async -> UITextPlaceholder
```

<a id="discussion"></a>

## Discussion

If `size.height` is less than or equal to zero, then the placeholder is inline and line height. If `size.height` is greater than zero, then the placeholder is a paragraph of height `size.height`.

# insertTextPlaceholderWithSize:completionHandler: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Inserts a placeholder object to reserve visual space during text input.

## Declaration

```objectivec
- (void) insertTextPlaceholderWithSize:(CGSize) size completionHandler:(void (^)(UITextPlaceholder *)) completionHandler;
```

<a id="discussion"></a>

## Discussion

If `size.height` is less than or equal to zero, then the placeholder is inline and line height. If `size.height` is greater than zero, then the placeholder is a paragraph of height `size.height`.
