> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodataqueueentry](https://developer.apple.com/documentation/iokit/iodataqueueentry)

# IODataQueueEntry (Swift)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

Represents an entry within the data queue

## Declaration

```swift
typealias IODataQueueEntry = _IODataQueueEntry
```

<a id="discussion"></a>

## Discussion

This is a variable sized struct. The data field simply represents the start of the data region. The size of the data region is stored in the size field. The whole size of the specific entry is the size of a UInt32 plus the size of the data region.

# IODataQueueEntry (Objective-C)

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 1.0+

Represents an entry within the data queue

## Declaration

```objectivec
typedef struct _IODataQueueEntry {
    ...
} IODataQueueEntry;
```

<a id="overview"></a>

## Overview

This is a variable sized struct. The data field simply represents the start of the data region. The size of the data region is stored in the size field. The whole size of the specific entry is the size of a UInt32 plus the size of the data region.

## Topics

### Instance Properties

- [data](iodataqueueentry/1456748-data.md)
- [size](iodataqueueentry/1456739-size.md)
