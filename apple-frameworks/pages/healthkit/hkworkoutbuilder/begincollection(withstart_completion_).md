> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/begincollection(withstart:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/begincollection(withstart:completion:))

# beginCollection(withStart:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Sets the workout’s start date and begins building the workout.

## Declaration

```swift
func beginCollection(withStart startDate: Date, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func beginCollection(at startDate: Date) async throws
```

## See Also

### Starting the workout

- [startDate](startdate.md): The workout’s start date and time.
- [elapsedTime(at:)](elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.

# beginCollectionWithStartDate:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Sets the workout’s start date and begins building the workout.

## Declaration

```objectivec
- (void) beginCollectionWithStartDate:(NSDate *) startDate completion:(void (^)(BOOL success, NSError *error)) completion;
```

## See Also

### Starting the workout

- [startDate](startdate.md): The workout’s start date and time.
- [elapsedTimeAtDate:](elapsedtime%28at_%29.md): Calculates the duration of the workout at the specified time.
