> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1542840-priority_constants_for_the_aesen](https://developer.apple.com/documentation/coreservices/apple_events/1542840-priority_constants_for_the_aesen)

# Priority Constants for the AESend Function (Deprecated in macOS)

**Framework:** Core Services

Specify a value for the `sendPriority` parameter of the `AESend` function.

<a id="overview"></a>

## Overview

For related information, see the `AESend(_:_:_:_:_:_:_:)` function and [AESendMode](../aesendmode.md). 

<a id="1770288"></a>

### Version-Notes

The `sendPriority` parameter of the `AESend` function is deprecated in macOS.

## Topics

### Constants

- [kAENormalPriority](../kaenormalpriority.md): Deprecated. The Apple Event Manager posts the event at the end of the event queue of the server process and the server processes the Apple event as soon as it has the opportunity.
- [kAEHighPriority](../kaehighpriority.md): The Apple Event Manager posts the event at the beginning of the event queue of the server process.
