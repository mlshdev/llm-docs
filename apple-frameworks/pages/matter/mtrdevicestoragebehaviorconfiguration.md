> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicestoragebehaviorconfiguration](https://developer.apple.com/documentation/matter/mtrdevicestoragebehaviorconfiguration)

# MTRDeviceStorageBehaviorConfiguration (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Class that configures how MTRDevice objects persist their attributes to storage, so as to not overwhelm the underlying storage system.

## Declaration

```swift
class MTRDeviceStorageBehaviorConfiguration
```

## Topics

### Initializers

- [init(reportToPersistenceDelayTime:reportToPersistenceDelayTimeMax:recentReportTimesMaxCount:timeBetweenReportsTooShortThreshold:timeBetweenReportsTooShortMinThreshold:reportToPersistenceDelayMaxMultiplier:deviceReportingExcessivelyIntervalThreshold:)](mtrdevicestoragebehaviorconfiguration/init%28reporttopersistencedelaytime_reporttopersistencedelaytimemax_recentreporttimesmaxcount_timebetweenreportstooshortthreshold_timebetweenreportstooshortminthreshold_reporttopersi~c06fe453.md): Create configuration with specified values. See description below for details, and the list of properties below for valid ranges of these values.

### Instance Properties

- [deviceReportingExcessivelyIntervalThreshold](mtrdevicestoragebehaviorconfiguration/devicereportingexcessivelyintervalthreshold.md)
- [disableStorageBehaviorOptimization](mtrdevicestoragebehaviorconfiguration/disablestoragebehavioroptimization.md): If disableStorageBehaviorOptimization is set to YES, then all the waiting mechanism as described above is disabled.
- [recentReportTimesMaxCount](mtrdevicestoragebehaviorconfiguration/recentreporttimesmaxcount.md)
- [reportToPersistenceDelayMaxMultiplier](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaymaxmultiplier.md)
- [reportToPersistenceDelayTime](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytime.md): If any of these properties are set to be out of the documented limits, these default values will be used to replace all of them:
- [reportToPersistenceDelayTimeMax](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytimemax.md)
- [timeBetweenReportsTooShortMinThreshold](mtrdevicestoragebehaviorconfiguration/timebetweenreportstooshortminthreshold.md)
- [timeBetweenReportsTooShortThreshold](mtrdevicestoragebehaviorconfiguration/timebetweenreportstooshortthreshold.md)

### Type Methods

- [withDefaultStorageBehavior()](mtrdevicestoragebehaviorconfiguration/withdefaultstoragebehavior%28%29.md): Create configuration with a default set of values. See description below for details.
- [withStorageBehaviorOptimizationDisabled()](mtrdevicestoragebehaviorconfiguration/withstoragebehavioroptimizationdisabled%28%29.md): Create configuration that disables storage behavior optimizations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceStorageBehaviorConfiguration (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Class that configures how MTRDevice objects persist their attributes to storage, so as to not overwhelm the underlying storage system.

## Declaration

```objectivec
@interface MTRDeviceStorageBehaviorConfiguration : NSObject
```

## Topics

### Instance Properties

- [deviceReportingExcessivelyIntervalThreshold](mtrdevicestoragebehaviorconfiguration/devicereportingexcessivelyintervalthreshold.md)
- [disableStorageBehaviorOptimization](mtrdevicestoragebehaviorconfiguration/disablestoragebehavioroptimization.md): If disableStorageBehaviorOptimization is set to YES, then all the waiting mechanism as described above is disabled.
- [recentReportTimesMaxCount](mtrdevicestoragebehaviorconfiguration/recentreporttimesmaxcount.md)
- [reportToPersistenceDelayMaxMultiplier](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaymaxmultiplier.md)
- [reportToPersistenceDelayTime](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytime.md): If any of these properties are set to be out of the documented limits, these default values will be used to replace all of them:
- [reportToPersistenceDelayTimeMax](mtrdevicestoragebehaviorconfiguration/reporttopersistencedelaytimemax.md)
- [timeBetweenReportsTooShortMinThreshold](mtrdevicestoragebehaviorconfiguration/timebetweenreportstooshortminthreshold.md)
- [timeBetweenReportsTooShortThreshold](mtrdevicestoragebehaviorconfiguration/timebetweenreportstooshortthreshold.md)

### Type Methods

- [configurationWithReportToPersistenceDelayTime:reportToPersistenceDelayTimeMax:recentReportTimesMaxCount:timeBetweenReportsTooShortThreshold:timeBetweenReportsTooShortMinThreshold:reportToPersistenceDelayMaxMultiplier:deviceReportingExcessivelyIntervalThreshold:](mtrdevicestoragebehaviorconfiguration/init%28reporttopersistencedelaytime_reporttopersistencedelaytimemax_recentreporttimesmaxcount_timebetweenreportstooshortthreshold_timebetweenreportstooshortminthreshold_reporttopersi~c06fe453.md): Create configuration with specified values. See description below for details, and the list of properties below for valid ranges of these values.
- [configurationWithDefaultStorageBehavior](mtrdevicestoragebehaviorconfiguration/withdefaultstoragebehavior%28%29.md): Create configuration with a default set of values. See description below for details.
- [configurationWithStorageBehaviorOptimizationDisabled](mtrdevicestoragebehaviorconfiguration/withstoragebehavioroptimizationdisabled%28%29.md): Create configuration that disables storage behavior optimizations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
