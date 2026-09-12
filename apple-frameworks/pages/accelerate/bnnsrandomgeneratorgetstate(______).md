> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsrandomgeneratorgetstate(_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsrandomgeneratorgetstate(_:_:_:))

# BNNSRandomGeneratorGetState(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the state of a random number generator.

## Declaration

```swift
func BNNSRandomGeneratorGetState(_ generator: BNNSRandomGenerator?, _ state_size: Int, _ state: UnsafeMutableRawPointer) -> Int32
```

## Parameters

- `generator`: The random number generator.
- `state_size`: The size of the state buffer, in bytes.
- `state`: A pointer to the state.

<a id="Discussion"></a>

## Discussion

Use the [BNNSRandomGeneratorGetState(\_:\_:\_:)](bnnsrandomgeneratorgetstate%28______%29.md) and [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md) functions to capture and restore a random number generator’s state.

The following code creates a random number generator and captures its initial state. The code calls [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md) twice and copies the random values into the arrays `a` and `b`. The [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md) function restores the generator to its initial state, and the final call to [BNNSRandomFillUniformInt(\_:\_:\_:\_:)](bnnsrandomfilluniformint%28________%29.md) populates the descriptor so that the values in arrays `a` and `c` are equal.

```swift
let data = UnsafeMutableBufferPointer<Int16>.allocate(capacity: 8)
var descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (10, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: data.baseAddress!,
                                       data_type: BNNSDataType.int16,
                                       table_data: nil,
                                       table_data_type: BNNSDataType.int16,
                                       data_scale: 1, data_bias: 0)

guard let randomNumberGenerator = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                                            nil) else {
    return
}

// Allocate memory to store state.
let stateSize = BNNSRandomGeneratorStateSize(randomNumberGenerator)
let state = UnsafeMutableRawPointer.allocate(byteCount: stateSize,
                                             alignment: 0)

// Store the random number generator's state.
BNNSRandomGeneratorGetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let a = Array(data)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let b = Array(data)

// Set the random number generator's state to its initial state.
BNNSRandomGeneratorSetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let c = Array(data)

print(a.elementsEqual(c)) // prints "true"

data.deallocate()
state.deallocate()
BNNSDestroyRandomGenerator(randomNumberGenerator)
```

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
- [BNNSRandomFillCategoricalFloat(\_:\_:\_:\_:)](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize(\_:)](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorSetState(\_:\_:\_:)](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator(\_:)](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.

# BNNSRandomGeneratorGetState (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the state of a random number generator.

## Declaration

```objectivec
int BNNSRandomGeneratorGetState(BNNSRandomGenerator generator, size_t state_size, void *state);
```

## Parameters

- `generator`: The random number generator.
- `state_size`: The size of the state buffer, in bytes.
- `state`: A pointer to the state.

<a id="Discussion"></a>

## Discussion

Use the [BNNSRandomGeneratorGetState](bnnsrandomgeneratorgetstate%28______%29.md) and [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md) functions to capture and restore a random number generator’s state.

The following code creates a random number generator and captures its initial state. The code calls [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md) twice and copies the random values into the arrays `a` and `b`. The [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md) function restores the generator to its initial state, and the final call to [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md) populates the descriptor so that the values in arrays `a` and `c` are equal.

```swift
let data = UnsafeMutableBufferPointer<Int16>.allocate(capacity: 8)
var descriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                       layout: BNNSDataLayoutVector,
                                       size: (10, 0, 0, 0, 0, 0, 0, 0),
                                       stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                       data: data.baseAddress!,
                                       data_type: BNNSDataType.int16,
                                       table_data: nil,
                                       table_data_type: BNNSDataType.int16,
                                       data_scale: 1, data_bias: 0)

guard let randomNumberGenerator = BNNSCreateRandomGenerator(BNNSRandomGeneratorMethodAES_CTR,
                                                            nil) else {
    return
}

// Allocate memory to store state.
let stateSize = BNNSRandomGeneratorStateSize(randomNumberGenerator)
let state = UnsafeMutableRawPointer.allocate(byteCount: stateSize,
                                             alignment: 0)

// Store the random number generator's state.
BNNSRandomGeneratorGetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let a = Array(data)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let b = Array(data)

// Set the random number generator's state to its initial state.
BNNSRandomGeneratorSetState(randomNumberGenerator,
                            stateSize,
                            state)

BNNSRandomFillUniformInt(randomNumberGenerator,
                         &descriptor,
                         -10,
                         10)

let c = Array(data)

print(a.elementsEqual(c)) // prints "true"

data.deallocate()
state.deallocate()
BNNSDestroyRandomGenerator(randomNumberGenerator)
```

## See Also

### Random number generation

- [BNNSCreateRandomGenerator](bnnscreaterandomgenerator%28____%29.md): Returns a new random number generator using an internally generated random seed.
- [BNNSCreateRandomGeneratorWithSeed](bnnscreaterandomgeneratorwithseed%28______%29.md): Returns a new random number generator using the specified seed.
- [BNNSRandomGeneratorMethod](bnnsrandomgeneratormethod.md): Constants that describe random number generation methods.
- [BNNSRandomGenerator](bnnsrandomgenerator.md): A pointer to a random number generator object.
- [BNNSRandomFillUniformInt](bnnsrandomfilluniformint%28________%29.md): Fills the specified tensor with random integer values from the continuous uniform distribution within a range.
- [BNNSRandomFillUniformFloat](bnnsrandomfilluniformfloat%28________%29.md): Fills the specified tensor with random floating-point values from the continuous uniform distribution within a range.
- [BNNSRandomFillNormalFloat](bnnsrandomfillnormalfloat%28________%29.md): Fills the specified tensor with random floating-point values mapped to a normal distribution.
- [BNNSRandomFillCategoricalFloat](bnnsrandomfillcategoricalfloat%28________%29.md): Fills the specified tensor with random values from the categorical distributions with the given event probabilities.
- [BNNSRandomGeneratorStateSize](bnnsrandomgeneratorstatesize%28__%29.md): Returns the state size, in bytes, of a random number generator.
- [BNNSRandomGeneratorSetState](bnnsrandomgeneratorsetstate%28______%29.md): Sets the state of a random number generator.
- [BNNSDestroyRandomGenerator](bnnsdestroyrandomgenerator%28__%29.md): Destroys a random number generator.
