> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring/encoderestorablestate(with:)](https://developer.apple.com/documentation/uikit/uistaterestoring/encoderestorablestate(with:))

# encodeRestorableState(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Encodes state-related information for the object.

## Declaration

```swift
optional func encodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to encode the state of the object.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

You can implement this method for any object that has state information you want to preserve. When deciding what data to save, write the smallest amount of data needed to restore the object to its current configuration. The information you save should be data that you could not easily recreate. You can also save references to other objects, such as the view controller that was using the object.

> **Important**

>  This method is not a substitute for saving your app’s data structures persistently to disk. You should continue to save your app’s actual data to iCloud or the local file system using existing techniques. This method is intended only for saving configuration state or other information related to your app’s user interface. You should consider any data you write to the coder as purgeable and be prepared for it to be unavailable during subsequent launches.

It is strongly recommended that you call `super` at some point during your implementation to give parent classes an opportunity to save information too.

## See Also

### Encoding and decoding the object

- [decodeRestorableState(with:)](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.
- [applicationFinishedRestoringState()](applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.

# encodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Encodes state-related information for the object.

## Declaration

```objectivec
- (void) encodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to encode the state of the object.

## Mentioned In

- [About the UI preservation process](../about-the-ui-preservation-process.md)

<a id="Discussion"></a>

## Discussion

You can implement this method for any object that has state information you want to preserve. When deciding what data to save, write the smallest amount of data needed to restore the object to its current configuration. The information you save should be data that you could not easily recreate. You can also save references to other objects, such as the view controller that was using the object.

> **Important**

>  This method is not a substitute for saving your app’s data structures persistently to disk. You should continue to save your app’s actual data to iCloud or the local file system using existing techniques. This method is intended only for saving configuration state or other information related to your app’s user interface. You should consider any data you write to the coder as purgeable and be prepared for it to be unavailable during subsequent launches.

It is strongly recommended that you call `super` at some point during your implementation to give parent classes an opportunity to save information too.

## See Also

### Encoding and decoding the object

- [decodeRestorableStateWithCoder:](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the object.
- [applicationFinishedRestoringState](applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.
