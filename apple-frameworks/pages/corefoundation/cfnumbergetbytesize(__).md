> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbergetbytesize(_:)](https://developer.apple.com/documentation/corefoundation/cfnumbergetbytesize(_:))

# CFNumberGetByteSize(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bytes used by a CFNumber object to store its value.

## Declaration

```swift
func CFNumberGetByteSize(_ number: CFNumber!) -> CFIndex
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

The size in bytes of the value contained in `number`.

<a id="Discussion"></a>

## Discussion

Because a CFNumber object might store a value using a type different from that of the original value with which it was created, this function may return a size different from the size of the original value’s type.

## See Also

### Getting Information About Numbers

- [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue(\_:\_:\_:)](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType(\_:)](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.

# CFNumberGetByteSize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bytes used by a CFNumber object to store its value.

## Declaration

```objectivec
extern CFIndex CFNumberGetByteSize(CFNumberRef number);
```

## Parameters

- `number`: The CFNumber object to examine.

<a id="return-value"></a>

## Return Value

The size in bytes of the value contained in `number`.

<a id="Discussion"></a>

## Discussion

Because a CFNumber object might store a value using a type different from that of the original value with which it was created, this function may return a size different from the size of the original value’s type.

## See Also

### Getting Information About Numbers

- [CFNumberGetType](cfnumbergettype%28__%29.md): Returns the type used by a CFNumber object to store its value.
- [CFNumberGetValue](cfnumbergetvalue%28______%29.md): Obtains the value of a CFNumber object cast to a specified type.
- [CFNumberIsFloatType](cfnumberisfloattype%28__%29.md): Determines whether a CFNumber object contains a value stored as one of the defined floating point types.
