> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowsercontentfilter/evaluateurl(_:completionhandler:)](https://developer.apple.com/documentation/browserkit/bebrowsercontentfilter/evaluateurl(_:completionhandler:))

# evaluateURL(\_:completionHandler:) (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```swift
func evaluateURL(_ url: URL, completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func evaluateURL(_ url: URL) async -> Bool
```

## Parameters

- `url`: The URL to be evaluated.
- `completionHandler`: The completion block to be invoked with result when evaluation is complete. Result is YES if the url should be blocked, and NO if it isn’t.

<a id="discussion"></a>

## Discussion

Evaluates whether a URL should be blocked.

# evaluateURL:completionHandler: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (void) evaluateURL:(NSURL *) url completionHandler:(void (^)(BOOL shouldBlock)) completionHandler;
```

## Parameters

- `url`: The URL to be evaluated.
- `completionHandler`: The completion block to be invoked with result when evaluation is complete. Result is YES if the url should be blocked, and NO if it isn’t.

<a id="discussion"></a>

## Discussion

Evaluates whether a URL should be blocked.
