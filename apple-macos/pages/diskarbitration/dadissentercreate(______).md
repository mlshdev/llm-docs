> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadissentercreate(_:_:_:)](https://developer.apple.com/documentation/diskarbitration/dadissentercreate(_:_:_:))

# DADissenterCreate(\_:\_:\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new dissenter object.

## Declaration

```swift
func DADissenterCreate(_ allocator: CFAllocator?, _ status: DAReturn, _ string: CFString?) -> DADissenter
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `status`: The return code.
- `string`: The return code string. Pass NULL for no reason.

<a id="return-value"></a>

## Return Value

A reference to a new DADissenter.

## See Also

### Miscellaneous

- [DADissenterGetStatus(\_:)](dadissentergetstatus%28__%29.md): Obtains the return code.
- [DADissenterGetStatusString(\_:)](dadissentergetstatusstring%28__%29.md): Obtains the return code string.

# DADissenterCreate (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Creates a new dissenter object.

## Declaration

```objectivec
extern DADissenterRefDADissenterCreate(CFAllocatorRef allocator, DAReturn status, CFStringRef string);
```

## Parameters

- `allocator`: The allocator object to be used to allocate memory.
- `status`: The return code.
- `string`: The return code string. Pass NULL for no reason.

<a id="return-value"></a>

## Return Value

A reference to a new DADissenter.

## See Also

### Miscellaneous

- [DADissenterGetStatus](dadissentergetstatus%28__%29.md): Obtains the return code.
- [DADissenterGetStatusString](dadissentergetstatusstring%28__%29.md): Obtains the return code string.
