> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/subscript(dynamicmember:)-1qb7p

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom integer properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> Int where P : ProgressManager.Property, P.Summary == Int, P.Value == Int { get set }
```

## Parameters

- `key`: A key path to the custom integer property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where both the value and summary types are `Int`. If the property has not been set, the getter returns the property’s default value.
