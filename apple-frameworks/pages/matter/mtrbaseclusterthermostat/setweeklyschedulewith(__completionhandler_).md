> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/setweeklyschedulewith(_:completionhandler:)

# setWeeklyScheduleWith(\_:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setWeeklyScheduleWithParams:completion:

## Declaration

```swift
func setWeeklyScheduleWith(_ params: MTRThermostatClusterSetWeeklyScheduleParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setWeeklyScheduleWith(_ params: MTRThermostatClusterSetWeeklyScheduleParams) async throws
```

# setWeeklyScheduleWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setWeeklyScheduleWithParams:completion:

## Declaration

```objectivec
- (void) setWeeklyScheduleWithParams:(MTRThermostatClusterSetWeeklyScheduleParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
