> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointsobservation/recognizedpoints(forgroupkey:)](https://developer.apple.com/documentation/vision/vnrecognizedpointsobservation/recognizedpoints(forgroupkey:))

# recognizedPoints(forGroupKey:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points for a key.

## Declaration

```swift
func recognizedPoints(forGroupKey groupKey: VNRecognizedPointGroupKey) throws -> [VNRecognizedPointKey : VNRecognizedPoint]
```

## Parameters

- `groupKey`: The group key to retrieve recognized points for.

<a id="return-value"></a>

## Return Value

A dictionary of labeled points for the group.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoint(forKey:)](recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.

# recognizedPointsForGroupKey:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the recognized points for a key.

## Declaration

```objectivec
- (NSDictionary<NSString *,VNRecognizedPoint *> *) recognizedPointsForGroupKey:(VNRecognizedPointGroupKey) groupKey error:(NSError **) error;
```

## Parameters

- `groupKey`: The group key to retrieve recognized points for.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A dictionary of labeled points for the group. On failure, this method returns `nil`.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointForKey:error:](recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.
