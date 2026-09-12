> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalueconvertible/datavaluetype](https://developer.apple.com/documentation/createml/mldatavalueconvertible/datavaluetype)

# dataValueType

**Framework:** Create ML  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The underlying type the conforming type uses when it wraps itself in a data value.

## Declaration

```swift
static var dataValueType: MLDataValue.ValueType { get }
```

<a id="discussion"></a>

## Discussion

See [MLDataValue.ValueType](../mldatavalue/valuetype.md) for a list of available options.

## See Also

### Converting from a type’s instance to a data value

- [dataValue](datavalue.md): The value of the conforming type’s instance wrapped in a data value.
