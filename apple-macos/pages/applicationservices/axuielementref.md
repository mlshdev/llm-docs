> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axuielementref](https://developer.apple.com/documentation/applicationservices/axuielementref)

# AXUIElementRef

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.2+

A structure used to refer to an accessibility object.

## Declaration

```objectivec
typedef struct __AXUIElement AXUIElementRef;
```

<a id="overview"></a>

## Overview

An accessibility object provides information about the user interface object it represents. This information includes the object's position in the accessibility hierarchy, its position on the display, details about what it is, and what actions it can perform. Accessibility objects respond to messages sent by assistive applications and send notifications that describe state changes.
