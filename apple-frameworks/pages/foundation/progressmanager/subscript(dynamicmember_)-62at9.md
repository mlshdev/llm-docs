> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/subscript(dynamicmember:)-62at9](https://developer.apple.com/documentation/foundation/progressmanager/subscript(dynamicmember:)-62at9)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom double properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> P.Value where P : ProgressManager.Property, P.Summary == Double, P.Value == Double { get set }
```

## Parameters

- `key`: A key path to the custom double property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where both the value and summary types are `Double`. If the property has not been set, the getter returns the property’s default value.
