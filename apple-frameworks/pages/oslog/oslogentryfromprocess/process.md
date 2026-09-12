> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentryfromprocess/process](https://developer.apple.com/documentation/oslog/oslogentryfromprocess/process)

# process (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The name of the process that made the entry.

## Declaration

```swift
var process: String { get }
```

## See Also

### Identifying the Process Source

- [activityIdentifier](activityidentifier.md): The activity identifier associated with the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.
- [threadIdentifier](threadidentifier.md): The identifier of the thread that made the entry.

# process (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The name of the process that made the entry.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * process;
```

## See Also

### Identifying the Process Source

- [activityIdentifier](activityidentifier.md): The activity identifier associated with the entry.
- [processIdentifier](processidentifier.md): The process identifier that made the entry.
- [sender](sender.md): The name of the binary image that made the entry.
- [threadIdentifier](threadidentifier.md): The identifier of the thread that made the entry.
