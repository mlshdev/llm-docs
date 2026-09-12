> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentryfromprocess/threadidentifier](https://developer.apple.com/documentation/oslog/oslogentryfromprocess/threadidentifier)

# threadIdentifier (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The identifier of the thread that made the entry.

## Declaration

```swift
var threadIdentifier: UInt64 { get }
```

## See Also

### Identifying the Process Source

- [activityIdentifier](activityidentifier.md): The activity identifier associated with the entry.
- [process](process.md): The name of the process that made the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.

# threadIdentifier (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The identifier of the thread that made the entry.

## Declaration

```objectivec
@property (nonatomic, readonly) uint64_t threadIdentifier;
```

## See Also

### Identifying the Process Source

- [activityIdentifier](activityidentifier.md): The activity identifier associated with the entry.
- [process](process.md): The name of the process that made the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.
