> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/objectivecconvertibleattributedstringkey/value(for:)](https://developer.apple.com/documentation/foundation/objectivecconvertibleattributedstringkey/value(for:))

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

## Default Implementations

### ObjectiveCConvertibleAttributedStringKey Implementations

- [value(for:)](value%28for_%29-5ggbb.md): Conforms when `ObjectiveCValue` is `NSString`, `Value` conforms to `RawRepresentable`, and `Value.RawValue` is `String`. Returns a value of this key’s type for a given Objective-C value.
- [value(for:)](value%28for_%29-5l3da.md): Conforms when `ObjectiveCValue` is `NSNumber`, `Value` conforms to `RawRepresentable`, and `Value.RawValue` is `Int`. Returns a value of this key’s type for a given Objective-C value.

## See Also

### Converting between Swift and Objective-C Types

- [objectiveCValue(for:)](objectivecvalue%28for_%29.md): Returns an Objective-C typed value for a given value of this key’s type.
