> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecopyhost(_:_:_:)](https://developer.apple.com/documentation/security/seccodecopyhost(_:_:_:))

# SecCodeCopyHost(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the code object for the host of specified guest code.

## Declaration

```swift
func SecCodeCopyHost(_ guest: SecCode, _ flags: SecCSFlags, _ host: UnsafeMutablePointer<SecCode?>) -> OSStatus
```

## Parameters

- `guest`: A valid code object representing code running on the system as the guest of other code.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `host`: On return, the code object of the host of the code specified in the `guest` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Host code acts as the supervisor and controller of its guest code and is the ultimate authority on the dynamic validity and status of its guests.

# SecCodeCopyHost (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the code object for the host of specified guest code.

## Declaration

```objectivec
OSStatus SecCodeCopyHost(SecCodeRef guest, SecCSFlags flags, SecCodeRef*host);
```

## Parameters

- `guest`: A valid code object representing code running on the system as the guest of other code.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `host`: On return, the code object of the host of the code specified in the `guest` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Host code acts as the supervisor and controller of its guest code and is the ultimate authority on the dynamic validity and status of its guests.
