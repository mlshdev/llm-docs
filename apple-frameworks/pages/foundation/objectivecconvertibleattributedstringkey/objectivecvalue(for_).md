> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/objectivecconvertibleattributedstringkey/objectivecvalue(for:)

# objectiveCValue(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an Objective-C typed value for a given value of this key’s type.

## Declaration

```swift
static func objectiveCValue(for value: Self.Value) throws -> Self.ObjectiveCValue
```

## Parameters

- `value`: The value to convert.

<a id="return-value"></a>

## Return Value

`value`, expressed as the Objective-C type defined by [ObjectiveCValue](objectivecvalue.md).

## Default Implementations

### ObjectiveCConvertibleAttributedStringKey Implementations

- [objectiveCValue(for:)](objectivecvalue%28for_%29-7whjv.md): Conforms when `ObjectiveCValue` is `NSString`, `Value` conforms to `RawRepresentable`, and `Value.RawValue` is `String`. Returns an Objective-C typed value for a given value of this key’s type.
- [objectiveCValue(for:)](objectivecvalue%28for_%29-97cif.md): Conforms when `ObjectiveCValue` is `NSNumber`, `Value` conforms to `RawRepresentable`, and `Value.RawValue` is `Int`. Returns an Objective-C typed value for a given value of this key’s type.

## See Also

### Converting between Swift and Objective-C Types

- [value(for:)](value%28for_%29.md): Returns a value of this key’s type for a given Objective-C value.
