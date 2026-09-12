> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsrandomfillcategoricalfloat(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsrandomfillcategoricalfloat(_:_:_:_:))

# BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fills the specified tensor with random values from the categorical distributions with the given event probabilities.

## Declaration

```swift
func BNNSRandomFillCategoricalFloat(_ generator: BNNSRandomGenerator?, _ desc: UnsafePointer<BNNSNDArrayDescriptor>, _ probabilities: UnsafePointer<BNNSNDArrayDescriptor>, _ log_probabilities: Bool) -> Int32
```

## Parameters

- `generator`: The random number generator.
- `desc`: The descriptor of the destination.
- `probabilities`: The descriptor of the probabilities.
- `log_probabilities`: A Boolean value that specifies whether the probabilities descriptor contains event log probabilities.

<a id="Discussion"></a>

## Discussion

Use this function to fill an array descriptor with random values from a categorical distribution with specified event probabilities or event log probabilities.

If you use the same generator on multiple threads, note that this function serializes the generator through an internal lock. To eliminate this contention, use different generators for each thread.

The size and shape of the output descriptor, `desc`, is dependent on the probabilities descriptor. The output descriptor must have the same rank as the probabilities descriptor. The first `rank-1` dimensions of the output descriptor must be the same size as the first `rank-1` dimensions of the probabilities descriptor.

The function treats the first `rank-1` dimensions as batch sizes. On return, the output descriptor contains random integers in the range `[0,1,…,K-1]`, where `K` is the dimension and the number of events.

Supply the probabilities data as nonnegative and finite values. The function normalizes the probabilities values along the innermost dimension so that the probability values (or their exponentials) sum to one along the innermost dimension.

For example, the following code fills an array descriptor with 1024 random integer values between `0` and `14`. The `probabilities` descriptor specifies the likelihood of the random generator selecting any particular value. For example, [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md) never selects `0` or `1`, and is twice as likely to select `3` (with a probability of `10`) than `2` (with a probability of `5`).

```swift
 var desc = BNNSNDArrayDescriptor.allocateUninitialized(scalarType: Float.self,
                                                        shape: .vector(1024))
 
 let probs: [Float] = normalize([0, 0, 5, 10, 8, 6, 4, 2, 0, 0, 5, 10, 5, 0, 0])
 
 var probabilities = BNNSNDArrayDescriptor.allocate(initializingFrom: probs,
                                                    shape: .vector(probs.count))
 
 let rng = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                     nil);
 
 let error = BNNSRandomFillCategoricalFloat(rng, &desc, &probabilities, false)
 
 defer {
     BNNSDestroyRandomGenerator(rng)
 }
```

The following graph shows the normalized event probabilities as a line chart and a histogram of the normalized random values as a bar chart:

![A line chart overlaid on a bar chart, with peaks at 3 and 11 on the x-axis.](https://developer.apple.com/images/com.apple.accelerate/media-4182664@2x.png)

## See Also

### Random number generation

- [BNNS.RandomGenerator](bnns/randomgenerator.md): A random number generator.
- [BNNSCreateRandomGenerator(\_:\_:)](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed(\_:\_:\_:)](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat(\_:\_:\_:\_:)](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat(\_:\_:\_:\_:)](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

# BNNSRandomFillCategoricalFloat (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fills the specified tensor with random values from the categorical distributions with the given event probabilities.

## Declaration

```objectivec
int BNNSRandomFillCategoricalFloat(BNNSRandomGenerator generator, const BNNSNDArrayDescriptor *desc, const BNNSNDArrayDescriptor *probabilities, bool log_probabilities);
```

## Parameters

- `generator`: The random number generator.
- `desc`: The descriptor of the destination.
- `probabilities`: The descriptor of the probabilities.
- `log_probabilities`: A Boolean value that specifies whether the probabilities descriptor contains event log probabilities.

<a id="Discussion"></a>

## Discussion

Use this function to fill an array descriptor with random values from a categorical distribution with specified event probabilities or event log probabilities.

If you use the same generator on multiple threads, note that this function serializes the generator through an internal lock. To eliminate this contention, use different generators for each thread.

The size and shape of the output descriptor, `desc`, is dependent on the probabilities descriptor. The output descriptor must have the same rank as the probabilities descriptor. The first `rank-1` dimensions of the output descriptor must be the same size as the first `rank-1` dimensions of the probabilities descriptor.

The function treats the first `rank-1` dimensions as batch sizes. On return, the output descriptor contains random integers in the range `[0,1,…,K-1]`, where `K` is the dimension and the number of events.

Supply the probabilities data as nonnegative and finite values. The function normalizes the probabilities values along the innermost dimension so that the probability values (or their exponentials) sum to one along the innermost dimension.

For example, the following code fills an array descriptor with 1024 random integer values between `0` and `14`. The `probabilities` descriptor specifies the likelihood of the random generator selecting any particular value. For example, [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md) never selects `0` or `1`, and is twice as likely to select `3` (with a probability of `10`) than `2` (with a probability of `5`).

```swift
 var desc = BNNSNDArrayDescriptor.allocateUninitialized(scalarType: Float.self,
                                                        shape: .vector(1024))
 
 let probs: [Float] = normalize([0, 0, 5, 10, 8, 6, 4, 2, 0, 0, 5, 10, 5, 0, 0])
 
 var probabilities = BNNSNDArrayDescriptor.allocate(initializingFrom: probs,
                                                    shape: .vector(probs.count))
 
 let rng = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                     nil);
 
 let error = BNNSRandomFillCategoricalFloat(rng, &desc, &probabilities, false)
 
 defer {
     BNNSDestroyRandomGenerator(rng)
 }
```

The following graph shows the normalized event probabilities as a line chart and a histogram of the normalized random values as a bar chart:

![A line chart overlaid on a bar chart, with peaks at 3 and 11 on the x-axis.](https://developer.apple.com/images/com.apple.accelerate/media-4182664@2x.png)

## See Also

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md): Returns the state of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
