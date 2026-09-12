> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownload/priority-swift.struct](https://developer.apple.com/documentation/backgroundassets/badownload/priority-swift.struct)

# BADownload.Priority (Swift)

**Framework:** Background Assets  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A type that determines the execution priority of a scheduled asset download.

## Declaration

```swift
struct Priority
```

<a id="overview"></a>

## Overview

Use [BADownload.Priority](priority-swift.struct.md) to assign an app-specific priority to a download or group of downloads. The system processes downloads with a higher priority before those with a lower priority, no matter what order you schedule them in.

## Topics

### Creating a priority

- [init(\_:)](priority-swift.struct/init%28__%29.md): Creates a priority using the specified integer value.
- [init(rawValue:)](priority-swift.struct/init%28rawvalue_%29.md): Creates a priority using the specified raw value.

### Getting system priorities

- [default](priority-swift.struct/default.md): The default execution priority.
- [min](priority-swift.struct/min.md): The lowest execution priority.
- [max](priority-swift.struct/max.md): The highest execution priority.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining the priority

- [isEssential](isessential.md)
- [priority](priority-swift.property.md): The download’s execution priority.

# BADownloaderPriority (Objective-C)

**Framework:** Background Assets  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A type that determines the execution priority of a scheduled asset download.

## Declaration

```objectivec
typedef NSInteger BADownloaderPriority;
```

<a id="overview"></a>

## Overview

Use [BADownloaderPriority](priority-swift.struct.md) to assign an app-specific priority to a download or group of downloads. The system processes downloads with a higher priority before those with a lower priority, no matter what order you schedule them in.

## Topics

### Getting system priorities

- [BADownloaderPriorityDefault](priority-swift.struct/default.md): The default execution priority.
- [BADownloaderPriorityMin](priority-swift.struct/min.md): The lowest execution priority.
- [BADownloaderPriorityMax](priority-swift.struct/max.md): The highest execution priority.

## See Also

### Determining the priority

- [isEssential](isessential.md)
- [priority](priority-swift.property.md): The download’s execution priority.
