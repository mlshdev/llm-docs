> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafepointer/subscript(_:)](https://developer.apple.com/documentation/swift/unsafepointer/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the pointee at the specified offset from this pointer.

## Declaration

```swift
subscript(i: Int) -> Pointee { get }
```

## Parameters

- `i`: The offset from this pointer at which to access an instance, measured in strides of the pointer’s `Pointee` type.

<a id="overview"></a>

## Overview

For a pointer `p`, the memory at `p + i` must be initialized.
