> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionconstantvalues/setconstantvalues:type:withrange:](https://developer.apple.com/documentation/metal/mtlfunctionconstantvalues/setconstantvalues:type:withrange:)

# setConstantValues:type:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets values for a group of function constants within a specific index range.

## Declaration

```objectivec
- (void) setConstantValues:(const void *) values type:(MTLDataType) type withRange:(NSRange) range;
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

```objective-c
const bool abc[3] = { true, true, true };
MTLFunctionConstantValues* constantValues = [MTLFunctionConstantValues new];
[constantValues setConstantValues:&abc
                             type:MTLDataTypeBool
                        withRange:NSMakeRange(0, 3)];
```

## See Also

### Setting constant values

- [setConstantValue:type:atIndex:](setconstantvalue%28__type_index_%29.md): Sets a value for a function constant at a specific index.
- [setConstantValue:type:withName:](setconstantvalue%28__type_withname_%29.md): Sets a value for a function constant with a specific name.
