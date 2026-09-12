> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/guest-attribute-dictionary-keys](https://developer.apple.com/documentation/security/guest-attribute-dictionary-keys)

# Guest Attribute Dictionary Keys (Swift)

**Framework:** Security  
**Kind:** API Collection

Specify attributes of guest code.

<a id="overview"></a>

## Overview

Use these keys in the dictionary you supply as the `attributes` parameter to the [SecHostCreateGuest](sechostcreateguest.md), [SecHostSetGuestStatus](sechostsetgueststatus.md), and [SecCodeCopyGuestWithAttributes(\_:\_:\_:\_:)](seccodecopyguestwithattributes%28________%29.md) functions.

## Topics

### Constants

- [kSecGuestAttributeArchitecture](ksecguestattributearchitecture.md): A key whose value is a number representing the CPU type under which the guest code is designed to run.
- [kSecGuestAttributeAudit](ksecguestattributeaudit.md)
- [kSecGuestAttributeCanonical](ksecguestattributecanonical.md): A key whose value is the guest code object for that guest.
- [kSecGuestAttributeDynamicCode](ksecguestattributedynamiccode.md)
- [kSecGuestAttributeDynamicCodeInfoPlist](ksecguestattributedynamiccodeinfoplist.md)
- [kSecGuestAttributeHash](ksecguestattributehash.md): A key whose value is a data object containing the SHA-1 hash of the code directory.
- [kSecGuestAttributeMachPort](ksecguestattributemachport.md): Not implemented.
- [kSecGuestAttributePid](ksecguestattributepid.md): A key whose value is an integer of type `pid_t` representing a process ID (PID), usually of the kernel’s guest.
- [kSecGuestAttributeSubarchitecture](ksecguestattributesubarchitecture.md): A key whose value is a number representing the CPU subtype under which the guest code is designed to run.

# Guest Attribute Dictionary Keys (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Specify attributes of guest code.

<a id="overview"></a>

## Overview

Use these keys in the dictionary you supply as the `attributes` parameter to the [SecHostCreateGuest](sechostcreateguest.md), [SecHostSetGuestStatus](sechostsetgueststatus.md), and [SecCodeCopyGuestWithAttributes](seccodecopyguestwithattributes%28________%29.md) functions.

## Topics

### Constants

- [kSecGuestAttributeArchitecture](ksecguestattributearchitecture.md): A key whose value is a number representing the CPU type under which the guest code is designed to run.
- [kSecGuestAttributeAudit](ksecguestattributeaudit.md)
- [kSecGuestAttributeCanonical](ksecguestattributecanonical.md): A key whose value is the guest code object for that guest.
- [kSecGuestAttributeDynamicCode](ksecguestattributedynamiccode.md)
- [kSecGuestAttributeDynamicCodeInfoPlist](ksecguestattributedynamiccodeinfoplist.md)
- [kSecGuestAttributeHash](ksecguestattributehash.md): A key whose value is a data object containing the SHA-1 hash of the code directory.
- [kSecGuestAttributeMachPort](ksecguestattributemachport.md): Not implemented.
- [kSecGuestAttributePid](ksecguestattributepid.md): A key whose value is an integer of type `pid_t` representing a process ID (PID), usually of the kernel’s guest.
- [kSecGuestAttributeSubarchitecture](ksecguestattributesubarchitecture.md): A key whose value is a number representing the CPU subtype under which the guest code is designed to run.
