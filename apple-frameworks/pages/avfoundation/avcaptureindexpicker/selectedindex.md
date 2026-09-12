> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureindexpicker/selectedindex](https://developer.apple.com/documentation/avfoundation/avcaptureindexpicker/selectedindex)

# selectedIndex (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The currently selected index.

## Declaration

```swift
var selectedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. You can only set a value that’s greater than or equal to `0` and less than [numberOfIndexes](numberofindexes.md).

> **Important**

>  Only modify the selected index from the same dispatch queue that you specified in the control’s [setActionQueue:action:](../avcaptureslider/setactionqueue_action_.md) method.

## See Also

### Accessing the control value

- [numberOfIndexes](numberofindexes.md): The number of index values the control provides.

# selectedIndex (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The currently selected index.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger selectedIndex;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. You can only set a value that’s greater than or equal to `0` and less than [numberOfIndexes](numberofindexes.md).

> **Important**

>  Only modify the selected index from the same dispatch queue that you specified in the control’s [setActionQueue:action:](../avcaptureslider/setactionqueue_action_.md) method.

## See Also

### Accessing the control value

- [numberOfIndexes](numberofindexes.md): The number of index values the control provides.
