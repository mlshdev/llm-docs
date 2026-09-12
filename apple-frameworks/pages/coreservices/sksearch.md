> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearch](https://developer.apple.com/documentation/coreservices/sksearch)

# SKSearch

**Framework:** Core Services  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

Defines an opaque data type representing an asynchronous search.

## Declaration

```swift
class SKSearch
```

<a id="overview"></a>

## Overview

A search object is created when you call the [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md) function.

<a id="1681574"></a>

### Special Considerations

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with SKSearch objects. In a garbage-collected environment, you must use [CFRelease](../corefoundation/cfrelease.md) to dispose of an SKSearch object.
