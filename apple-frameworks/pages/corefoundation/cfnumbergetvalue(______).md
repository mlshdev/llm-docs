> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbergetvalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumbergetvalue(_:_:_:))

# CFNumberGetValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the value of a CFNumber object cast to a specified type.

## Declaration

```swift
func CFNumberGetValue(_ number: CFNumber!, _ theType: CFNumberType, _ valuePtr: UnsafeMutableRawPointer!) -> Bool
```

## Parameters

- `number`: The CFNumber object to examine.
- `theType`: A constant that specifies the data type to return. See [CFNumberType](cfnumbertype.md) for a list of possible values.
- `valuePtr`: On return, contains the value of `number`.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the argument type differs from the return type, and the conversion is lossy or the return value is out of range, then this function passes back an approximate value in `valuePtr` and returns `false`.

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize(\_:)](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberIsFloatType(\_:)](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

# CFNumberGetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the value of a CFNumber object cast to a specified type.

## Declaration

```objectivec
extern Boolean CFNumberGetValue(CFNumberRef number, CFNumberType theType, void *valuePtr);
```

## Parameters

- `number`: The CFNumber object to examine.
- `theType`: A constant that specifies the data type to return. See [CFNumberType](cfnumbertype.md) for a list of possible values.
- `valuePtr`: On return, contains the value of `number`.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the argument type differs from the return type, and the conversion is lossy or the return value is out of range, then this function passes back an approximate value in `valuePtr` and returns `false`.

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberIsFloatType](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.
