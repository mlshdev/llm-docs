> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepullstreamnodedefinition/init(mixerdefinition:format:)](https://developer.apple.com/documentation/phase/phasepullstreamnodedefinition/init(mixerdefinition:format:))

# init(mixerDefinition:format:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
init(mixerDefinition: PHASEMixerDefinition, format: AVAudioFormat)
```

## Parameters

- `mixerDefinition`: The mixer definition this stream will be assigned to
- `format`: The AVAudioFormat object that will define the attributes of the audio this node will accept. Only Core Audio’s standard deinterleaved 32-bit floating-point formats are supported.

<a id="return-value"></a>

## Return Value

A new PHASEPullStreamNodeDefinition object

<a id="discussion"></a>

## Discussion

Create a pull stream node definition

# initWithMixerDefinition:format: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (instancetype) initWithMixerDefinition:(PHASEMixerDefinition *) mixerDefinition format:(AVAudioFormat *) format;
```

## Parameters

- `mixerDefinition`: The mixer definition this stream will be assigned to
- `format`: The AVAudioFormat object that will define the attributes of the audio this node will accept. Only Core Audio’s standard deinterleaved 32-bit floating-point formats are supported.

<a id="return-value"></a>

## Return Value

A new PHASEPullStreamNodeDefinition object

<a id="discussion"></a>

## Discussion

Create a pull stream node definition
