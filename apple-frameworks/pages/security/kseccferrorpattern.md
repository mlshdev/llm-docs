> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccferrorpattern](https://developer.apple.com/documentation/security/kseccferrorpattern)

# kSecCFErrorPattern (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string containing a regular expression that’s part of a resource specification that did not parse correctly.

## Declaration

```swift
let kSecCFErrorPattern: CFString
```

<a id="Discussion"></a>

## Discussion

A resource specification is an information property list (`Info.plist` file) that says which files are resources and which are not. This error is returned if any part of the resource specification can’t be parsed.

# kSecCFErrorPattern (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string containing a regular expression that’s part of a resource specification that did not parse correctly.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorPattern;
```

<a id="Discussion"></a>

## Discussion

A resource specification is an information property list (`Info.plist` file) that says which files are resources and which are not. This error is returned if any part of the resource specification can’t be parsed.
