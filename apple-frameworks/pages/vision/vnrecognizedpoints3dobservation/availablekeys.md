> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnrecognizedpoints3dobservation/availablekeys

# availableKeys (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available point keys in the observation.

## Declaration

```swift
var availableKeys: [VNRecognizedPointKey] { get }
```

## See Also

### Inspecting the Observation

- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoint(forKey:)](recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.
- [recognizedPoints(forGroupKey:)](recognizedpoints%28forgroupkey_%29.md): Returns a point for a group key you specify.

# availableKeys (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The available point keys in the observation.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableKeys;
```

## See Also

### Inspecting the Observation

- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointForKey:error:](recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.
- [recognizedPointsForGroupKey:error:](recognizedpoints%28forgroupkey_%29.md): Returns a point for a group key you specify.
