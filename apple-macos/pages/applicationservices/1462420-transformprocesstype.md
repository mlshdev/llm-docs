> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1462420-transformprocesstype

# TransformProcessType(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TransformProcessType(_ psn: UnsafePointer<ProcessSerialNumber>!, _ transformState: ProcessApplicationTransformState) -> OSStatus
```

# TransformProcessType (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TransformProcessType(const ProcessSerialNumber *psn, ProcessApplicationTransformState transformState);
```
