> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointsobservation/availablegroupkeys](https://developer.apple.com/documentation/vision/vnrecognizedpointsobservation/availablegroupkeys)

# availableGroupKeys (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available point group keys in the observation.

## Declaration

```swift
var availableGroupKeys: [VNRecognizedPointGroupKey] { get }
```

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [recognizedPoint(forKey:)](recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.
- [recognizedPoints(forGroupKey:)](recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.

# availableGroupKeys (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available point group keys in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableGroupKeys;
```

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [recognizedPointForKey:error:](recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.
- [recognizedPointsForGroupKey:error:](recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.
