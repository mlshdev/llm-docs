> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/code-signing-information-flags](https://developer.apple.com/documentation/security/code-signing-information-flags)

# Code Signing Information Flags (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to retrieve signing information.

<a id="overview"></a>

## Overview

Use these constants with the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to specify what type of information to return. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md) for more information about the information returned.

## Topics

### Constants

- [kSecCSInternalInformation](kseccsinternalinformation.md): Internal code signing information.
- [kSecCSSigningInformation](kseccssigninginformation.md): Cryptographic signing information.
- [kSecCSRequirementInformation](kseccsrequirementinformation.md): Code requirements—including the designated requirement—embedded in the code.
- [kSecCSDynamicInformation](kseccsdynamicinformation.md): Dynamic validity information about running code.
- [kSecCSContentInformation](kseccscontentinformation.md): More information about the file system contents making up the signed code on disk.
- [kSecCSSkipResourceDirectory](kseccsskipresourcedirectory.md): Suppress validating the resource directory.
- [kSecCSCalculateCMSDigest](kseccscalculatecmsdigest.md)

# Code Signing Information Flags (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these supplemental flags to retrieve signing information.

<a id="overview"></a>

## Overview

Use these constants with the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to specify what type of information to return. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md) for more information about the information returned.

## Topics

### Constants

- [kSecCSInternalInformation](kseccsinternalinformation.md): Internal code signing information.
- [kSecCSSigningInformation](kseccssigninginformation.md): Cryptographic signing information.
- [kSecCSRequirementInformation](kseccsrequirementinformation.md): Code requirements—including the designated requirement—embedded in the code.
- [kSecCSDynamicInformation](kseccsdynamicinformation.md): Dynamic validity information about running code.
- [kSecCSContentInformation](kseccscontentinformation.md): More information about the file system contents making up the signed code on disk.
- [kSecCSSkipResourceDirectory](kseccsskipresourcedirectory.md): Suppress validating the resource directory.
- [kSecCSCalculateCMSDigest](kseccscalculatecmsdigest.md)
