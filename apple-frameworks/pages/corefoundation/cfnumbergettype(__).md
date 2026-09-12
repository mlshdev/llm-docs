> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbergettype(_:)](https://developer.apple.com/documentation/corefoundation/cfnumbergettype(_:))

# CFNumberGetType(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type used by a CFNumber object to store its value.

## Declaration

```swift
func CFNumberGetType(_ number: CFNumber!) -> CFNumberType
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

A constant that indicates the data type of the value contained in `number`. See [CFNumberType](cfnumbertype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

The type specified in the call to [CFNumberCreate(\_:\_:\_:)](cfnumbercreate%28______%29.md) is not necessarily preserved when a new CFNumber object is created—it uses whatever internal storage type the creation function deems appropriate.

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize(\_:)](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetValue(\_:\_:\_:)](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType(\_:)](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

# CFNumberGetType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the type used by a CFNumber object to store its value.

## Declaration

```objectivec
extern CFNumberType CFNumberGetType(CFNumberRef number);
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

A constant that indicates the data type of the value contained in `number`. See [CFNumberType](cfnumbertype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

The type specified in the call to [CFNumberCreate](cfnumbercreate%28______%29.md) is not necessarily preserved when a new CFNumber object is created—it uses whatever internal storage type the creation function deems appropriate.

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetValue](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.
