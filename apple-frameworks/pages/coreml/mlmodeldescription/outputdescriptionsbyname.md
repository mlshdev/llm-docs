> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription/outputdescriptionsbyname](https://developer.apple.com/documentation/coreml/mlmodeldescription/outputdescriptionsbyname)

# outputDescriptionsByName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of output feature descriptions, which the model keys by the output’s name.

## Declaration

```swift
var outputDescriptionsByName: [String : MLFeatureDescription] { get }
```

## See Also

### Accessing feature descriptions

- [stateDescriptionsByName](statedescriptionsbyname.md): Description of the state features.
- [inputDescriptionsByName](inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.

# outputDescriptionsByName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of output feature descriptions, which the model keys by the output’s name.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,MLFeatureDescription *> * outputDescriptionsByName;
```

## See Also

### Accessing feature descriptions

- [stateDescriptionsByName](statedescriptionsbyname.md): Description of the state features.
- [inputDescriptionsByName](inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.
