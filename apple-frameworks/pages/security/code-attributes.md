> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/code-attributes](https://developer.apple.com/documentation/security/code-attributes)

# Code Attributes (Swift)

**Framework:** Security  
**Kind:** API Collection

Specify these keys from the attribute dictionary when you create a static code instance.

<a id="overview"></a>

## Overview

Use these keys in the attribute dictionary when calling the [SecStaticCodeCreateWithPathAndAttributes(\_:\_:\_:\_:)](secstaticcodecreatewithpathandattributes%28________%29.md) function.

## Topics

### Constants

- [kSecCodeAttributeArchitecture](kseccodeattributearchitecture.md): A key whose value is a string that indicates an architecture, such as `i386` or `x86_64`.
- [kSecCodeAttributeSubarchitecture](kseccodeattributesubarchitecture.md): A key whose value is a string indicating a specific processor type, such as `i686` or `core2`.
- [kSecCodeAttributeBundleVersion](kseccodeattributebundleversion.md): A key whose value indicates the bundle version.
- [kSecCodeAttributeUniversalFileOffset](kseccodeattributeuniversalfileoffset.md): A key whose value indicates the offset of a Mach-O specific slice of a universal Mach-O file.

# Code Attributes (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Specify these keys from the attribute dictionary when you create a static code instance.

<a id="overview"></a>

## Overview

Use these keys in the attribute dictionary when calling the [SecStaticCodeCreateWithPathAndAttributes](secstaticcodecreatewithpathandattributes%28________%29.md) function.

## Topics

### Constants

- [kSecCodeAttributeArchitecture](kseccodeattributearchitecture.md): A key whose value is a string that indicates an architecture, such as `i386` or `x86_64`.
- [kSecCodeAttributeSubarchitecture](kseccodeattributesubarchitecture.md): A key whose value is a string indicating a specific processor type, such as `i686` or `core2`.
- [kSecCodeAttributeBundleVersion](kseccodeattributebundleversion.md): A key whose value indicates the bundle version.
- [kSecCodeAttributeUniversalFileOffset](kseccodeattributeuniversalfileoffset.md): A key whose value indicates the offset of a Mach-O specific slice of a universal Mach-O file.
