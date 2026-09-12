> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/tryprefix(while:)](https://developer.apple.com/documentation/combine/publisher/tryprefix(while:))

# tryPrefix(while:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Republishes elements while an error-throwing predicate closure indicates publishing should continue.

## Declaration

```swift
func tryPrefix(while predicate: @escaping (Self.Output) throws -> Bool) -> Publishers.TryPrefixWhile<Self>
```

## Parameters

- `predicate`: A closure that takes an element as its parameter and returns a Boolean value indicating whether publishing should continue.

<a id="return-value"></a>

## Return Value

A publisher that passes through elements until the predicate throws or indicates publishing should finish.

<a id="discussion"></a>

## Discussion

Use [tryPrefix(while:)](tryprefix%28while_%29.md) to emit values from the upstream publisher that meet a condition you specify in an error-throwing closure. The publisher finishes when the closure returns `false`. If the closure throws an error, the publisher fails with that error.

```swift
struct OutOfRangeError: Error {}

let numbers = (0...10).reversed()
cancellable = numbers.publisher
    .tryPrefix {
        guard $0 != 0 else {throw OutOfRangeError()}
        return $0 <= numbers.max()!
    }
    .sink(
        receiveCompletion: { print ("completion: \($0)", terminator: " ") },
        receiveValue: { print ("\($0)", terminator: " ") }
    )

// Prints: "10 9 8 7 6 5 4 3 2 1 completion: failure(OutOfRangeError()) "
```

## See Also

### Applying sequence operations to elements

- [drop(untilOutputFrom:)](drop%28untiloutputfrom_%29.md): Ignores elements from the upstream publisher until it receives an element from a second publisher.
- [dropFirst(\_:)](dropfirst%28__%29.md): Omits the specified number of elements before republishing subsequent elements.
- [drop(while:)](drop%28while_%29.md): Omits elements from the upstream publisher until a given closure returns false, before republishing all remaining elements.
- [tryDrop(while:)](trydrop%28while_%29.md): Omits elements from the upstream publisher until an error-throwing closure returns false, before republishing all remaining elements.
- [append(\_:)](append%28__%29-1qb8d.md): Appends a publisher’s output with the specified elements.
- [append(\_:)](append%28__%29-69sdn.md): Appends a publisher’s output with the specified sequence.
- [append(\_:)](append%28__%29-5yh02.md): Appends the output of this publisher with the elements emitted by the given publisher.
- [prepend(\_:)](prepend%28__%29-7wk5l.md): Prefixes a publisher’s output with the specified values.
- [prepend(\_:)](prepend%28__%29-v9sb.md): Prefixes a publisher’s output with the specified sequence.
- [prepend(\_:)](prepend%28__%29-5dj9c.md): Prefixes the output of this publisher with the elements emitted by the given publisher.
- [prefix(\_:)](prefix%28__%29.md): Republishes elements up to the specified maximum count.
- [prefix(while:)](prefix%28while_%29.md): Republishes elements while a predicate closure indicates publishing should continue.
- [prefix(untilOutputFrom:)](prefix%28untiloutputfrom_%29.md): Republishes elements until another publisher emits an element.
