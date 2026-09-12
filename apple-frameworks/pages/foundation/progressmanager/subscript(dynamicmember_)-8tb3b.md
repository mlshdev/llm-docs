> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/subscript(dynamicmember:)-8tb3b](https://developer.apple.com/documentation/foundation/progressmanager/subscript(dynamicmember:)-8tb3b)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom unsigned integer properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> UInt64 where P : ProgressManager.Property, P.Summary == [UInt64], P.Value == UInt64 { get set }
```

## Parameters

- `key`: A key path to the custom unsigned integer property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where the value type is `UInt64` and the summary type is `[UInt64]`. If the property has not been set, the getter returns the property’s default value.
