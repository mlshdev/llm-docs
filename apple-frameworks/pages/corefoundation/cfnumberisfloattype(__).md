> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberisfloattype(_:)](https://developer.apple.com/documentation/corefoundation/cfnumberisfloattype(_:))

# CFNumberIsFloatType(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

## Declaration

```swift
func CFNumberIsFloatType(_ number: CFNumber!) -> Bool
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

`true` if `number`’s value is one of the defined floating point types, otherwise `false`. The valid floating point types are listed in [CFNumberType](cfnumbertype.md).

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize(\_:)](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue(\_:\_:\_:)](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.

# CFNumberIsFloatType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

## Declaration

```objectivec
extern Boolean CFNumberIsFloatType(CFNumberRef number);
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

`true` if `number`’s value is one of the defined floating point types, otherwise `false`. The valid floating point types are listed in [CFNumberType](cfnumbertype.md).

## See Also

### Getting Information About Numbers

- [CFNumberGetByteSize](cfnumbergetbytesize%28__%29.md): Returns the number of bytes used by a CFNumber object to store its value.
- [CFNumberGetType](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
