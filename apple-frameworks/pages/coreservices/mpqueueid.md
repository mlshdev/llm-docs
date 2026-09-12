> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mpqueueid](https://developer.apple.com/documentation/coreservices/mpqueueid)

# MPQueueID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a queue ID, which Multiprocessing Services uses to manipulate message queues.

## Declaration

```objectivec
typedef struct OpaqueMPQueueID *MPQueueID;
```

<a id="discussion"></a>

## Discussion

You obtain a queue ID by calling the function [MPCreateQueue](1585694-mpcreatequeue.md).
