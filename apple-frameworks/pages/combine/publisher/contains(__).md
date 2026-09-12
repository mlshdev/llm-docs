> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/contains(_:)](https://developer.apple.com/documentation/combine/publisher/contains(_:))

# contains(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes a Boolean value upon receiving an element equal to the argument.

## Declaration

```swift
func contains(_ output: Self.Output) -> Publishers.Contains<Self>
```

## Parameters

- `output`: An element to match against.

<a id="return-value"></a>

## Return Value

A publisher that emits the Boolean value `true` when the upstream publisher emits a matching value.

<a id="discussion"></a>

## Discussion

Use [contains(\_:)](contains%28__%29.md) to find the first element in an upstream that’s equal to the supplied argument. The contains publisher consumes all received elements until the upstream publisher produces a matching element. Upon finding the first match, it emits `true` and finishes normally. If the upstream finishes normally without producing a matching element, this publisher emits `false` and finishes.

In the example below, the [contains(\_:)](contains%28__%29.md) operator emits `true` the first time it receives the value `5` from the `numbers.publisher`, and then finishes normally.

```swift
let numbers = [-1, 5, 10, 5]
numbers.publisher
    .contains(5)
    .sink { print("\($0)") }

// Prints: "true"
```

## See Also

### Applying matching criteria to elements

- [contains(where:)](contains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the predicate closure.
- [tryContains(where:)](trycontains%28where_%29.md): Publishes a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md): Publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
