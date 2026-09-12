> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/engetexposureinfohandler](https://developer.apple.com/documentation/exposurenotification/engetexposureinfohandler)

# ENGetExposureInfoHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that receives exposure info.

> No longer supported.

## Declaration

```swift
typealias ENGetExposureInfoHandler = ([ENExposureInfo]?, (any Error)?) -> Void
```

# ENGetExposureInfoHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that receives exposure info.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(NSArray<ENExposureInfo *> *, NSError *) ENGetExposureInfoHandler;
```
