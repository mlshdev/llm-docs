> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey/learningrate](https://developer.apple.com/documentation/coreml/mlparameterkey/learningrate)

# learningRate (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the optimizer’s learning rate parameter.

## Declaration

```swift
class var learningRate: MLParameterKey { get }
```

<a id="Discussion"></a>

## Discussion

The value type for the [learningRate](learningrate.md) key is a [Double](https://developer.apple.com/documentation/swift/double).

To modify a model’s learning rate midway through an [MLUpdateTask](../mlupdatetask.md), use its [resume(withParameters:)](../mlupdatetask/resume%28withparameters_%29.md) method to set a new value for the model’s learning rate. You do this in the progress handler that you specified in the [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md) instance when you created the update task using [init(forModelAt:trainingData:configuration:progressHandlers:)](../mlupdatetask/init%28formodelat_trainingdata_configuration_progresshandlers_%29.md).

See [Personalizing a Model with On-Device Updates](../personalizing-a-model-with-on-device-updates.md).

## See Also

### Accessing model update parameters

- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [epochs](epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.

# learningRate (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the optimizer’s learning rate parameter.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLParameterKey * learningRate;
```

<a id="Discussion"></a>

## Discussion

The value type for the [learningRate](learningrate.md) key is a [Double](https://developer.apple.com/documentation/swift/double).

To modify a model’s learning rate midway through an [MLUpdateTask](../mlupdatetask.md), use its [resumeWithParameters:](../mlupdatetask/resume%28withparameters_%29.md) method to set a new value for the model’s learning rate. You do this in the progress handler that you specified in the [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md) instance when you created the update task using [updateTaskForModelAtURL:trainingData:configuration:progressHandlers:error:](../mlupdatetask/init%28formodelat_trainingdata_configuration_progresshandlers_%29.md).

See [Personalizing a Model with On-Device Updates](../personalizing-a-model-with-on-device-updates.md).

## See Also

### Accessing model update parameters

- [momentum](momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [epochs](epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.
