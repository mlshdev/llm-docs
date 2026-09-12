> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairportgate/airport](https://developer.apple.com/documentation/intents/inairportgate/airport)

# airport (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The airport from which a flight departs or arrives.

## Declaration

```swift
@NSCopying var airport: INAirport { get }
```

## See Also

### Getting the Gate Information

- [terminal](terminal.md): The terminal from which a flight departs or arrives.
- [gate](gate.md): An identifier for the gate.

# airport (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The airport from which a flight departs or arrives.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INAirport * airport;
```

```objectivec
@property (atomic, copy, readonly) INAirport * airport;
```

## See Also

### Getting the Gate Information

- [terminal](terminal.md): The terminal from which a flight departs or arrives.
- [gate](gate.md): An identifier for the gate.
