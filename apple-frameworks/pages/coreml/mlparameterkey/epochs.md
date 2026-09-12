> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey/epochs](https://developer.apple.com/documentation/coreml/mlparameterkey/epochs)

# epochs (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the optimizer’s epochs parameter.

## Declaration

```swift
class var epochs: MLParameterKey { get }
```

<a id="Discussion"></a>

## Discussion

The value type for the [epochs](epochs.md) key is an [Int64](https://developer.apple.com/documentation/swift/int64).

## See Also

### Accessing model update parameters

- [learningRate](learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.

# epochs (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the optimizer’s epochs parameter.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLParameterKey * epochs;
```

<a id="Discussion"></a>

## Discussion

The value type for the [epochs](epochs.md) key is an [Int64](https://developer.apple.com/documentation/swift/int64).

## See Also

### Accessing model update parameters

- [learningRate](learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.
