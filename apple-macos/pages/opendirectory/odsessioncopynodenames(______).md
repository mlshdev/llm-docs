> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsessioncopynodenames(_:_:_:)](https://developer.apple.com/documentation/opendirectory/odsessioncopynodenames(_:_:_:))

# ODSessionCopyNodeNames(\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the names of nodes registered in a given session.

## Declaration

```swift
func ODSessionCopyNodeNames(_ allocator: CFAllocator!, _ session: ODSessionRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFArray>!
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `session`: The session.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

An array of valid node names in the given session.

## See Also

### Working with Sessions

- [ODSessionCreate(\_:\_:\_:)](odsessioncreate%28______%29.md): Creates a session to be passed to node functions.
- [ODSessionGetTypeID()](odsessiongettypeid%28%29.md): Returns the type ID for a session.

# ODSessionCopyNodeNames (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the names of nodes registered in a given session.

## Declaration

```objectivec
extern CFArrayRefODSessionCopyNodeNames(CFAllocatorRef allocator, ODSessionRef session, CFErrorRef*error);
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `session`: The session.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

An array of valid node names in the given session.

## See Also

### Working with Sessions

- [ODSessionCreate](odsessioncreate%28______%29.md): Creates a session to be passed to node functions.
- [ODSessionGetTypeID](odsessiongettypeid%28%29.md): Returns the type ID for a session.
