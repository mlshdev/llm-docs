> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/filepresenters](https://developer.apple.com/documentation/foundation/nsfilecoordinator/filepresenters)

# filePresenters (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the currently registered file presenter objects.

## Declaration

```swift
class var filePresenters: [any NSFilePresenter] { get }
```

<a id="return-value"></a>

## Return Value

An array of objects that conform to the [NSFilePresenter](../nsfilepresenter.md) protocol.

## See Also

### Managing File Presenters

- [addFilePresenter(\_:)](addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [removeFilePresenter(\_:)](removefilepresenter%28__%29.md): Unregisters the specified file presenter object.
- [purposeIdentifier](purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.

# filePresenters (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the currently registered file presenter objects.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<id<NSFilePresenter>> * filePresenters;
```

<a id="return-value"></a>

## Return Value

An array of objects that conform to the [NSFilePresenter](../nsfilepresenter.md) protocol.

## See Also

### Managing File Presenters

- [addFilePresenter:](addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [removeFilePresenter:](removefilepresenter%28__%29.md): Unregisters the specified file presenter object.
- [purposeIdentifier](purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.
