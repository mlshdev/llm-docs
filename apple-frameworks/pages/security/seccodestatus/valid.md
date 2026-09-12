> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodestatus/valid](https://developer.apple.com/documentation/security/seccodestatus/valid)

# valid (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code is dynamically valid.

## Declaration

```swift
static var valid: SecCodeStatus { get }
```

<a id="Discussion"></a>

## Discussion

Code that’s dynamically valid is running code that started properly signed and has not been invalidated since it started. The valid bit can not be set on running code; it can only be cleared. If you do not set the `kSecCodeStatusValid` flag during creation of the guest with the [SecCodeGetTypeID()](../seccodegettypeid%28%29.md) function, then the new guest is created dynamically invalid and can never become dynamically valid. Note that this bit does not make any representations about the static validity of the code.

# kSecCodeStatusValid (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The code is dynamically valid.

## Declaration

```objectivec
kSecCodeStatusValid
```

<a id="Discussion"></a>

## Discussion

Code that’s dynamically valid is running code that started properly signed and has not been invalidated since it started. The valid bit can not be set on running code; it can only be cleared. If you do not set the `kSecCodeStatusValid` flag during creation of the guest with the [SecCodeGetTypeID](../seccodegettypeid%28%29.md) function, then the new guest is created dynamically invalid and can never become dynamically valid. Note that this bit does not make any representations about the static validity of the code.
