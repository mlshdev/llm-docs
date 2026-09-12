> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpoints3dobservation/recognizedpoints(forgroupkey:)](https://developer.apple.com/documentation/vision/vnrecognizedpoints3dobservation/recognizedpoints(forgroupkey:))

# recognizedPoints(forGroupKey:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a point for a group key you specify.

## Declaration

```swift
func recognizedPoints(forGroupKey groupKey: VNRecognizedPointGroupKey) throws -> [VNRecognizedPointKey : VNRecognizedPoint3D]
```

## Parameters

- `groupKey`: The group key to retrieve points for.

<a id="return-value"></a>

## Return Value

A dictionary of labeled points for the group.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoint(forKey:)](recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.

# recognizedPointsForGroupKey:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a point for a group key you specify.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNRecognizedPoint3D *> *) recognizedPointsForGroupKey:(VNRecognizedPointGroupKey) groupKey error:(NSError **) error;
```

## Parameters

- `groupKey`: The group key to retrieve points for.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A dictionary of labeled points for the group. On failure, this method returns `nil`.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointForKey:error:](recognizedpoint%28forkey_%29.md): Returns a point for a key you specify.
