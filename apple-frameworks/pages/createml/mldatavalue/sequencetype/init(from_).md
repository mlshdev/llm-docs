> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatavalue/sequencetype/init(from:)

# init(from:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Creates a data-value sequence from another sequence.

## Declaration

```swift
init?(from dataValue: MLDataValue)
```

<a id="discussion"></a>

## Discussion

Use this initializer to create an [MLDataValue.SequenceType](../sequencetype.md) from another data-value sequence instance. You can confirm the data value’s underlying type by retrieving a non-`nil` value from [sequenceValue](../sequencevalue.md) or by inspecting the [type](../type.md) property.
