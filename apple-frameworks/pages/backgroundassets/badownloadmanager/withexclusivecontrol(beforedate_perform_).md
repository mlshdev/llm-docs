> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloadmanager/withexclusivecontrol(beforedate:perform:)

# withExclusiveControl(beforeDate:perform:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 27.0) · iPadOS 16.1+ (deprecated in 27.0) · Mac Catalyst 16.1+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 18.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

> Use withExclusiveControl(before:\_:) instead.

## Declaration

```swift
func withExclusiveControl(beforeDate date: Date, perform performHandler: @escaping (Bool, (any Error)?) -> Void)
```

# performWithExclusiveControlBeforeDate:performHandler: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (void) performWithExclusiveControlBeforeDate:(NSDate *) date performHandler:(void (^)(BOOL acquiredLock, NSError *error)) performHandler;
```
