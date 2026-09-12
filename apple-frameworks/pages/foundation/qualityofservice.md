> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/qualityofservice](https://developer.apple.com/documentation/foundation/qualityofservice)

# QualityOfService (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the nature and importance of work to the system.

## Declaration

```swift
enum QualityOfService
```

<a id="overview"></a>

## Overview

Work with higher quality of service classes receive more resources than work with lower quality of service classes whenever there’s resource contention.

## Topics

### Constants

- [QualityOfService.userInteractive](qualityofservice/userinteractive.md)
- [QualityOfService.userInitiated](qualityofservice/userinitiated.md)
- [QualityOfService.utility](qualityofservice/utility.md)
- [QualityOfService.background](qualityofservice/background.md)
- [QualityOfService.default](qualityofservice/default.md)

### Initializers

- [init(rawValue:)](qualityofservice/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Operation.QueuePriority](operation/queuepriority-swift.enum.md): These constants let you prioritize the order in which operations execute.

# NSQualityOfService (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the nature and importance of work to the system.

## Declaration

```objectivec
enum NSQualityOfService : NSInteger;
```

<a id="overview"></a>

## Overview

Work with higher quality of service classes receive more resources than work with lower quality of service classes whenever there’s resource contention.

## Topics

### Constants

- [NSQualityOfServiceUserInteractive](qualityofservice/userinteractive.md)
- [NSQualityOfServiceUserInitiated](qualityofservice/userinitiated.md)
- [NSQualityOfServiceUtility](qualityofservice/utility.md)
- [NSQualityOfServiceBackground](qualityofservice/background.md)
- [NSQualityOfServiceDefault](qualityofservice/default.md)

## See Also

### Constants

- [NSOperationQueuePriority](operation/queuepriority-swift.enum.md): These constants let you prioritize the order in which operations execute.
