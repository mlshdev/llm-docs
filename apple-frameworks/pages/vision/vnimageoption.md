> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimageoption](https://developer.apple.com/documentation/vision/vnimageoption)

# VNImageOption (Swift)

**Framework:** Vision  
**Kind:** Structure

An option key passed into an image request handler that takes an auxiliary image.

## Declaration

```swift
struct VNImageOption
```

<a id="Discussion"></a>

## Discussion

Pass an option key into the [VNImageRequestHandler](vnimagerequesthandler.md) instance on creation or request.  Option keys are used to describe specific properties of an image or specify how an image needs to be handled.

## Topics

### Initializers

- [init(rawValue:)](vnimageoption/init%28rawvalue_%29.md): Initializes an option key using its string name.

### Options Dictionary Keys

- [properties](vnimageoption/properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [cameraIntrinsics](vnimageoption/cameraintrinsics.md): An option to specify the camera intrinstics.
- [ciContext](vnimageoption/cicontext.md): An option key to specify the context to use in the handler’s Core Image operations.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# VNImageOption (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

An option key passed into an image request handler that takes an auxiliary image.

## Declaration

```objectivec
typedef NSString * VNImageOption;
```

<a id="Discussion"></a>

## Discussion

Pass an option key into the [VNImageRequestHandler](vnimagerequesthandler.md) instance on creation or request.  Option keys are used to describe specific properties of an image or specify how an image needs to be handled.

## Topics

### Options Dictionary Keys

- [VNImageOptionProperties](vnimageoption/properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [VNImageOptionCameraIntrinsics](vnimageoption/cameraintrinsics.md): An option to specify the camera intrinstics.
- [VNImageOptionCIContext](vnimageoption/cicontext.md): An option key to specify the context to use in the handler’s Core Image operations.
