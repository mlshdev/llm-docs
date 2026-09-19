> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/code-signing-architecture-flags

# Code Signing Architecture Flags (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to get static code.

<a id="overview"></a>

## Overview

These flags supplement the flags described in [SecCSFlags](seccsflags.md). Use these additional constants with the `flags` parameter of the [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md) function.

## Topics

### Constants

- [kSecCSUseAllArchitectures](kseccsuseallarchitectures.md): Flag for requesting all architectures.

# Code Signing Architecture Flags (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to get static code.

<a id="overview"></a>

## Overview

These flags supplement the flags described in [SecCSFlags](seccsflags.md). Use these additional constants with the `flags` parameter of the [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md) function.

## Topics

### Constants

- [kSecCSUseAllArchitectures](kseccsuseallarchitectures.md): Flag for requesting all architectures.
