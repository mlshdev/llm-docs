> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/unsafeproperty](https://developer.apple.com/documentation/corehid/hiddeviceclient/unsafeproperty)

# HIDDeviceClient.UnsafeProperty

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A wrapper around an object to facilitate working with subscripts.

## Declaration

```swift
struct UnsafeProperty
```

<a id="overview"></a>

## Overview

Note that this is unchecked Sendable, and therefore unsafe. The contained object is NOT guaranted to be concurrency safe.

## Topics

### Instance Properties

- [unsafeObject](unsafeproperty/unsafeobject.md): An object may not be safe to use concurrently.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
