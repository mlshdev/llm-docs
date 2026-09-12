> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcontroller/installsstandardgestureforinteractivemovement](https://developer.apple.com/documentation/uikit/uicollectionviewcontroller/installsstandardgestureforinteractivemovement)

# installsStandardGestureForInteractiveMovement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the collection view controller installs a standard gesture recognizer to drive the reordering process.

## Declaration

```swift
var installsStandardGestureForInteractiveMovement: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the collection view controller installs a standard gesture recognizer (based on a long-press gesture) to manage the reordering of views inside the collection view. The collection view’s data source must declare its support for reordering items by implementing the appropriate methods. Setting this property to [false](https://developer.apple.com/documentation/swift/false) prevents the installation of this gesture recognizer.

## See Also

### Configuring the collection view behavior

- [clearsSelectionOnViewWillAppear](clearsselectiononviewwillappear.md): A Boolean value indicating if the controller clears the selection when the collection view appears.

# installsStandardGestureForInteractiveMovement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value indicating whether the collection view controller installs a standard gesture recognizer to drive the reordering process.

## Declaration

```objectivec
@property (nonatomic) BOOL installsStandardGestureForInteractiveMovement;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the collection view controller installs a standard gesture recognizer (based on a long-press gesture) to manage the reordering of views inside the collection view. The collection view’s data source must declare its support for reordering items by implementing the appropriate methods. Setting this property to [false](https://developer.apple.com/documentation/swift/false) prevents the installation of this gesture recognizer.

## See Also

### Configuring the collection view behavior

- [clearsSelectionOnViewWillAppear](clearsselectiononviewwillappear.md): A Boolean value indicating if the controller clears the selection when the collection view appears.
