> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstantvalues/setconstantvalues(_:type:range:)](https://developer.apple.com/documentation/metal/mtlfunctionconstantvalues/setconstantvalues(_:type:range:))

# setConstantValues(\_:type:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS

Sets values for a group of function constants within a specific index range.

## Declaration

```swift
func setConstantValues(_ values: UnsafeRawPointer, type: MTLDataType, range: Range<Int>)
```

## Parameters

- `values`: A pointer to the constant values.
- `type`: The data type of the function constants.
- `range`: The range of the function constant indices.

<a id="discussion"></a>

## Discussion

Declare multiple function constants in Metal Shading Language (MSL).

```metal
constant bool a [[ function_constant(0) ]];
constant bool b [[ function_constant(1) ]];
constant bool c [[ function_constant(2) ]];
```

Set their values by assigning an index range of an array.

```swift
let abc = [true, true, true]
let constantValues = MTLFunctionConstantValues()
constantValues.setConstantValues(abc,
                                 type: .bool,
                                 with: NSMakeRange(0, 3))
```

## See Also

### Setting constant values

- [setConstantValue(\_:type:index:)](setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValue(\_:type:withName:)](setconstantvalue%28__type_withname_%29.md): Sets a value for a function constant with a specific name.
