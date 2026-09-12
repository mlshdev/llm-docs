> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/decoderestorablestate(with:)](https://developer.apple.com/documentation/uikit/uiview/decoderestorablestate(with:))

# decodeRestorableState(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Decodes and restores state-related information for the view.

## Declaration

```swift
func decodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

<a id="Discussion"></a>

## Discussion

If your app supports state restoration, you should override this method for any views for which you also overrode the [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method. Your implementation of this method should use any saved state information to restore the view to its previous configuration. If your [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Preserving and restoring state

- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view supports state restoration.
- [encodeRestorableState(with:)](encoderestorablestate%28with_%29.md): Encodes state-related information for the view.

# decodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decodes and restores state-related information for the view.

## Declaration

```objectivec
- (void) decodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to decode the state of the view.

<a id="Discussion"></a>

## Discussion

If your app supports state restoration, you should override this method for any views for which you also overrode the [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method. Your implementation of this method should use any saved state information to restore the view to its previous configuration. If your [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md) method called `super`, this method should similarly call `super` at some point in its implementation.

## See Also

### Preserving and restoring state

- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view supports state restoration.
- [encodeRestorableStateWithCoder:](encoderestorablestate%28with_%29.md): Encodes state-related information for the view.
