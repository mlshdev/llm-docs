> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/attribute/setvalue(_:at:)

# setValue(\_:at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets this attribute’s value at the given time.

## Declaration

```swift
@discardableResult func setValue<T>(_ value: T, at time: USDStage.TimeCode = .default) -> Bool where T : USDPrim.Attribute.Value
```
