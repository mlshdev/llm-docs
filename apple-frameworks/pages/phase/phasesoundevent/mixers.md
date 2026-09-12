> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/mixers](https://developer.apple.com/documentation/phase/phasesoundevent/mixers)

# mixers (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Nodes in the event tree that control the volume of their child nodes.

## Declaration

```swift
var mixers: [String : PHASEMixer] { get }
```

## See Also

### Configuring Mixers and Metaparameters

- [metaParameters](metaparameters.md): The object’s meta parameters.

# mixers (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Nodes in the event tree that control the volume of their child nodes.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,PHASEMixer *> * mixers;
```

## See Also

### Configuring Mixers and Metaparameters

- [metaParameters](metaparameters.md): The object’s meta parameters.
