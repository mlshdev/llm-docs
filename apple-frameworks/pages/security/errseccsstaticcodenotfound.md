> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccsstaticcodenotfound](https://developer.apple.com/documentation/security/errseccsstaticcodenotfound)

# errSecCSStaticCodeNotFound (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cannot find code object on disk.

## Declaration

```swift
var errSecCSStaticCodeNotFound: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

You can get this error if you specify a location on disk and the system can’t find the code at that location or if the system is checking the validity of running code and it can’t find the code on disk that was the source for the code in memory.

# errSecCSStaticCodeNotFound (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cannot find code object on disk.

## Declaration

```objectivec
errSecCSStaticCodeNotFound
```

<a id="Discussion"></a>

## Discussion

You can get this error if you specify a location on disk and the system can’t find the code at that location or if the system is checking the validity of running code and it can’t find the code on disk that was the source for the code in memory.
