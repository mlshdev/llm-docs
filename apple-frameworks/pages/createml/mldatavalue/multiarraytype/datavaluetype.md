> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue/multiarraytype/datavaluetype](https://developer.apple.com/documentation/createml/mldatavalue/multiarraytype/datavaluetype)

# dataValueType

**Framework:** Create ML  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The underlying type a machine learning multidimensional array uses when it wraps itself in a data value.

## Declaration

```swift
static var dataValueType: MLDataValue.ValueType { get }
```

<a id="discussion"></a>

## Discussion

A machine learning multidimensional array is an [MLDataValue.ValueType.multiArray](../valuetype/multiarray.md).
