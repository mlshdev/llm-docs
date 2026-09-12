> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey/eps](https://developer.apple.com/documentation/coreml/mlparameterkey/eps)

# eps (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the Adam optimizer’s epsilon parameter.

## Declaration

```swift
class var eps: MLParameterKey { get }
```

<a id="Discussion"></a>

## Discussion

The value type for the [eps](eps.md) key is a [Double](https://developer.apple.com/documentation/swift/double).

## See Also

### Accessing model update parameters

- [learningRate](learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [epochs](epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.

# eps (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the Adam optimizer’s epsilon parameter.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLParameterKey * eps;
```

<a id="Discussion"></a>

## Discussion

The value type for the [eps](eps.md) key is a [Double](https://developer.apple.com/documentation/swift/double).

## See Also

### Accessing model update parameters

- [learningRate](learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [epochs](epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.
