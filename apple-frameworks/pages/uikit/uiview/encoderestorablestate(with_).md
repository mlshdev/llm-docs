> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/encoderestorablestate(with:)](https://developer.apple.com/documentation/uikit/uiview/encoderestorablestate(with:))

# encodeRestorableState(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Encodes state-related information for the view.

## Declaration

```swift
func encodeRestorableState(with coder: NSCoder)
```

## Parameters

- `coder`: The coder object to use to encode the state of the view.

<a id="Discussion"></a>

## Discussion

If your app supports state preservation, you can override this method for any views that have state information that should be saved between launches of your app. You should save only the data required to return the view to its current configuration. Do not save the view object itself and do not save any data that could be determined by other means at launch time.

Few views should need to save state information. Most views should just be configured using the data from their view controller. However, this method is available for those views that have user-configurable state that would be otherwise lost between app launches.

Your implementation of this method can encode other restorable view and view controller objects that it needs to reference. Encoding a restorable view or view controller writes that object’s restoration identifier to the coder. (That identifier is used during the decode process to locate the new version of the object.) If the view or view controller defines its own version of this method, that method is also called at some point so that the object can encode its own state.

Apart from views and view controllers, other objects follow the normal serialization process and must adopt the [NSCoding](../../foundation/nscoding.md) protocol before they can be encoded. Encoding such objects embeds the object’s contents in the archive directly. During the decode process, a new object is created and initialized with the data from the archive.

It is recommended that you call `super` at some point during your implementation to give parent classes an opportunity to save their state information.

## See Also

### Preserving and restoring state

- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view supports state restoration.
- [decodeRestorableState(with:)](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view.

# encodeRestorableStateWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Encodes state-related information for the view.

## Declaration

```objectivec
- (void) encodeRestorableStateWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder object to use to encode the state of the view.

<a id="Discussion"></a>

## Discussion

If your app supports state preservation, you can override this method for any views that have state information that should be saved between launches of your app. You should save only the data required to return the view to its current configuration. Do not save the view object itself and do not save any data that could be determined by other means at launch time.

Few views should need to save state information. Most views should just be configured using the data from their view controller. However, this method is available for those views that have user-configurable state that would be otherwise lost between app launches.

Your implementation of this method can encode other restorable view and view controller objects that it needs to reference. Encoding a restorable view or view controller writes that object’s restoration identifier to the coder. (That identifier is used during the decode process to locate the new version of the object.) If the view or view controller defines its own version of this method, that method is also called at some point so that the object can encode its own state.

Apart from views and view controllers, other objects follow the normal serialization process and must adopt the [NSCoding](../../foundation/nscoding.md) protocol before they can be encoded. Encoding such objects embeds the object’s contents in the archive directly. During the decode process, a new object is created and initialized with the data from the archive.

It is recommended that you call `super` at some point during your implementation to give parent classes an opportunity to save their state information.

## See Also

### Preserving and restoring state

- [restorationIdentifier](restorationidentifier.md): The identifier that determines whether the view supports state restoration.
- [decodeRestorableStateWithCoder:](decoderestorablestate%28with_%29.md): Decodes and restores state-related information for the view.
