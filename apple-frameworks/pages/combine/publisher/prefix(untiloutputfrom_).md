> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/prefix(untiloutputfrom:)](https://developer.apple.com/documentation/combine/publisher/prefix(untiloutputfrom:))

# prefix(untilOutputFrom:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Republishes elements until another publisher emits an element.

## Declaration

```swift
func prefix<P>(untilOutputFrom publisher: P) -> Publishers.PrefixUntilOutput<Self, P> where P : Publisher
```

## Parameters

- `publisher`: A second publisher.

<a id="return-value"></a>

## Return Value

A publisher that republishes elements until the second publisher publishes an element.

<a id="discussion"></a>

## Discussion

After the second publisher publishes an element, the publisher returned by this method finishes.

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
- [tryPrefix(while:)](tryprefix%28while_%29.md): Republishes elements while an error-throwing predicate closure indicates publishing should continue.
