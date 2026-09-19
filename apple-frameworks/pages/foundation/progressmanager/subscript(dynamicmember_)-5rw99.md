> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progressmanager/subscript(dynamicmember:)-5rw99

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom duration properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> Duration where P : ProgressManager.Property, P.Summary == Duration, P.Value == Duration { get set }
```

## Parameters

- `key`: A key path to the custom duration property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where the value type is `Duration` and the summary type is `Duration`. If the property has not been set, the getter returns the property’s default value.
