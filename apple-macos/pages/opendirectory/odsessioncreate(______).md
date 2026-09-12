> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsessioncreate(_:_:_:)](https://developer.apple.com/documentation/opendirectory/odsessioncreate(_:_:_:))

# ODSessionCreate(\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a session to be passed to node functions.

## Declaration

```swift
func ODSessionCreate(_ allocator: CFAllocator!, _ options: CFDictionary!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<ODSessionRef>!
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `options`: A dictionary of options to associate with the session.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created session.

## See Also

### Related Documentation

- [Session Keys](session-keys.md): Keys used when specifying session information.

### Working with Sessions

- [ODSessionCopyNodeNames(\_:\_:\_:)](odsessioncopynodenames%28______%29.md): Returns the names of nodes registered in a given session.
- [ODSessionGetTypeID()](odsessiongettypeid%28%29.md): Returns the type ID for a session.

# ODSessionCreate (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Creates a session to be passed to node functions.

## Declaration

```objectivec
extern ODSessionRefODSessionCreate(CFAllocatorRef allocator, CFDictionaryRef options, CFErrorRef*error);
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `options`: A dictionary of options to associate with the session.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created session.

## See Also

### Related Documentation

- [Session Keys](session-keys.md): Keys used when specifying session information.

### Working with Sessions

- [ODSessionCopyNodeNames](odsessioncopynodenames%28______%29.md): Returns the names of nodes registered in a given session.
- [ODSessionGetTypeID](odsessiongettypeid%28%29.md): Returns the type ID for a session.
