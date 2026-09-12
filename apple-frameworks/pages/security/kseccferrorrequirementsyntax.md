> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccferrorrequirementsyntax](https://developer.apple.com/documentation/security/kseccferrorrequirementsyntax)

# kSecCFErrorRequirementSyntax (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string containing a compilation error generated when parsing a requirement.

## Declaration

```swift
let kSecCFErrorRequirementSyntax: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present when a call to the [SecRequirementCreateWithStringAndErrors(\_:\_:\_:\_:)](secrequirementcreatewithstringanderrors%28________%29.md) function results in a compilation error during the processing of the code requirement string.

# kSecCFErrorRequirementSyntax (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string containing a compilation error generated when parsing a requirement.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorRequirementSyntax;
```

<a id="Discussion"></a>

## Discussion

This key is present when a call to the [SecRequirementCreateWithStringAndErrors](secrequirementcreatewithstringanderrors%28________%29.md) function results in a compilation error during the processing of the code requirement string.
