> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccsdynamicinformation](https://developer.apple.com/documentation/security/kseccsdynamicinformation)

# kSecCSDynamicInformation (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Dynamic validity information about running code.

## Declaration

```swift
var kSecCSDynamicInformation: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

This information cannot be returned for code on disk (represented by a [SecStaticCode](secstaticcode.md) object).

# kSecCSDynamicInformation (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Dynamic validity information about running code.

## Declaration

```objectivec
kSecCSDynamicInformation
```

<a id="Discussion"></a>

## Discussion

This information cannot be returned for code on disk (represented by a [SecStaticCodeRef](secstaticcode.md) object).
