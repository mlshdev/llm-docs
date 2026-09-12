> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presenteditemurl](https://developer.apple.com/documentation/foundation/nsfilepresenter/presenteditemurl)

# presentedItemURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL of the presented file or directory.

## Declaration

```swift
var presentedItemURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

File presenters must implement this property and use it to return the file or directory of interest. If this object presents a group of related files that all reside in the same directory, specify the URL of the directory instead of creating separate presenter objects for each file. For example, a single-window application that manages multiple files inside a project directory should monitor the project directory.

The URL associated with your item may be requested by objects not associated with your presenter. Therefore, your implementation of the accessor method for this property must be thread safe and capable of running in multiple dispatch or operation queues simultaneously.

## See Also

### Accessing File Presenter Attributes

- [presentedItemOperationQueue](presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.
- [primaryPresentedItemURL](primarypresenteditemurl.md): The URL of a secondary item’s primary presented file or directory.

# presentedItemURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL of the presented file or directory.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * presentedItemURL;
```

<a id="Discussion"></a>

## Discussion

File presenters must implement this property and use it to return the file or directory of interest. If this object presents a group of related files that all reside in the same directory, specify the URL of the directory instead of creating separate presenter objects for each file. For example, a single-window application that manages multiple files inside a project directory should monitor the project directory.

The URL associated with your item may be requested by objects not associated with your presenter. Therefore, your implementation of the accessor method for this property must be thread safe and capable of running in multiple dispatch or operation queues simultaneously.

## See Also

### Accessing File Presenter Attributes

- [presentedItemOperationQueue](presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.
- [primaryPresentedItemURL](primarypresenteditemurl.md): The URL of a secondary item’s primary presented file or directory.
