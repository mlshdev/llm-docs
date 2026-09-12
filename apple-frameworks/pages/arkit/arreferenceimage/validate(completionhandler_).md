> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/validate(completionhandler:)](https://developer.apple.com/documentation/arkit/arreferenceimage/validate(completionhandler:))

# validate(completionHandler:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Determines whether the reference image is valid.

## Declaration

```swift
func validate(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func validate() async throws
```

<a id="Discussion"></a>

## Discussion

ARKit considers certain images invalid for image tracking (for example, an image that’s all white). Call this function on a reference image you create programmatically to make sure ARKit can track it, before passing it in to your session’s [detectionImages](../arworldtrackingconfiguration/detectionimages.md) array.

You only need this function when you create a reference image programmatically, because Xcode performs this validation for you when you create a reference image in an asset catalog.

# validateWithCompletionHandler: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Determines whether the reference image is valid.

## Declaration

```objectivec
- (void) validateWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

ARKit considers certain images invalid for image tracking (for example, an image that’s all white). Call this function on a reference image you create programmatically to make sure ARKit can track it, before passing it in to your session’s [detectionImages](../arworldtrackingconfiguration/detectionimages.md) array.

You only need this function when you create a reference image programmatically, because Xcode performs this validation for you when you create a reference image in an asset catalog.
