> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformexecuteasync(_:_:_:)](https://developer.apple.com/documentation/security/sectransformexecuteasync(_:_:_:))

# SecTransformExecuteAsync(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Executes transform or transform group asynchronously.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformExecuteAsync(_ transformRef: SecTransform, _ deliveryQueue: dispatch_queue_t, _ deliveryBlock: @escaping SecMessageBlock)
```

## Parameters

- `transformRef`: The transform to execute.
- `deliveryQueue`: A dispatch queue on which to deliver the results of this transform.
- `deliveryBlock`: A SecMessageBlock to asynchronously receive the results of the transform.

<a id="Discussion"></a>

## Discussion

SecTransformExecuteAsync works just like the SecTransformExecute API except that it returns results to the deliveryBlock. There may be multple results depending on the transform. The block knows that the processing is complete when the isFinal parameter is set to true. If an error occurs the block’s error parameter is set and the isFinal parameter will be set to true.

# SecTransformExecuteAsync (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Executes transform or transform group asynchronously.

> SecTransform is no longer supported

## Declaration

```objectivec
extern void SecTransformExecuteAsync(SecTransformRef transformRef, dispatch_queue_t deliveryQueue, SecMessageBlock deliveryBlock);
```

## Parameters

- `transformRef`: The transform to execute.
- `deliveryQueue`: A dispatch queue on which to deliver the results of this transform.
- `deliveryBlock`: A SecMessageBlock to asynchronously receive the results of the transform.

<a id="Discussion"></a>

## Discussion

SecTransformExecuteAsync works just like the SecTransformExecute API except that it returns results to the deliveryBlock. There may be multple results depending on the transform. The block knows that the processing is complete when the isFinal parameter is set to true. If an error occurs the block’s error parameter is set and the isFinal parameter will be set to true.
