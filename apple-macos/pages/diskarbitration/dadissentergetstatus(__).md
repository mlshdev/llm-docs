> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadissentergetstatus(_:)](https://developer.apple.com/documentation/diskarbitration/dadissentergetstatus(_:))

# DADissenterGetStatus(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the return code.

## Declaration

```swift
func DADissenterGetStatus(_ dissenter: DADissenter) -> DAReturn
```

## Parameters

- `dissenter`: The DADissenter for which to obtain the return code.

<a id="return-value"></a>

## Return Value

The return code. A BSD return code, if applicable, is encoded with unix_err().

## See Also

### Miscellaneous

- [DADissenterCreate(\_:\_:\_:)](dadissentercreate%28______%29.md): Creates a new dissenter object.
- [DADissenterGetStatusString(\_:)](dadissentergetstatusstring%28__%29.md): Obtains the return code string.

# DADissenterGetStatus (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the return code.

## Declaration

```objectivec
extern DAReturn DADissenterGetStatus(DADissenterRef dissenter);
```

## Parameters

- `dissenter`: The DADissenter for which to obtain the return code.

<a id="return-value"></a>

## Return Value

The return code. A BSD return code, if applicable, is encoded with unix_err().

## See Also

### Miscellaneous

- [DADissenterCreate](dadissentercreate%28______%29.md): Creates a new dissenter object.
- [DADissenterGetStatusString](dadissentergetstatusstring%28__%29.md): Obtains the return code string.
