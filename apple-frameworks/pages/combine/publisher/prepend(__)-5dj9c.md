> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/prepend(_:)-5dj9c](https://developer.apple.com/documentation/combine/publisher/prepend(_:)-5dj9c)

# prepend(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Prefixes the output of this publisher with the elements emitted by the given publisher.

## Declaration

```swift
func prepend<P>(_ publisher: P) -> Publishers.Concatenate<P, Self> where P : Publisher, Self.Failure == P.Failure, Self.Output == P.Output
```

## Parameters

- `publisher`: The prefixing publisher.

<a id="return-value"></a>

## Return Value

A publisher that prefixes the prefixing publisher’s elements prior to this publisher’s elements.

<a id="discussion"></a>

## Discussion

Use [prepend(\_:)](prepend%28__%29-5dj9c.md) to publish values from two publishers when you need to prepend one publisher’s elements to another.

In the example below, a publisher of `prefixValues` publishes its elements before the `dataElements` publishes its elements:

```swift
let prefixValues = [0, 1, 255]
let dataElements = (0...10)
cancellable = dataElements.publisher
    .prepend(prefixValues.publisher)
    .sink { print("\($0)", terminator: " ") }

// Prints: "0 1 255 0 1 2 3 4 5 6 7 8 9 10"
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
- [prefix(\_:)](prefix%28__%29.md): Republishes elements up to the specified maximum count.
- [prefix(while:)](prefix%28while_%29.md): Republishes elements while a predicate closure indicates publishing should continue.
- [tryPrefix(while:)](tryprefix%28while_%29.md): Republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [prefix(untilOutputFrom:)](prefix%28untiloutputfrom_%29.md): Republishes elements until another publisher emits an element.
