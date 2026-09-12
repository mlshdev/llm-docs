> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton/jointname/init(_:)](https://developer.apple.com/documentation/arkit/arskeleton/jointname/init(_:))

# init(\_:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Returns a joint name that corresponds to a key point defined in a human body pose.

## Declaration

```swift
init?(_ recognizedPointKey: VNRecognizedPointKey)
```

## Parameters

- `recognizedPointKey`: The argument key point.

<a id="Discussion"></a>

## Discussion

This function matches human body key points defined by the Vision framework with joint names defined by ARKit. This function may return `nil` if the key point doesn’t map to a joint name. For more information about key points, see [Detecting Human Body Poses in Images](../../../vision/detecting-human-body-poses-in-images.md).

## See Also

### Creating a Joint Name

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new joint name.
- [VNRecognizedPointKey](../../../vision/vnrecognizedpointkey.md): The data type for all recognized point keys.

# ARSkeletonJointNameForRecognizedPointKey (Objective-C)

**Framework:** ARKit  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Returns a joint name that corresponds to a key point defined in a human body pose.

## Declaration

```objectivec
extern ARSkeletonJointNameARSkeletonJointNameForRecognizedPointKey(VNRecognizedPointKey recognizedPointKey);
```

## Parameters

- `recognizedPointKey`: The argument key point.

<a id="Discussion"></a>

## Discussion

This function matches human body key points defined by the Vision framework with joint names defined by ARKit. This function may return `nil` if the key point doesn’t map to a joint name. For more information about key points, see [Detecting Human Body Poses in Images](../../../vision/detecting-human-body-poses-in-images.md).

## See Also

### Creating a Joint Name

- [VNRecognizedPointKey](../../../vision/vnrecognizedpointkey.md): The data type for all recognized point keys.
