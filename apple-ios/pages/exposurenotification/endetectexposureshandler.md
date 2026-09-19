> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/exposurenotification/endetectexposureshandler

# ENDetectExposuresHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that returns exposure summaries.

> No longer supported.

## Declaration

```swift
typealias ENDetectExposuresHandler = (ENExposureDetectionSummary?, (any Error)?) -> Void
```

# ENDetectExposuresHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The definition of a handler that returns exposure summaries.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(ENExposureDetectionSummary *, NSError *) ENDetectExposuresHandler;
```
