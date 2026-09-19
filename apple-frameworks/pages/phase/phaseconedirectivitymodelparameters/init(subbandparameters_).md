> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseconedirectivitymodelparameters/init(subbandparameters:)

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
