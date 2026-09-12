> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/objectivecconvertibleattributedstringkey/value(for:)-5ggbb](https://developer.apple.com/documentation/foundation/objectivecconvertibleattributedstringkey/value(for:)-5ggbb)

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
