> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/init()](https://developer.apple.com/documentation/corehaptics/chhapticengine/init())

# init() (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates an instance of the haptic engine.

## Declaration

```swift
init() throws
```

<a id="Discussion"></a>

## Discussion

The haptic engine isn’t a singleton but a connection to the haptic server inside the user’s device. More than one connection with the haptic server may exist in your app’s view controller or delegate. Each connection functions independently of the others.

## See Also

### Initializing a Haptic Engine

- [init(audioSession:)](init%28audiosession_%29.md): Creates a haptic engine from an audio session.

# initAndReturnError: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates an instance of the haptic engine.

## Declaration

```objectivec
- (instancetype) initAndReturnError:(NSError **) error;
```

## Parameters

- `error`: An error that contains information about failed engine creation, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The haptic engine isn’t a singleton but a connection to the haptic server inside the user’s device. More than one connection with the haptic server may exist in your app’s view controller or delegate. Each connection functions independently of the others.

## See Also

### Initializing a Haptic Engine

- [initWithAudioSession:error:](init%28audiosession_%29.md): Creates a haptic engine from an audio session.
