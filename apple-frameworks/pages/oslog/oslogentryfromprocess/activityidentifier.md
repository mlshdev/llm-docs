> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentryfromprocess/activityidentifier](https://developer.apple.com/documentation/oslog/oslogentryfromprocess/activityidentifier)

# activityIdentifier (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The activity identifier associated with the entry.

## Declaration

```swift
var activityIdentifier: os_activity_id_t { get }
```

## See Also

### Identifying the Process Source

- [process](process.md): The name of the process that made the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.
- [threadIdentifier](threadidentifier.md): The identifier of the thread that made the entry.

# activityIdentifier (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The activity identifier associated with the entry.

## Declaration

```objectivec
@property (nonatomic, readonly) os_activity_id_t activityIdentifier;
```

## See Also

### Identifying the Process Source

- [process](process.md): The name of the process that made the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.
- [threadIdentifier](threadidentifier.md): The identifier of the thread that made the entry.
