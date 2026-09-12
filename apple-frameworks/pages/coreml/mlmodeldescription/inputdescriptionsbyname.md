> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription/inputdescriptionsbyname](https://developer.apple.com/documentation/coreml/mlmodeldescription/inputdescriptionsbyname)

# inputDescriptionsByName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of input feature descriptions, which the model keys by the input’s name.

## Declaration

```swift
var inputDescriptionsByName: [String : MLFeatureDescription] { get }
```

## See Also

### Accessing feature descriptions

- [stateDescriptionsByName](statedescriptionsbyname.md): Description of the state features.
- [outputDescriptionsByName](outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.

# inputDescriptionsByName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of input feature descriptions, which the model keys by the input’s name.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,MLFeatureDescription *> * inputDescriptionsByName;
```

## See Also

### Accessing feature descriptions

- [stateDescriptionsByName](statedescriptionsbyname.md): Description of the state features.
- [outputDescriptionsByName](outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.
