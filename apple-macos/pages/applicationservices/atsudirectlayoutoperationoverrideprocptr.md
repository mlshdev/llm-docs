> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/atsudirectlayoutoperationoverrideprocptr](https://developer.apple.com/documentation/applicationservices/atsudirectlayoutoperationoverrideprocptr)

# ATSUDirectLayoutOperationOverrideProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+

## Declaration

```swift
typealias ATSUDirectLayoutOperationOverrideProcPtr = (ATSULayoutOperationSelector, ATSULineRef?, URefCon?, UnsafeMutableRawPointer?, UnsafeMutablePointer<ATSULayoutOperationCallbackStatus>?) -> OSStatus
```

# ATSUDirectLayoutOperationOverrideProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+

## Declaration

```objectivec
typedef OSStatus (*ATSUDirectLayoutOperationOverrideProcPtr)(ATSULayoutOperationSelector iCurrentOperation, ATSULineRef iLineRef, URefCon iRefCon, void *iOperationCallbackParameterPtr, ATSULayoutOperationCallbackStatus *oCallbackStatus);
```
