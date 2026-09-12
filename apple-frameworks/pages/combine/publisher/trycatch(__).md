> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/trycatch(_:)](https://developer.apple.com/documentation/combine/publisher/trycatch(_:))

# tryCatch(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Handles errors from an upstream publisher by either replacing it with another publisher or throwing a new error.

## Declaration

```swift
func tryCatch<P>(_ handler: @escaping (Self.Failure) throws -> P) -> Publishers.TryCatch<Self, P> where P : Publisher, Self.Output == P.Output
```

## Parameters

- `handler`: A throwing closure that accepts the upstream failure as input. This closure can either replace the upstream publisher with a new one, or throw a new error to the downstream subscriber.

<a id="return-value"></a>

## Return Value

A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher, or an error.

<a id="discussion"></a>

## Discussion

Use [tryCatch(\_:)](trycatch%28__%29.md) to decide how to handle from an upstream publisher by either replacing the publisher with a new publisher, or throwing a new error.

In the example below, an array publisher emits values that a [tryMap(\_:)](trymap%28__%29.md) operator evaluates to ensure the values are greater than zero. If the values aren’t greater than zero, the operator throws an error to the downstream subscriber to let it know there was a problem. The subscriber, [tryCatch(\_:)](trycatch%28__%29.md), replaces the error with a new publisher using [Just](../just.md) to publish a final value before the stream ends normally.

```swift
enum SimpleError: Error { case error }
var numbers = [5, 4, 3, 2, 1, -1, 7, 8, 9, 10]

cancellable = numbers.publisher
   .tryMap { v in
        if v > 0 {
            return v
        } else {
            throw SimpleError.error
        }
}
  .tryCatch { error in
      Just(0) // Send a final value before completing normally.
              // Alternatively, throw a new error to terminate the stream.
}
  .sink(receiveCompletion: { print ("Completion: \($0).") },
        receiveValue: { print ("Received \($0).") }
  )
//    Received 5.
//    Received 4.
//    Received 3.
//    Received 2.
//    Received 1.
//    Received 0.
//    Completion: finished.
```

## See Also

### Handling errors

- [assertNoFailure(\_:file:line:)](assertnofailure%28__file_line_%29.md): Raises a fatal error when its upstream publisher fails, and otherwise republishes all received input.
- [catch(\_:)](catch%28__%29.md): Handles errors from an upstream publisher by replacing it with another publisher.
- [retry(\_:)](retry%28__%29.md): Attempts to recreate a failed subscription with the upstream publisher up to the number of times you specify.
