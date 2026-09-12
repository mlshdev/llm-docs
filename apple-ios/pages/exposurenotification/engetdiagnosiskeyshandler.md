> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/engetdiagnosiskeyshandler](https://developer.apple.com/documentation/exposurenotification/engetdiagnosiskeyshandler)

# ENGetDiagnosisKeysHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that returns diagnosis keys.

> No longer supported.

## Declaration

```swift
typealias ENGetDiagnosisKeysHandler = ([ENTemporaryExposureKey]?, (any Error)?) -> Void
```

# ENGetDiagnosisKeysHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that returns diagnosis keys.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(NSArray<ENTemporaryExposureKey *> *, NSError *) ENGetDiagnosisKeysHandler;
```
