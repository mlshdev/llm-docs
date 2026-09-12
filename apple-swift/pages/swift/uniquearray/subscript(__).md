> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/subscript(_:)](https://developer.apple.com/documentation/swift/uniquearray/subscript(_:))

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(position: Int) -> Element { borrow mutate }
```

## Parameters

- `position`: The position of the element to access. The position must be a valid index of the array that is not equal to the `endIndex` property.

<a id="overview"></a>

## Overview

> **Complexity**

> O(1)
