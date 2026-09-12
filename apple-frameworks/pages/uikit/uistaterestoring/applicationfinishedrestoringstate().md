> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring/applicationfinishedrestoringstate()](https://developer.apple.com/documentation/uikit/uistaterestoring/applicationfinishedrestoringstate())

# applicationFinishedRestoringState() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called after all objects have had a chance to decode their state.

## Declaration

```swift
optional func applicationFinishedRestoringState()
```

<a id="Discussion"></a>

## Discussion

Implement this method, as needed, to perform additional configuration of the restored object. This method is called toward the end of the restoration process when all objects have been decoded. You might use this method to restore state that exists between multiple objects or in cases where you have dependencies that make decoding those objects in a specific order difficult.

The order in which this method is called on decoded objects is not guaranteed.

## See Also

### Encoding and decoding the object

- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [decodeRestorableState(with:)](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.

# applicationFinishedRestoringState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called after all objects have had a chance to decode their state.

## Declaration

```objectivec
- (void) applicationFinishedRestoringState;
```

<a id="Discussion"></a>

## Discussion

Implement this method, as needed, to perform additional configuration of the restored object. This method is called toward the end of the restoration process when all objects have been decoded. You might use this method to restore state that exists between multiple objects or in cases where you have dependencies that make decoding those objects in a specific order difficult.

The order in which this method is called on decoded objects is not guaranteed.

## See Also

### Encoding and decoding the object

- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [decodeRestorableStateWithCoder:](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.
