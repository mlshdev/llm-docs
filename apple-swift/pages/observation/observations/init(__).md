> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observations/init(_:)](https://developer.apple.com/documentation/observation/observations/init(_:))

# init(\_:)

**Framework:** Observation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Constructs an asynchronous sequence for a given closure by tracking changes of `@Observable` types.

## Declaration

```swift
init(_ emit: @escaping @isolated(any) @Sendable () throws(Failure) -> Element)
```

## Parameters

- `emit`: A closure to generate an element for the sequence.

<a id="discussion"></a>

## Discussion

The emit closure is responsible for extracting a value out of a single or many `@Observable` types.
