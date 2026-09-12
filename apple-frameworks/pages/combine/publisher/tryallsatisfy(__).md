> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/tryallsatisfy(_:)](https://developer.apple.com/documentation/combine/publisher/tryallsatisfy(_:))

# tryAllSatisfy(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.

## Declaration

```swift
func tryAllSatisfy(_ predicate: @escaping (Self.Output) throws -> Bool) -> Publishers.TryAllSatisfy<Self>
```

## Parameters

- `predicate`: A closure that evaluates each received element. Return `true` to continue, or `false` to cancel the upstream and complete. The closure may throw an error, in which case the publisher cancels the upstream publisher and fails with the thrown error.

<a id="return-value"></a>

## Return Value

A publisher that publishes a Boolean value that indicates whether all received elements pass a given predicate.

<a id="discussion"></a>

## Discussion

Use the [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md) operator to determine if all elements in a stream satisfy a criteria in an error-throwing predicate you provide. When this publisher receives an element, it runs the predicate against the element. If the predicate returns `false`, the publisher produces a `false` value and finishes. If the upstream publisher finishes normally, this publisher produces a `true` value and finishes. If the predicate throws an error, the publisher fails and passes the error to its downstream subscriber.

In the example below, an error-throwing predicate tests if each of an integer array publisher’s elements fall into the `targetRange`; the predicate throws an error if an element is zero and terminates the stream.

```swift
let targetRange = (-1...100)
let numbers = [-1, 10, 5, 0]

numbers.publisher
    .tryAllSatisfy { anInt in
        guard anInt != 0 else { throw RangeError() }
        return targetRange.contains(anInt)
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)") },
        receiveValue: { print ("value: \($0)") }
    )

// Prints: "completion: failure(RangeError())"
```

With operators similar to [reduce(\_:\_:)](reduce%28____%29.md), this publisher produces at most one value.

> **Note**

> Upon receiving any request greater than zero, this publisher requests unlimited elements from the upstream publisher.

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Output` conforms to `Equatable`. Publishes a Boolean value upon receiving an element equal to the argument.
- [contains(where:)](contains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the predicate closure.
- [tryContains(where:)](trycontains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given predicate.
