> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccshostreject](https://developer.apple.com/documentation/security/errseccshostreject)

# errSecCSHostReject (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Code rejected its host.

## Declaration

```swift
var errSecCSHostReject: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

This error indicates that there’s an internal requirement in the signature on the guest code that specifies conditions that the code host must meet, and the host failed to meet that requirement. For example, if the guest requires that the host be signed by Apple and it wasn’t, the system returns this error when validating requirements.

# errSecCSHostReject (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Code rejected its host.

## Declaration

```objectivec
errSecCSHostReject
```

<a id="Discussion"></a>

## Discussion

This error indicates that there’s an internal requirement in the signature on the guest code that specifies conditions that the code host must meet, and the host failed to meet that requirement. For example, if the guest requires that the host be signed by Apple and it wasn’t, the system returns this error when validating requirements.
