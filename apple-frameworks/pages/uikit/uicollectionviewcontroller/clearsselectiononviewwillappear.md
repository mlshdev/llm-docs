> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/clearsselectiononviewwillappear](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/clearsselectiononviewwillappear)

# clearsSelectionOnViewWillAppear (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating if the controller clears the selection when the collection view appears.

## Declaration

```swift
var clearsSelectionOnViewWillAppear: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the collection view controller clears the collection view’s current selection when it receives a [viewWillAppear(\_:)](../uiviewcontroller/viewwillappear%28__%29.md) message. Setting this property to [false](https://developer.apple.com/documentation/swift/false) preserves the selection.

## See Also

### Configuring the collection view behavior

- [installsStandardGestureForInteractiveMovement](installsstandardgestureforinteractivemovement.md): A Boolean value indicating whether the collection view controller installs a standard gesture recognizer to drive the reordering process.

# clearsSelectionOnViewWillAppear (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating if the controller clears the selection when the collection view appears.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsSelectionOnViewWillAppear;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the collection view controller clears the collection view’s current selection when it receives a [viewWillAppear:](../uiviewcontroller/viewwillappear%28__%29.md) message. Setting this property to [false](https://developer.apple.com/documentation/swift/false) preserves the selection.

## See Also

### Configuring the collection view behavior

- [installsStandardGestureForInteractiveMovement](installsstandardgestureforinteractivemovement.md): A Boolean value indicating whether the collection view controller installs a standard gesture recognizer to drive the reordering process.
