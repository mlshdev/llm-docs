> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccferrorinfoplist

# kSecCFErrorInfoPlist (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object identifying the invalid component or key in the dictionary.

## Declaration

```swift
let kSecCFErrorInfoPlist: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present when the `Info.plist` dictionary or other component has been found to be invalid.

# kSecCFErrorInfoPlist (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object identifying the invalid component or key in the dictionary.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorInfoPlist;
```

<a id="Discussion"></a>

## Discussion

This key is present when the `Info.plist` dictionary or other component has been found to be invalid.
