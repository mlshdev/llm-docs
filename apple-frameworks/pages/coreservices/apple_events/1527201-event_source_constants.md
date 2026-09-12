> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1527201-event_source_constants](https://developer.apple.com/documentation/coreservices/apple_events/1527201-event_source_constants)

# Event Source Constants

**Framework:** Core Services

Identify how an Apple event was delivered.

<a id="overview"></a>

## Overview

For an example of how you might use these constants with the [AEGetAttributePtr(\_:\_:\_:\_:\_:\_:\_:)](../1445109-aegetattributeptr.md) function, see the data type [AEEventSource](../aeeventsource.md).

## Topics

### Constants

- [kAEUnknownSource](../kaeunknownsource.md): The source of the Apple event is unknown.
- [kAEDirectCall](../kaedirectcall.md): The source of the Apple event is a direct call that bypassed the PPC Toolbox.
- [kAESameProcess](../kaesameprocess.md): The source of the Apple event is the same application that received the event (the target application and the source application are the same).
- [kAELocalProcess](../kaelocalprocess.md): The source application is another process on the same computer as the target application.
- [kAERemoteProcess](../kaeremoteprocess.md): The source application is a process on a remote computer on the network.
