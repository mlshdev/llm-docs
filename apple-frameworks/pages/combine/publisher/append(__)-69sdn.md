> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/append(_:)-69sdn](https://developer.apple.com/documentation/combine/publisher/append(_:)-69sdn)

# append(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Appends a publisher’s output with the specified sequence.

## Declaration

```swift
func append<S>(_ elements: S) -> Publishers.Concatenate<Self, Publishers.Sequence<S, Self.Failure>> where S : Sequence, Self.Output == S.Element
```

## Parameters

- `elements`: A sequence of elements to publish after this publisher’s elements.

<a id="return-value"></a>

## Return Value

A publisher that appends the sequence of elements after this publisher’s elements.

<a id="discussion"></a>

## Discussion

Use [append(\_:)](append%28__%29-69sdn.md) to append a sequence to the end of a publisher’s output.

In the example below, the [append(\_:)](append%28__%29-69sdn.md) publisher republishes all elements from `groundTransport` until it finishes, then publishes the members of `airTransport`:

```swift
let groundTransport = ["car", "bus", "truck", "subway", "bicycle"]
let airTransport = ["parasail", "jet", "helicopter", "rocket"]
cancellable = groundTransport.publisher
    .append(airTransport)
    .sink { print("\($0)", terminator: " ") }

// Prints: "car bus truck subway bicycle parasail jet helicopter rocket"
```

## See Also

### Applying sequence operations to elements

- [drop(untilOutputFrom:)](drop%28untiloutputfrom_%29.md): Ignores elements from the upstream publisher until it receives an element from a second publisher.
- [dropFirst(\_:)](dropfirst%28__%29.md): Omits the specified number of elements before republishing subsequent elements.
- [drop(while:)](drop%28while_%29.md): Omits elements from the upstream publisher until a given closure returns false, before republishing all remaining elements.
- [tryDrop(while:)](trydrop%28while_%29.md): Omits elements from the upstream publisher until an error-throwing closure returns false, before republishing all remaining elements.
- [append(\_:)](append%28__%29-1qb8d.md): Appends a publisher’s output with the specified elements.
- [append(\_:)](append%28__%29-5yh02.md): Appends the output of this publisher with the elements emitted by the given publisher.
- [prepend(\_:)](prepend%28__%29-7wk5l.md): Prefixes a publisher’s output with the specified values.
- [prepend(\_:)](prepend%28__%29-v9sb.md): Prefixes a publisher’s output with the specified sequence.
- [prepend(\_:)](prepend%28__%29-5dj9c.md): Prefixes the output of this publisher with the elements emitted by the given publisher.
- [prefix(\_:)](prefix%28__%29.md): Republishes elements up to the specified maximum count.
- [prefix(while:)](prefix%28while_%29.md): Republishes elements while a predicate closure indicates publishing should continue.
- [tryPrefix(while:)](tryprefix%28while_%29.md): Republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [prefix(untilOutputFrom:)](prefix%28untiloutputfrom_%29.md): Republishes elements until another publisher emits an element.
