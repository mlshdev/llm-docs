> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/dadissentergetstatusstring(_:)](https://developer.apple.com/documentation/diskarbitration/dadissentergetstatusstring(_:))

# DADissenterGetStatusString(\_:) (Swift)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the return code string.

## Declaration

```swift
func DADissenterGetStatusString(_ dissenter: DADissenter) -> CFString?
```

## Parameters

- `dissenter`: The DADissenter for which to obtain the return code string.

<a id="return-value"></a>

## Return Value

The return code string.

## See Also

### Miscellaneous

- [DADissenterCreate(\_:\_:\_:)](dadissentercreate%28______%29.md): Creates a new dissenter object.
- [DADissenterGetStatus(\_:)](dadissentergetstatus%28__%29.md): Obtains the return code.

# DADissenterGetStatusString (Objective-C)

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Obtains the return code string.

## Declaration

```objectivec
extern CFStringRefDADissenterGetStatusString(DADissenterRef dissenter);
```

## Parameters

- `dissenter`: The DADissenter for which to obtain the return code string.

<a id="return-value"></a>

## Return Value

The return code string.

## See Also

### Miscellaneous

- [DADissenterCreate](dadissentercreate%28______%29.md): Creates a new dissenter object.
- [DADissenterGetStatus](dadissentergetstatus%28__%29.md): Obtains the return code.
