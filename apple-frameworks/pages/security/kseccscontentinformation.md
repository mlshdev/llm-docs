> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccscontentinformation](https://developer.apple.com/documentation/security/kseccscontentinformation)

# kSecCSContentInformation (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

More information about the file system contents making up the signed code on disk.

## Declaration

```swift
var kSecCSContentInformation: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

It is not generally advisable to make use of this information, but some utilities (such as software-update tools) may find it useful.

# kSecCSContentInformation (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

More information about the file system contents making up the signed code on disk.

## Declaration

```objectivec
kSecCSContentInformation
```

<a id="Discussion"></a>

## Discussion

It is not generally advisable to make use of this information, but some utilities (such as software-update tools) may find it useful.
