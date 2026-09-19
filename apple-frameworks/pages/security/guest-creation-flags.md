> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/guest-creation-flags

# Guest Creation Flags

**Interface languages:** Swift, Objective-C

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to create a guest object.

<a id="overview"></a>

## Overview

These flags supplement the flags described in [SecCSFlags](seccsflags.md). Use these additional constants with the flags parameter of the [SecHostCreateGuest](sechostcreateguest.md) function.

## Topics

### Constants

- [kSecCSDedicatedHost](kseccsdedicatedhost.md): Declares dedicated hosting for the given host.
- [kSecCSGenerateGuestHash](kseccsgenerateguesthash.md): Ask the host to generate the unique binary identifier ([kSecCodeInfoUnique](kseccodeinfounique.md)) from the copy on disk at the path given.
