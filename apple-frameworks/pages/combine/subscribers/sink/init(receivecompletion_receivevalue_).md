> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/sink/init(receivecompletion:receivevalue:)](https://developer.apple.com/documentation/combine/subscribers/sink/init(receivecompletion:receivevalue:))

# init(receiveCompletion:receiveValue:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a sink with the provided closures.

## Declaration

```swift
init(receiveCompletion: @escaping (Subscribers.Completion<Failure>) -> Void, receiveValue: @escaping (Input) -> Void)
```

## Parameters

- `receiveCompletion`: The closure to execute on completion.
- `receiveValue`: The closure to execute on receipt of a value.
