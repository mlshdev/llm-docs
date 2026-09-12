> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetector/init(oftype:context:options:)](https://developer.apple.com/documentation/coreimage/cidetector/init(oftype:context:options:))

# init(ofType:context:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Creates and returns a configured detector.

## Declaration

```swift
init?(ofType type: String, context: CIContext?, options: [String : Any]? = nil)
```

## Parameters

- `type`: A string indicating the kind of detector you are interested in. See [Detector Types](../detector-types.md).
- `context`: A Core Image context that the detector can use when analyzing an image.
- `options`: A dictionary containing details on how you want the detector to be configured. See [Detector Configuration Keys](../detector-configuration-keys.md).

<a id="return-value"></a>

## Return Value

A configured detector.

<a id="Discussion"></a>

## Discussion

A [CIDetector](../cidetector.md) object can potentially create and hold a significant amount of resources. Where possible, reuse the same [CIDetector](../cidetector.md) instance. Also, when processing images with a detector object, your application performs better if the [CIContext](../cicontext.md) used to initialize the detector is the same context used to process the [ciImage](../../uikit/uiimage/ciimage.md) objects.

# detectorOfType:context:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Creates and returns a configured detector.

## Declaration

```objectivec
+ (CIDetector *) detectorOfType:(NSString *) type context:(CIContext *) context options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `type`: A string indicating the kind of detector you are interested in. See [Detector Types](../detector-types.md).
- `context`: A Core Image context that the detector can use when analyzing an image.
- `options`: A dictionary containing details on how you want the detector to be configured. See [Detector Configuration Keys](../detector-configuration-keys.md).

<a id="return-value"></a>

## Return Value

A configured detector.

<a id="Discussion"></a>

## Discussion

A [CIDetector](../cidetector.md) object can potentially create and hold a significant amount of resources. Where possible, reuse the same [CIDetector](../cidetector.md) instance. Also, when processing images with a detector object, your application performs better if the [CIContext](../cicontext.md) used to initialize the detector is the same context used to process the [CIImage](../../uikit/uiimage/ciimage.md) objects.
