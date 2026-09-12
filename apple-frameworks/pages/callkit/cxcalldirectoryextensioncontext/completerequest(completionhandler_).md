> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/completerequest(completionhandler:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/completerequest(completionhandler:))

# completeRequest(completionHandler:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Completes the request to the extension context.

## Declaration

```swift
func completeRequest(completionHandler completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func completeRequest() async -> Bool
```

## Parameters

- `completion`: A block to be executed after the request to the extension context is completed.

  - **expired**: Whether the receiver expired during the request.

  If [true](https://developer.apple.com/documentation/swift/true), then any identification or blocking entries added by the extension context were not added to the extension.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func completeRequest() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequest(with:)](../cxcalldirectoryprovider/beginrequest%28with_%29.md). This method should be called once at the end of the block.

## See Also

### Completing Requests

- [isIncremental](isincremental.md): A Boolean value that indicates whether the request provides data incrementally.

# completeRequestWithCompletionHandler: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Completes the request to the extension context.

## Declaration

```objectivec
- (void) completeRequestWithCompletionHandler:(void (^)(BOOL expired)) completion;
```

## Parameters

- `completion`: A block to be executed after the request to the extension context is completed.

  - **expired**: Whether the receiver expired during the request.

  If [true](https://developer.apple.com/documentation/swift/true), then any identification or blocking entries added by the extension context were not added to the extension.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func completeRequest() async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Call this method on the instance of [CXCallDirectoryExtensionContext](../cxcalldirectoryextensioncontext.md) passed as an argument to the block parameter of the  [CXCallDirectoryProvider](../cxcalldirectoryprovider.md) instance method [beginRequestWithExtensionContext:](../cxcalldirectoryprovider/beginrequest%28with_%29.md). This method should be called once at the end of the block.

## See Also

### Completing Requests

- [incremental](isincremental.md): A Boolean value that indicates whether the request provides data incrementally.
