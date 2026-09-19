> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/kseccferrorresourceadded

# kSecCFErrorResourceAdded (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL pointing to the resource on disk that is not included in the signed resources for the code.

## Declaration

```swift
let kSecCFErrorResourceAdded: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present when an unsealed resource is found.

# kSecCFErrorResourceAdded (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL pointing to the resource on disk that is not included in the signed resources for the code.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorResourceAdded;
```

<a id="Discussion"></a>

## Discussion

This key is present when an unsealed resource is found.
