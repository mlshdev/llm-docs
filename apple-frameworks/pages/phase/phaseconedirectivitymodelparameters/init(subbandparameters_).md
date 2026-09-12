> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelparameters/init(subbandparameters:)](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelparameters/init(subbandparameters:))

# init(subbandParameters:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that directs sound in a cone-shaped curve that extends from a sound source.

## Declaration

```swift
init(subbandParameters: [PHASEConeDirectivityModelSubbandParameters])
```

## Parameters

- `subbandParameters`: An array of frequencies that describe varying sound emission across the spectrum.

# initWithSubbandParameters: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that directs sound in a cone-shaped curve that extends from a sound source.

## Declaration

```objectivec
- (instancetype) initWithSubbandParameters:(NSArray<PHASEConeDirectivityModelSubbandParameters *> *) subbandParameters;
```

## Parameters

- `subbandParameters`: An array of frequencies that describe varying sound emission across the spectrum.
