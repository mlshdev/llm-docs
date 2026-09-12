> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcbuttonelement/forceinput](https://developer.apple.com/documentation/gamecontroller/gcbuttonelement/forceinput)

# forceInput (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the input containing the measured force applied to the button.

## Declaration

```swift
var forceInput: (any GCLinearInput)? { get }
```

<a id="discussion"></a>

## Discussion

Some buttons feature load cells (also known as button force transducers) capable of measuring applied mechanical force.

# forceInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Get the input containing the measured force applied to the button.

## Declaration

```objectivec
@property (readonly, nullable) id<GCLinearInput> forceInput;
```

<a id="discussion"></a>

## Discussion

Some buttons feature load cells (also known as button force transducers) capable of measuring applied mechanical force.
