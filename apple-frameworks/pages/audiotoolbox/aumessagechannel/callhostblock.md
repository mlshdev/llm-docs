> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumessagechannel/callhostblock](https://developer.apple.com/documentation/audiotoolbox/aumessagechannel/callhostblock)

# callHostBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A callback for the audio unit to send a message to the host.

## Declaration

```swift
optional var callHostBlock: CallHostBlock? { get set }
```

<a id="Discussion"></a>

## Discussion

The host must set a block on this property to use it.

# callHostBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A callback for the audio unit to send a message to the host.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CallHostBlock callHostBlock;
```

```objectivec
@property (atomic, copy, nullable) CallHostBlock callHostBlock;
```

<a id="Discussion"></a>

## Discussion

The host must set a block on this property to use it.
