> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/sink/receivecompletion](https://developer.apple.com/documentation/combine/subscribers/sink/receivecompletion)

# receiveCompletion

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The closure to execute on completion.

## Declaration

```swift
final var receiveCompletion: (Subscribers.Completion<Failure>) -> Void { get }
```

## See Also

### Inspecting subscriber properties

- [receiveValue](receivevalue.md): The closure to execute on receipt of a value.
