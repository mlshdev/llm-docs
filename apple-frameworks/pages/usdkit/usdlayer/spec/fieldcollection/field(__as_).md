> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/spec/fieldcollection/field(_:as:)

# field(\_:as:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Typed field accessor.

## Declaration

```swift
func field<T>(_ name: USDToken, as type: T.Type) -> T? where T : USDValueProtocol
```

## Parameters

- `name`: The field name to look up.
- `type`: The expected value type.

<a id="return-value"></a>

## Return Value

The field’s value as `T`, or `nil` if the field is unauthored or holds a different type.
