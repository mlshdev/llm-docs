> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscribers/sink/receivevalue

# receiveValue

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The closure to execute on receipt of a value.

## Declaration

```swift
final var receiveValue: (Input) -> Void { get }
```

## See Also

### Inspecting subscriber properties

- [receiveCompletion](receivecompletion.md): The closure to execute on completion.
