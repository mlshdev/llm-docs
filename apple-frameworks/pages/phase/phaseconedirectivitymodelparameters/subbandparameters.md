> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelparameters/subbandparameters](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelparameters/subbandparameters)

# subbandParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of frequencies that describe varying sound emission across the spectrum.

## Declaration

```swift
var subbandParameters: [PHASEConeDirectivityModelSubbandParameters] { get }
```

<a id="Discussion"></a>

## Discussion

This property is read only. The framework sets the value to the argument you supply the [init(subbandParameters:)](init%28subbandparameters_%29.md) initializer.

# subbandParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of frequencies that describe varying sound emission across the spectrum.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<PHASEConeDirectivityModelSubbandParameters *> * subbandParameters;
```

<a id="Discussion"></a>

## Discussion

This property is read only. The framework sets the value to the argument you supply the [initWithSubbandParameters:](init%28subbandparameters_%29.md) initializer.
