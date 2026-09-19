> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconnectionpoint/init(node:bus:)

# init(node:bus:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a connection point object.

## Declaration

```swift
init(node: AVAudioNode, bus: AVAudioNodeBus)
```

## Parameters

- `node`: The source or destination node.
- `bus`: The output or input bus on the node.

<a id="Discussion"></a>

## Discussion

If the node is `nil`, this method fails and returns `nil`.

# initWithNode:bus: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a connection point object.

## Declaration

```objectivec
- (instancetype) initWithNode:(AVAudioNode *) node bus:(AVAudioNodeBus) bus;
```

## Parameters

- `node`: The source or destination node.
- `bus`: The output or input bus on the node.

<a id="Discussion"></a>

## Discussion

If the node is `nil`, this method fails and returns `nil`.
