> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccode](https://developer.apple.com/documentation/security/seccode)

# SecCode (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A code object representing signed code running on the system.

## Declaration

```swift
class SecCode
```

## Mentioned In

- [Hosting Guest Code](hosting-guest-code.md)

<a id="overview"></a>

## Overview

In many function calls, a value of type [SecCode](seccode.md) can be passed to a parameter that is typed as a [SecStaticCode](secstaticcode.md). In these cases, the function performs an implicit call to the [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md) function and operates on the result.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SecCodeRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A code object representing signed code running on the system.

## Declaration

```objectivec
typedef struct __SecCode * SecCodeRef;
```

## Mentioned In

- [Hosting Guest Code](hosting-guest-code.md)

<a id="overview"></a>

## Overview

In many function calls, a value of type [SecCodeRef](seccode.md) can be passed to a parameter that is typed as a [SecStaticCodeRef](secstaticcode.md). In these cases, the function performs an implicit call to the [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md) function and operates on the result.
