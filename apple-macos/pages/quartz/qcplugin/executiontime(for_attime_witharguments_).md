> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/qcplugin/executiontime(for:attime:witharguments:)

# executionTime(for:atTime:withArguments:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func executionTime(for context: (any QCPlugInContext)!, atTime time: TimeInterval, withArguments arguments: [AnyHashable : Any]!) -> TimeInterval
```

# executionTimeForContext:atTime:withArguments: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSTimeInterval) executionTimeForContext:(id<QCPlugInContext>) context atTime:(NSTimeInterval) time withArguments:(NSDictionary *) arguments;
```
