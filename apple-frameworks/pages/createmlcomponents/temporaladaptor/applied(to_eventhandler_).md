> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaladaptor/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/temporaladaptor/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Performs the transformation on each element of the input sequence.

## Declaration

```swift
func applied(to input: some TemporalSequence<Base.Input>, eventHandler: EventHandler? = nil) async throws -> AnyTemporalSequence<TemporalAdaptor<Base>.Output>
```
