> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mpeventid](https://developer.apple.com/documentation/coreservices/mpeventid)

# MPEventID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents an event group ID, which Multiprocessing Services uses to manipulate event groups.

## Declaration

```objectivec
typedef struct OpaqueMPEventID *MPEventID;
```

<a id="discussion"></a>

## Discussion

You obtain an event group ID by calling the function [MPCreateEvent](1585702-mpcreateevent.md).
