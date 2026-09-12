> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecardioiddirectivitymodelparameters/init(subbandparameters:)](https://developer.apple.com/documentation/phase/phasecardioiddirectivitymodelparameters/init(subbandparameters:))

# init(subbandParameters:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that directs sound in a heart-shaped curve surrounding a sound source.

## Declaration

```swift
init(subbandParameters: [PHASECardioidDirectivityModelSubbandParameters])
```

## Parameters

- `subbandParameters`: An array of frequencies that describe varying sound emission across the spectrum.

# initWithSubbandParameters: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that directs sound in a heart-shaped curve surrounding a sound source.

## Declaration

```objectivec
- (instancetype) initWithSubbandParameters:(NSArray<PHASECardioidDirectivityModelSubbandParameters *> *) subbandParameters;
```

## Parameters

- `subbandParameters`: An array of frequencies that describe varying sound emission across the spectrum.
