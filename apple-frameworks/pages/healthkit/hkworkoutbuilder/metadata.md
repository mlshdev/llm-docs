> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/metadata](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/metadata)

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The metadata the builder saves with the workout.

## Declaration

```swift
var metadata: [String : Any] { get }
```

## See Also

### Adding metadata to the workout

- [addMetadata(\_:completion:)](addmetadata%28__completion_%29.md): Adds metadata to be saved with the workout.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The metadata the builder saves with the workout.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * metadata;
```

## See Also

### Adding metadata to the workout

- [addMetadata:completion:](addmetadata%28__completion_%29.md): Adds metadata to be saved with the workout.
