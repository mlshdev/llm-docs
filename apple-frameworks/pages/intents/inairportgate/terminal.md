> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairportgate/terminal](https://developer.apple.com/documentation/intents/inairportgate/terminal)

# terminal (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The terminal from which a flight departs or arrives.

## Declaration

```swift
var terminal: String? { get }
```

## See Also

### Getting the Gate Information

- [airport](airport.md): The airport from which a flight departs or arrives.
- [gate](gate.md): An identifier for the gate.

# terminal (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The terminal from which a flight departs or arrives.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * terminal;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * terminal;
```

## See Also

### Getting the Gate Information

- [airport](airport.md): The airport from which a flight departs or arrives.
- [gate](gate.md): An identifier for the gate.
