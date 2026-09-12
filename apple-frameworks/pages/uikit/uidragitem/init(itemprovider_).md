> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragitem/init(itemprovider:)](https://developer.apple.com/documentation/uikit/uidragitem/init(itemprovider:))

# init(itemProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item with a specified item provider.

## Declaration

```swift
init(itemProvider: NSItemProvider)
```

## Parameters

- `itemProvider`: An instance of [NSItemProvider](../../foundation/nsitemprovider.md) that conveys the data or file to share during the drag-and-drop activity.

<a id="return-value"></a>

## Return Value

A drag item that the system initializes with the specified item provider.

<a id="Discussion"></a>

## Discussion

Provide an [NSItemProvider](../../foundation/nsitemprovider.md) object to create a new drag item. The item provider communicates the data that the drag-and-drop activity shares between processes.

# initWithItemProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new drag item with a specified item provider.

## Declaration

```objectivec
- (instancetype) initWithItemProvider:(NSItemProvider *) itemProvider;
```

## Parameters

- `itemProvider`: An instance of [NSItemProvider](../../foundation/nsitemprovider.md) that conveys the data or file to share during the drag-and-drop activity.

<a id="return-value"></a>

## Return Value

A drag item that the system initializes with the specified item provider.

<a id="Discussion"></a>

## Discussion

Provide an [NSItemProvider](../../foundation/nsitemprovider.md) object to create a new drag item. The item provider communicates the data that the drag-and-drop activity shares between processes.
