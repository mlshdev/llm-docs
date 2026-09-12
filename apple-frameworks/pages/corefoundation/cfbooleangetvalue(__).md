> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbooleangetvalue(_:)](https://developer.apple.com/documentation/corefoundation/cfbooleangetvalue(_:))

# CFBooleanGetValue(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a CFBoolean object as a standard C type `Boolean`.

## Declaration

```swift
func CFBooleanGetValue(_ boolean: CFBoolean!) -> Bool
```

## Parameters

- `boolean`: The boolean to examine.

<a id="return-value"></a>

## Return Value

The value of `boolean`.

## See Also

### CFBoolean Miscellaneous Functions

- [CFBooleanGetTypeID()](cfbooleangettypeid%28%29.md): Returns the Core Foundation type identifier for the CFBoolean opaque type.

# CFBooleanGetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value of a CFBoolean object as a standard C type `Boolean`.

## Declaration

```objectivec
extern Boolean CFBooleanGetValue(CFBooleanRef boolean);
```

## Parameters

- `boolean`: The boolean to examine.

<a id="return-value"></a>

## Return Value

The value of `boolean`.

## See Also

### CFBoolean Miscellaneous Functions

- [CFBooleanGetTypeID](cfbooleangettypeid%28%29.md): Returns the Core Foundation type identifier for the CFBoolean opaque type.
