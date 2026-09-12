> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputgroup/inputs](https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/inputs)

# inputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The inputs with tracks that are mutually exclusive to each other for playback or processing.

## Declaration

```swift
var inputs: [AVAssetWriterInput] { get }
```

## See Also

### Accessing the inputs

- [defaultInput](defaultinput.md): The default input for the group.

# inputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The inputs with tracks that are mutually exclusive to each other for playback or processing.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetWriterInput *> * inputs;
```

## See Also

### Accessing the inputs

- [defaultInput](defaultinput.md): The default input for the group.
