> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:default:)-51ffh](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:default:)-51ffh)

# subscript(\_:as:default:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this dictionary as a file descriptor.

## Declaration

```swift
subscript(key: String, as type: FileDescriptor.Type = FileDescriptor.self, default defaultValue: @autoclosure () -> FileDescriptor) -> FileDescriptor { get }
```

## Parameters

- `key`: The key under which to get the file descriptor.
- `type`: The expected type of the resulting value.
- `defaultValue`: The value to produce if no file descriptor is available under `key`.

<a id="return-value"></a>

## Return Value

A file descriptor value, possibly `defaultValue`.

<a id="overview"></a>

## Overview

The returned file descriptor is owned by the caller so they must close it.
