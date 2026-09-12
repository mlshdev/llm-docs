> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/append(_:)-5yh02](https://developer.apple.com/documentation/combine/publisher/append(_:)-5yh02)

# append(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends the output of this publisher with the elements emitted by the given publisher.

## Declaration

```swift
func append<P>(_ publisher: P) -> Publishers.Concatenate<Self, P> where P : Publisher, Self.Failure == P.Failure, Self.Output == P.Output
```

## Parameters

- `publisher`: The appending publisher.

<a id="return-value"></a>

## Return Value

A publisher that appends the appending publisher’s elements after this publisher’s elements.

<a id="discussion"></a>

## Discussion

Use [append(\_:)](append%28__%29-5yh02.md) to append the output of one publisher to another. The [append(\_:)](append%28__%29-5yh02.md) operator produces no elements until this publisher finishes. It then produces this publisher’s elements, followed by the given publisher’s elements. If this publisher fails with an error, the given publishers elements aren’t published.

In the example below, the `append` publisher republishes all elements from the `numbers` publisher until it finishes, then publishes all elements from the `otherNumbers` publisher:

```swift
let numbers = (0...10)
let otherNumbers = (25...35)
cancellable = numbers.publisher
    .append(otherNumbers.publisher)
    .sink { print("\($0)", terminator: " ") }

// Prints: "0 1 2 3 4 5 6 7 8 9 10 25 26 27 28 29 30 31 32 33 34 35 "
```

## See Also

### Applying sequence operations to elements

- [drop(untilOutputFrom:)](drop%28untiloutputfrom_%29.md): Ignores elements from the upstream publisher until it receives an element from a second publisher.
- [dropFirst(\_:)](dropfirst%28__%29.md): Omits the specified number of elements before republishing subsequent elements.
- [drop(while:)](drop%28while_%29.md): Omits elements from the upstream publisher until a given closure returns false, before republishing all remaining elements.
- [tryDrop(while:)](trydrop%28while_%29.md): Omits elements from the upstream publisher until an error-throwing closure returns false, before republishing all remaining elements.
- [append(\_:)](append%28__%29-1qb8d.md): Appends a publisher’s output with the specified elements.
- [append(\_:)](append%28__%29-69sdn.md): Appends a publisher’s output with the specified sequence.
- [prepend(\_:)](prepend%28__%29-7wk5l.md): Prefixes a publisher’s output with the specified values.
- [prepend(\_:)](prepend%28__%29-v9sb.md): Prefixes a publisher’s output with the specified sequence.
- [prepend(\_:)](prepend%28__%29-5dj9c.md): Prefixes the output of this publisher with the elements emitted by the given publisher.
- [prefix(\_:)](prefix%28__%29.md): Republishes elements up to the specified maximum count.
- [prefix(while:)](prefix%28while_%29.md): Republishes elements while a predicate closure indicates publishing should continue.
- [tryPrefix(while:)](tryprefix%28while_%29.md): Republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [prefix(untilOutputFrom:)](prefix%28untiloutputfrom_%29.md): Republishes elements until another publisher emits an element.
