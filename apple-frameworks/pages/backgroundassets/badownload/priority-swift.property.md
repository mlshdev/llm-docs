> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownload/priority-swift.property](https://developer.apple.com/documentation/backgroundassets/badownload/priority-swift.property)

# priority (Swift)

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download’s execution priority.

## Declaration

```swift
var priority: BADownload.Priority { get }
```

## See Also

### Determining the priority

- [isEssential](isessential.md)
- [BADownload.Priority](priority-swift.struct.md): A type that determines the execution priority of a scheduled asset download.

# priority (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

The download’s execution priority.

## Declaration

```objectivec
@property (readonly) BADownloaderPriority priority;
```

## See Also

### Determining the priority

- [isEssential](isessential.md)
- [BADownloaderPriority](priority-swift.struct.md): A type that determines the execution priority of a scheduled asset download.
