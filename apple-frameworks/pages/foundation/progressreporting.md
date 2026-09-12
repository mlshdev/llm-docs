> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporting](https://developer.apple.com/documentation/foundation/progressreporting)

# ProgressReporting (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface for objects that report progress using a single progress instance.

## Declaration

```swift
protocol ProgressReporting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Create the returned progress object using [ProgressReporting](progressreporting.md). The resulting object has no parent allowing the caller to add it to a progress tree using [ProgressReporting](progressreporting.md).

You can return a single progress object or a progress tree. If you are creating a progress tree, add the children to the returned progress object as described in [Reporting Progress for Multiple Operations](progress.md#Reporting-Progress-for-Multiple-Operations).

You are responsible for setting and updating the [ProgressReporting](progressreporting.md) of any [Progress](progress.md) object you create.

## Topics

### Custom Class Progress

- [progress](progressreporting/progress.md): The progress object returned by the class.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSBundleResourceRequest](nsbundleresourcerequest.md)
- [OperationQueue](operationqueue.md)
- [URLSessionDataTask](urlsessiondatatask.md)
- [URLSessionDownloadTask](urlsessiondownloadtask.md)
- [URLSessionStreamTask](urlsessionstreamtask.md)
- [URLSessionTask](urlsessiontask.md)
- [URLSessionUploadTask](urlsessionuploadtask.md)
- [URLSessionWebSocketTask](urlsessionwebsockettask.md)

## See Also

### Progress

- [Progress](progress.md): An object that conveys ongoing progress to the user for a specified task.

# NSProgressReporting (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface for objects that report progress using a single progress instance.

## Declaration

```objectivec
@protocol NSProgressReporting <NSObject>
```

<a id="overview"></a>

## Overview

Create the returned progress object using [NSProgressReporting](progressreporting.md). The resulting object has no parent allowing the caller to add it to a progress tree using [NSProgressReporting](progressreporting.md).

You can return a single progress object or a progress tree. If you are creating a progress tree, add the children to the returned progress object as described in [Reporting Progress for Multiple Operations](progress.md#Reporting-Progress-for-Multiple-Operations).

You are responsible for setting and updating the [NSProgressReporting](progressreporting.md) of any [NSProgress](progress.md) object you create.

## Topics

### Custom Class Progress

- [progress](progressreporting/progress.md): The progress object returned by the class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSBundleResourceRequest](nsbundleresourcerequest.md)
- [NSOperationQueue](operationqueue.md)
- [NSURLSessionTask](urlsessiontask.md)

## See Also

### Progress

- [NSProgress](progress.md): An object that conveys ongoing progress to the user for a specified task.
