> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/requestviewcontroller(completionhandler:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/requestviewcontroller(completionhandler:))

# requestViewController(completionHandler:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Requests an audio unit’s custom view controller.

## Declaration

```swift
func requestViewController(completionHandler: @escaping @Sendable (UIViewController?) -> Void)
```

```swift
func requestViewController() async -> UIViewController?
```

```swift
func requestViewController(completionHandler: @escaping @Sendable (NSViewController?) -> Void)
```

```swift
func requestViewController() async -> NSViewController?
```

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

The completion handler is called on a thread or dispatch queue internal to the audio unit’s implementation. If the audio unit does not implement a custom view controller, it returns `nil`. If it has a custom view controller, it instantiates the view controller and returns it. The custom view controller must be a subclass of [AUViewController](../../coreaudiokit/auviewcontroller.md).

# requestViewControllerWithCompletionHandler: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Requests an audio unit’s custom view controller.

## Declaration

```objectivec
- (void) requestViewControllerWithCompletionHandler:(void (^)(AUViewControllerBase *viewController)) completionHandler;
```

```objectivec
- (void) requestViewControllerWithCompletionHandler:(void (^)(AUViewControllerBase *viewController)) completionHandler;
```

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](../migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

The completion handler is called on a thread or dispatch queue internal to the audio unit’s implementation. If the audio unit does not implement a custom view controller, it returns `nil`. If it has a custom view controller, it instantiates the view controller and returns it. The custom view controller must be a subclass of [AUViewController](../../coreaudiokit/auviewcontroller.md).
