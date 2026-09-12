> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatavalue](https://developer.apple.com/documentation/createml/mldatavalue)

# MLDataValue

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The value of a cell in a data table.

## Declaration

```swift
enum MLDataValue
```

<a id="overview"></a>

## Overview

The [MLDataValue](mldatavalue.md) enumeration is the fundamental type that you use to store training data in a table. Classifiers use data values to store information like evaluation metrics. Data values wrap all of the possible data types you can use with Create ML.

To access the underlying information in a data value, you can use the properties that correspond to the type’s enumeration cases. If you aren’t sure which kind of value a data value wrapper contains, use a switch statement to unwrap the value, or check the value of the [type](mldatavalue/type.md) property.

## Topics

### Converting between types and data values

- [MLDataValueConvertible](mldatavalueconvertible.md): A type that can convert itself to and from a data value.

### Creating a data value

- [MLDataValue.int(\_:)](mldatavalue/int%28__%29.md): An integer value.
- [MLDataValue.double(\_:)](mldatavalue/double%28__%29.md): A double value.
- [MLDataValue.string(\_:)](mldatavalue/string%28__%29.md): A string value.
- [MLDataValue.dictionary(\_:)](mldatavalue/dictionary%28__%29.md): A dictionary of named data values.
- [MLDataValue.sequence(\_:)](mldatavalue/sequence%28__%29.md): A sequence of data values.
- [MLDataValue.multiArray(\_:)](mldatavalue/multiarray%28__%29.md): A multidimensional array of data values.

### Inspecting the type

- [type](mldatavalue/type.md): The kind of the underlying value that the data value wraps.
- [MLDataValue.ValueType](mldatavalue/valuetype.md): An enumeration describing the supported underlying types that an `MLDataValue wraps`.

### Accessing numeric values

- [intValue](mldatavalue/intvalue.md): The underlying integer value.
- [doubleValue](mldatavalue/doublevalue.md): The underlying double value.

### Accessing string values

- [stringValue](mldatavalue/stringvalue.md): The underlying string value.

### Accessing dictionary values

- [dictionaryValue](mldatavalue/dictionaryvalue.md): The underlying dictionary.
- [MLDataValue.DictionaryType](mldatavalue/dictionarytype.md): A dictionary of named data values.

### Accessing array values

- [sequenceValue](mldatavalue/sequencevalue.md): The underlying sequence.
- [MLDataValue.SequenceType](mldatavalue/sequencetype.md): A sequence of data values.
- [multiArrayValue](mldatavalue/multiarrayvalue.md): The underlying multidimensional array.
- [MLDataValue.MultiArrayType](mldatavalue/multiarraytype.md): A multidimensional array of data values.

### Comparing data values

- [==(\_:\_:)](mldatavalue/==%28____%29.md): Returns a Boolean value indicating whether two data values wrap the same underlying value.

### Describing a data value

- [description](mldatavalue/description.md): A text representation of the data value.
- [debugDescription](mldatavalue/debugdescription.md): A text representation of the data value that’s suitable for output during debugging.

### Handling errors

- [MLDataValue.invalid](mldatavalue/invalid.md): An invalid value.
- [isValid](mldatavalue/isvalid.md): A Boolean value indicating whether the data value is valid.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mldatavalue/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](mldatavalue/customstringconvertible-implementations.md)
- [Equatable Implementations](mldatavalue/equatable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Tabular data

- [MLDataTable](mldatatable.md): A table of data for training or evaluating a machine learning model.
- [Data visualizations](data-visualizations.md): Render images of data tables and columns in a playground.
