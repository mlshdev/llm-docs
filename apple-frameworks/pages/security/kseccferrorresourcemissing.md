> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccferrorresourcemissing](https://developer.apple.com/documentation/security/kseccferrorresourcemissing)

# kSecCFErrorResourceMissing (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL indicating the location of the missing resource as it is specified in the `CodeResources` file.

## Declaration

```swift
let kSecCFErrorResourceMissing: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present when a non-optional sealed resource is missing.

# kSecCFErrorResourceMissing (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL indicating the location of the missing resource as it is specified in the `CodeResources` file.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorResourceMissing;
```

<a id="Discussion"></a>

## Discussion

This key is present when a non-optional sealed resource is missing.
