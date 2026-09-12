> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointsobservation/recognizedpoint(forkey:)](https://developer.apple.com/documentation/vision/vnrecognizedpointsobservation/recognizedpoint(forkey:))

# recognizedPoint(forKey:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves a recognized point for a key.

## Declaration

```swift
func recognizedPoint(forKey pointKey: VNRecognizedPointKey) throws -> VNRecognizedPoint
```

## Parameters

- `pointKey`: The key of the point to retrieve.

<a id="return-value"></a>

## Return Value

The recognized point associated with the key.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoints(forGroupKey:)](recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.

# recognizedPointForKey:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves a recognized point for a key.

## Declaration

```objectivec
- (VNRecognizedPoint *) recognizedPointForKey:(VNRecognizedPointKey) pointKey error:(NSError **) error;
```

## Parameters

- `pointKey`: The key of the point to retrieve.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The recognized point associated with the key. On failure, this method returns `nil`.

## See Also

### Inspecting the Observation

- [availableKeys](availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointsForGroupKey:error:](recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.
