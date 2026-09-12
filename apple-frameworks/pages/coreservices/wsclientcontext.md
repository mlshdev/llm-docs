> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/wsclientcontext](https://developer.apple.com/documentation/coreservices/wsclientcontext)

# WSClientContext

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** macOS 10.2+

An optional context that can contain data you want passed to your callback.

## Declaration

```objectivec
typedef struct WSClientContext {
    ...
} WSClientContext;
```

<a id="overview"></a>

## Overview

Several calls in the Web Services Core framework take a callback with an optional context pointer.  The context is copied and the info pointer retained.  When the callback is made, the info pointer is passed to the callback.

## Topics

### Instance Properties

- [copyDescription](wsclientcontext/1508458-copydescription.md): Callback made on the info pointer. This field may be NULL.
- [info](wsclientcontext/1508462-info.md): A pointer to your information to be passed to your callback.
- [release](wsclientcontext/1508435-release.md): Callback made on the info pointer. This field may be NULL.
- [retain](wsclientcontext/1508453-retain.md): Callback made on the info pointer. This field may be NULL.
- [version](wsclientcontext/1508448-version.md): Set to zero.
