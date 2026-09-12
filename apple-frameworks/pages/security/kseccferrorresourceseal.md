> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccferrorresourceseal](https://developer.apple.com/documentation/security/kseccferrorresourceseal)

# kSecCFErrorResourceSeal (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object containing the part of the resource seal that had a problem.

## Declaration

```swift
let kSecCFErrorResourceSeal: CFString
```

<a id="Discussion"></a>

## Discussion

The `CodeResources` file that gets generated as part of the code signing process serves as the bundle’s seal. This file is a CFDictionary that contains a listing of all the files found within your bundle coupled with their respective hash values and a set of rule definitions. The type of object returned depends on which item in the dictionary had a problem. See [macOS Code Signing In Depth](https://developer.apple.com/library/archive/technotes/tn2206/_index.html#//apple_ref/doc/uid/DTS40007919) for more information on the `CodeResources` file.

# kSecCFErrorResourceSeal (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object containing the part of the resource seal that had a problem.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorResourceSeal;
```

<a id="Discussion"></a>

## Discussion

The `CodeResources` file that gets generated as part of the code signing process serves as the bundle’s seal. This file is a CFDictionary that contains a listing of all the files found within your bundle coupled with their respective hash values and a set of rule definitions. The type of object returned depends on which item in the dictionary had a problem. See [macOS Code Signing In Depth](https://developer.apple.com/library/archive/technotes/tn2206/_index.html#//apple_ref/doc/uid/DTS40007919) for more information on the `CodeResources` file.
