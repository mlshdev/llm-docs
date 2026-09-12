> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription/statedescriptionsbyname](https://developer.apple.com/documentation/coreml/mlmodeldescription/statedescriptionsbyname)

# stateDescriptionsByName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Description of the state features.

## Declaration

```swift
var stateDescriptionsByName: [String : MLFeatureDescription] { get }
```

## See Also

### Accessing feature descriptions

- [inputDescriptionsByName](inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [outputDescriptionsByName](outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.

# stateDescriptionsByName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Description of the state features.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,MLFeatureDescription *> * stateDescriptionsByName;
```

## See Also

### Accessing feature descriptions

- [inputDescriptionsByName](inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [outputDescriptionsByName](outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](../mlfeaturedescription.md): The name, type, and constraints of an input or output feature.
