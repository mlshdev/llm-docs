> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstantvalues/setconstantvalue(_:type:withname:)](https://developer.apple.com/documentation/metal/mtlfunctionconstantvalues/setconstantvalue(_:type:withname:))

# setConstantValue(\_:type:withName:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets a value for a function constant with a specific name.

## Declaration

```swift
func setConstantValue(_ value: UnsafeRawPointer, type: MTLDataType, withName name: String)
```

## Parameters

- `value`: A pointer to the constant value.
- `type`: The data type of the function constant.
- `name`: The name of the function constant.

<a id="discussion"></a>

## Discussion

The first example declares a single function constant in a Metal Shading Language file.

```metal
constant bool a [[ function_constant(0) ]];
```

The next example sets that Boolean value by providing its specific name.

**Swift**

```swift
var a = true
let constantValues = MTLFunctionConstantValues()
constantValues.setConstantValue(&a, type: .bool, withName: "a")
```

**Objective-C**

```objective-c
const bool a = true;
MTLFunctionConstantValues* constantValues = [MTLFunctionConstantValues new];
[constantValues setConstantValue:&a type:MTLDataTypeBool withName:@"a"];
```

## See Also

### Setting constant values

- [setConstantValue(\_:type:index:)](setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValues(\_:type:range:)](setconstantvalues%28__type_range_%29.md): Sets values for a group of function constants within a specific index range.

# setConstantValue:type:withName: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets a value for a function constant with a specific name.

## Declaration

```objectivec
- (void) setConstantValue:(const void *) value type:(MTLDataType) type withName:(NSString *) name;
```

## Parameters

- `value`: A pointer to the constant value.
- `type`: The data type of the function constant.
- `name`: The name of the function constant.

<a id="discussion"></a>

## Discussion

The first example declares a single function constant in a Metal Shading Language file.

```metal
constant bool a [[ function_constant(0) ]];
```

The next example sets that Boolean value by providing its specific name.

**Swift**

```swift
var a = true
let constantValues = MTLFunctionConstantValues()
constantValues.setConstantValue(&a, type: .bool, withName: "a")
```

**Objective-C**

```objective-c
const bool a = true;
MTLFunctionConstantValues* constantValues = [MTLFunctionConstantValues new];
[constantValues setConstantValue:&a type:MTLDataTypeBool withName:@"a"];
```

## See Also

### Setting constant values

- [setConstantValue:type:atIndex:](setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValues:type:withRange:](setconstantvalues_type_withrange_.md): Sets values for a group of function constants within a specific index range.
