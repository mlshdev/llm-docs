> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/scorecounter](https://developer.apple.com/documentation/tabletopkit/scorecounter)

# ScoreCounter

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that keeps a score in a tabletop game.

## Declaration

```swift
struct ScoreCounter
```

## Topics

### Creating score counters

- [init(id:value:)](scorecounter/init%28id_value_%29.md): Creates a score counter with a unique identifier and initial value.

### Getting score counter identifiers

- [id](scorecounter/id.md): A unique identifier for the score counter.
- [ScoreCounter.Identifier](scorecounter/identifier.md): A unique identifier for score counters.

### Getting score counter values

- [value](scorecounter/value.md): The current value of the score counter.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Score counters

- [CounterCollection](countercollection.md): A collection of score counters that can be inspected and modified.
