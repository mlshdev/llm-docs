> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistaterestoring/decoderestorablestate(with:)](https://developer.apple.com/documentation/uikit/uistaterestoring/decoderestorablestate(with:))

# decodeRestorableState(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Decodes and restores state-related information for the object.

## Declaration

```swift
optional func decodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

If your app supports state restoration, you can implement this method on any object for which you also overrode the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method. Your implementation of this method should read any saved state information from the archive and use it to restore the object to its previous configuration. If your [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Encoding and decoding the object

- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [applicationFinishedRestoringState()](applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.

# decodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Decodes and restores state-related information for the object.

## Declaration

```objectivec
- (void) decodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

## Mentioned In

- [About the UI restoration process](../about-the-ui-restoration-process.md)

<a id="Discussion"></a>

## Discussion

If your app supports state restoration, you can implement this method on any object for which you also overrode the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method. Your implementation of this method should read any saved state information from the archive and use it to restore the object to its previous configuration. If your [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Encoding and decoding the object

- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the object.
- [applicationFinishedRestoringState](applicationfinishedrestoringstate%28%29.md): Called after all objects have had a chance to decode their state.
