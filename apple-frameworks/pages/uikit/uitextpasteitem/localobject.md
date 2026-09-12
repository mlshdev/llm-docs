> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpasteitem/localobject](https://developer.apple.com/documentation/uikit/uitextpasteitem/localobject)

# localObject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The custom local object that the copy or drag source optionally attached to the drag item.

## Declaration

```swift
var localObject: Any? { get }
```

<a id="Discussion"></a>

## Discussion

The local object is available only to the app that initiates the copy or drag activity.

## See Also

### Accessing the text paste item’s data

- [itemProvider](itemprovider.md): The item provider for the item being pasted or dropped.

# localObject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The custom local object that the copy or drag source optionally attached to the drag item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id localObject;
```

<a id="Discussion"></a>

## Discussion

The local object is available only to the app that initiates the copy or drag activity.

## See Also

### Accessing the text paste item’s data

- [itemProvider](itemprovider.md): The item provider for the item being pasted or dropped.
