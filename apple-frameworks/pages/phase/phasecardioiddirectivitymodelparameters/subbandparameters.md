> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasecardioiddirectivitymodelparameters/subbandparameters

# subbandParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An array of frequencies that describe varying sound emission across the spectrum.

## Declaration

```swift
var subbandParameters: [PHASECardioidDirectivityModelSubbandParameters] { get }
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
@property (nonatomic, strong, readonly) NSArray<PHASECardioidDirectivityModelSubbandParameters *> * subbandParameters;
```

<a id="Discussion"></a>

## Discussion

This property is read only. The framework sets the value to the argument you supply the [initWithSubbandParameters:](init%28subbandparameters_%29.md) initializer.
