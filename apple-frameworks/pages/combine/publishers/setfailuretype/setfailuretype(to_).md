> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/setfailuretype/setfailuretype(to:)](https://developer.apple.com/documentation/combine/publishers/setfailuretype/setfailuretype(to:))

# setFailureType(to:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Changes the failure type declared by the upstream publisher.

## Declaration

```swift
func setFailureType<E>(to failure: E.Type) -> Publishers.SetFailureType<Upstream, E> where E : Error
```

<a id="return-value"></a>

## Return Value

A publisher that appears to send the specified failure type.

<a id="discussion"></a>

## Discussion

Use [setFailureType(to:)](../../publisher/setfailuretype%28to_%29.md) when you need set the error type of a publisher that cannot fail.

Conversely, if the upstream can fail, you would use [mapError(\_:)](../../publisher/maperror%28__%29.md) to provide instructions on converting the error types to needed by the downstream publisher’s inputs.

The following example has two publishers with mismatched error types: `pub1`’s error type is [Never](https://developer.apple.com/documentation/swift/never), and `pub2`’s error type is [Error](https://developer.apple.com/documentation/swift/error). Because of the mismatch, the [combineLatest(\_:)](../../publisher/combinelatest%28__%29.md) operator requires that `pub1` use [setFailureType(to:)](../../publisher/setfailuretype%28to_%29.md) to make it appear that `pub1` can produce the [Error](https://developer.apple.com/documentation/swift/error) type, like `pub2` can.

```swift
let pub1 = [0, 1, 2, 3, 4, 5].publisher
let pub2 = CurrentValueSubject<Int, Error>(0)
let cancellable = pub1
    .setFailureType(to: Error.self)
    .combineLatest(pub2)
    .sink(
        receiveCompletion: { print ("completed: \($0)") },
        receiveValue: { print ("value: \($0)")}
     )

// Prints: "value: (5, 0)".
```
