> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:as:)-54977](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:as:)-54977)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this array as a file descriptor.

## Declaration

```swift
subscript(index: Int, as type: FileDescriptor.Type = FileDescriptor.self) -> FileDescriptor? { get }
```

## Parameters

- `index`: The index at which to get the file descriptor.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

A file descriptor value or `nil` if no such value was found.

<a id="overview"></a>

## Overview

The returned file descriptor is owned by the caller so they must close it.
