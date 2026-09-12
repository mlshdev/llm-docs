> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/removefilepresenter(_:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/removefilepresenter(_:))

# removeFilePresenter(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters the specified file presenter object.

## Declaration

```swift
class func removeFilePresenter(_ filePresenter: any NSFilePresenter)
```

## Parameters

- `filePresenter`: The file presenter object to unregister. If the object is not currently registered, this method does nothing.

<a id="Discussion"></a>

## Discussion

Call this method to unregister file presenters before those objects are deallocated, even in a garbage-collected application.

## See Also

### Managing File Presenters

- [addFilePresenter(\_:)](addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [filePresenters](filepresenters.md): Returns an array containing the currently registered file presenter objects.
- [purposeIdentifier](purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.

# removeFilePresenter: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Unregisters the specified file presenter object.

## Declaration

```objectivec
+ (void) removeFilePresenter:(id<NSFilePresenter>) filePresenter;
```

## Parameters

- `filePresenter`: The file presenter object to unregister. If the object is not currently registered, this method does nothing.

<a id="Discussion"></a>

## Discussion

Call this method to unregister file presenters before those objects are deallocated, even in a garbage-collected application.

## See Also

### Managing File Presenters

- [addFilePresenter:](addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [filePresenters](filepresenters.md): Returns an array containing the currently registered file presenter objects.
- [purposeIdentifier](purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.
