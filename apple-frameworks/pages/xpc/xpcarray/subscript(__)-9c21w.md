> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:)-9c21w](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:)-9c21w)

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set a value in this array as a file descriptor.

## Declaration

```swift
subscript(index: Int) -> FileDescriptor? { get set }
```

## Parameters

- `index`: The index at which to get or set the file descriptor.

<a id="return-value"></a>

## Return Value

A file descriptor value or `nil` if no such value was found.

<a id="overview"></a>

## Overview

A file descriptor passed in will be duplicated so the caller must still close theirs. A returned file descriptor is owned by the caller so it must be closed.
