> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/indextoucstringprocptr](https://developer.apple.com/documentation/coreservices/indextoucstringprocptr)

# IndexToUCStringProcPtr (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```swift
typealias IndexToUCStringProcPtr = (UInt32, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?, UnsafeMutablePointer<Unmanaged<CFString>?>?, UnsafeMutablePointer<UCTypeSelectOptions>?) -> DarwinBoolean
```

# IndexToUCStringProcPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
typedef Boolean (*IndexToUCStringProcPtr)(UInt32 index, void *listDataPtr, void *refcon, CFStringRef *outString, UCTypeSelectOptions *tsOptions);
```
