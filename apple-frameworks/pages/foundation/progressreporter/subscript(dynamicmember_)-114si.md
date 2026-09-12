> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/subscript(dynamicmember:)-114si](https://developer.apple.com/documentation/foundation/progressreporter/subscript(dynamicmember:)-114si)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom string properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> String? where P : ProgressManager.Property, P.Summary == [String?], P.Value == String? { get }
```

## Parameters

- `key`: A key path to the custom string property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where the value type is `String?` and the summary type is `[String?]`. If the property has not been set, the getter returns the property’s default value.
