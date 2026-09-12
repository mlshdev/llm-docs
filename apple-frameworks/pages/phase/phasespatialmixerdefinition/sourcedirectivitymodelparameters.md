> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialmixerdefinition/sourcedirectivitymodelparameters](https://developer.apple.com/documentation/phase/phasespatialmixerdefinition/sourcedirectivitymodelparameters)

# sourceDirectivityModelParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that directs sound such that it’s louder when directed at the listener.

## Declaration

```swift
var sourceDirectivityModelParameters: PHASEDirectivityModelParameters? { get set }
```

<a id="Discussion"></a>

## Discussion

The framework applies directivity to sound sources that emanate from a point.

## See Also

### Configuring Directivity

- [listenerDirectivityModelParameters](listenerdirectivitymodelparameters.md): A data set that determines how well the listener hears depending on its direction relative to a sound source.

# sourceDirectivityModelParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that directs sound such that it’s louder when directed at the listener.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PHASEDirectivityModelParameters * sourceDirectivityModelParameters;
```

<a id="Discussion"></a>

## Discussion

The framework applies directivity to sound sources that emanate from a point.

## See Also

### Configuring Directivity

- [listenerDirectivityModelParameters](listenerdirectivitymodelparameters.md): A data set that determines how well the listener hears depending on its direction relative to a sound source.
