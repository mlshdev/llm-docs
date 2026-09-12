> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporter/subscript(dynamicmember:)-84opo](https://developer.apple.com/documentation/foundation/progressreporter/subscript(dynamicmember:)-84opo)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Gets or sets custom URL properties.

## Declaration

```swift
final subscript<P>(dynamicMember key: KeyPath<ProgressManager.Properties, P.Type>) -> URL? where P : ProgressManager.Property, P.Summary == [URL?], P.Value == URL? { get }
```

## Parameters

- `key`: A key path to the custom URL property type.

<a id="overview"></a>

## Overview

This subscript provides read-write access to custom progress properties where the value type is `URL?` and the summary type is `[URL?]`. If the property has not been set, the getter returns the property’s default value.
