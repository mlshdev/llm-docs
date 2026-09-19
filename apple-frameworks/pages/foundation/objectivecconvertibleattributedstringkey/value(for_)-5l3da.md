> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/objectivecconvertibleattributedstringkey/value(for:)-5l3da

# value(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a value of this key’s type for a given Objective-C value.

## Declaration

```swift
static func value(for object: Self.ObjectiveCValue) throws -> Self.Value
```

## Parameters

- `object`: The Objective-C value to convert.

<a id="return-value"></a>

## Return Value

`object`, expressed as this key’s type.
