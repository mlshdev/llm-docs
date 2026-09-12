> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvapplicationcontroller/evaluate(injavascriptcontext:completion:)](https://developer.apple.com/documentation/tvmlkit/tvapplicationcontroller/evaluate(injavascriptcontext:completion:))

# evaluate(inJavaScriptContext:completion:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Evaluates a block in the JavaScript execution queue.

> Please use SwiftUI or UIKit

## Declaration

```swift
func evaluate(inJavaScriptContext evaluation: @escaping (JSContext) -> Void, completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func evaluate(inJavaScriptContext evaluation: @escaping (JSContext) -> Void) async -> Bool
```

## Parameters

- `evaluation`: The block to be evaluated in the JavaScript execution queue.
- `completion`: The callback after the block has been executed. [true](https://developer.apple.com/documentation/swift/true) if the block was evaluated; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func evaluate(inJavaScriptContext evaluation: @escaping (JSContext) -> Void) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method adds a block to the JavaScript execution queue and invokes the completion block after the evaluation block has finished execution. The `context` block parameter is valid within the scope of the evaluation block and should not be referenced by the app outside the block.

## See Also

### Controlling and Handling Events

- [stop()](stop%28%29.md): Deprecated. Ends the app life cycle.

# evaluateInJavaScriptContext:completion: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Evaluates a block in the JavaScript execution queue.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (void) evaluateInJavaScriptContext:(void (^)(JSContext *context)) evaluation completion:(void (^)(BOOL evaluated)) completion;
```

## Parameters

- `evaluation`: The block to be evaluated in the JavaScript execution queue.
- `completion`: The callback after the block has been executed. [true](https://developer.apple.com/documentation/swift/true) if the block was evaluated; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func evaluate(inJavaScriptContext evaluation: @escaping (JSContext) -> Void) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method adds a block to the JavaScript execution queue and invokes the completion block after the evaluation block has finished execution. The `context` block parameter is valid within the scope of the evaluation block and should not be referenced by the app outside the block.

## See Also

### Controlling and Handling Events

- [stop](stop%28%29.md): Deprecated. Ends the app life cycle.
