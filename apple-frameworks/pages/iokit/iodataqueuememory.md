> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodataqueuememory](https://developer.apple.com/documentation/iokit/iodataqueuememory)

# IODataQueueMemory (Swift)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

A struct mapping to the header region of a data queue.

## Declaration

```swift
typealias IODataQueueMemory = _IODataQueueMemory
```

<a id="discussion"></a>

## Discussion

This struct is variable sized. The struct represents the data queue header information plus a pointer to the actual data queue itself. The size of the struct is the combined size of the header fields (3 \* sizeof(UInt32)) plus the actual size of the queue region. This size is stored in the queueSize field.

# IODataQueueMemory (Objective-C)

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

A struct mapping to the header region of a data queue.

## Declaration

```objectivec
typedef struct _IODataQueueMemory {
    ...
} IODataQueueMemory;
```

<a id="overview"></a>

## Overview

This struct is variable sized. The struct represents the data queue header information plus a pointer to the actual data queue itself. The size of the struct is the combined size of the header fields (3 \* sizeof(UInt32)) plus the actual size of the queue region. This size is stored in the queueSize field.

## Topics

### Instance Properties

- [head](iodataqueuememory/1456736-head.md)
- [queue](iodataqueuememory/1456749-queue.md)
- [queueSize](iodataqueuememory/1456744-queuesize.md)
- [tail](iodataqueuememory/1456737-tail.md)
