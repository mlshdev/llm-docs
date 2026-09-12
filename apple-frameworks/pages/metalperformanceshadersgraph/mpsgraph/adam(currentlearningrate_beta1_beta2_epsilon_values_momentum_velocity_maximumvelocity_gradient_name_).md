> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/adam(currentlearningrate:beta1:beta2:epsilon:values:momentum:velocity:maximumvelocity:gradient:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/adam(currentlearningrate:beta1:beta2:epsilon:values:momentum:velocity:maximumvelocity:gradient:name:))

# adam(currentLearningRate:beta1:beta2:epsilon:values:momentum:velocity:maximumVelocity:gradient:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates operations to apply Adam optimization.

## Declaration

```swift
func adam(currentLearningRate currentLearningRateTensor: MPSGraphTensor, beta1 beta1Tensor: MPSGraphTensor, beta2 beta2Tensor: MPSGraphTensor, epsilon epsilonTensor: MPSGraphTensor, values valuesTensor: MPSGraphTensor, momentum momentumTensor: MPSGraphTensor, velocity velocityTensor: MPSGraphTensor, maximumVelocity maximumVelocityTensor: MPSGraphTensor?, gradient gradientTensor: MPSGraphTensor, name: String?) -> [MPSGraphTensor]
```

## Parameters

- `beta1Tensor`: beta1Tensor
- `beta2Tensor`: beta2Tensor
- `epsilonTensor`: Epsilon tensor
- `valuesTensor`: Values to update with optimization
- `momentumTensor`: Momentum tensor
- `velocityTensor`: Velocity tensor
- `maximumVelocityTensor`: Optional maximum velocity tensor
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

If maximumVelocity is nil array of 3 tensors (update, newMomentum, newVelocity) else array of 4 tensors (update, newMomentum, newVelocity, newMaximumVelocity)

<a id="discussion"></a>

## Discussion

The adam update ops are added

```md
m[t] = beta1m[t-1] + (1 - beta1) * g
v[t] = beta2v[t-1] + (1 - beta2) * (g ^ 2)
maxVel[t] = max(maxVel[t-1],v[t]) 
variable = variable - lr[t] * m[t] / (sqrt(maxVel) + epsilon)
```

# adamWithCurrentLearningRateTensor:beta1Tensor:beta2Tensor:epsilonTensor:valuesTensor:momentumTensor:velocityTensor:maximumVelocityTensor:gradientTensor:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates operations to apply Adam optimization.

## Declaration

```objectivec
- (NSArray<MPSGraphTensor *> *) adamWithCurrentLearningRateTensor:(MPSGraphTensor *) currentLearningRateTensor beta1Tensor:(MPSGraphTensor *) beta1Tensor beta2Tensor:(MPSGraphTensor *) beta2Tensor epsilonTensor:(MPSGraphTensor *) epsilonTensor valuesTensor:(MPSGraphTensor *) valuesTensor momentumTensor:(MPSGraphTensor *) momentumTensor velocityTensor:(MPSGraphTensor *) velocityTensor maximumVelocityTensor:(MPSGraphTensor *) maximumVelocityTensor gradientTensor:(MPSGraphTensor *) gradientTensor name:(NSString *) name;
```

## Parameters

- `beta1Tensor`: beta1Tensor
- `beta2Tensor`: beta2Tensor
- `epsilonTensor`: Epsilon tensor
- `valuesTensor`: Values to update with optimization
- `momentumTensor`: Momentum tensor
- `velocityTensor`: Velocity tensor
- `maximumVelocityTensor`: Optional maximum velocity tensor
- `gradientTensor`: Partial gradient of the trainable parameters with respect to loss
- `name`: Name for the operation

<a id="return-value"></a>

## Return Value

If maximumVelocity is nil array of 3 tensors (update, newMomentum, newVelocity) else array of 4 tensors (update, newMomentum, newVelocity, newMaximumVelocity)

<a id="discussion"></a>

## Discussion

The adam update ops are added

```md
m[t] = beta1m[t-1] + (1 - beta1) * g
v[t] = beta2v[t-1] + (1 - beta2) * (g ^ 2)
maxVel[t] = max(maxVel[t-1],v[t]) 
variable = variable - lr[t] * m[t] / (sqrt(maxVel) + epsilon)
```
