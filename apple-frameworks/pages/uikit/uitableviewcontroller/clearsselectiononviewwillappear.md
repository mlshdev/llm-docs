> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcontroller/clearsselectiononviewwillappear](https://developer.apple.com/documentation/uikit/uitableviewcontroller/clearsselectiononviewwillappear)

# clearsSelectionOnViewWillAppear (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating if the controller clears the selection when the table appears.

## Declaration

```swift
var clearsSelectionOnViewWillAppear: Bool { get set }
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the table view controller clears the table’s current selection when it receives a [viewWillAppear(\_:)](../uiviewcontroller/viewwillappear%28__%29.md) message. Setting this property to [false](https://developer.apple.com/documentation/swift/false) preserves the selection.

# clearsSelectionOnViewWillAppear (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating if the controller clears the selection when the table appears.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsSelectionOnViewWillAppear;
```

## Mentioned In

- [Handling row selection in a table view](../handling-row-selection-in-a-table-view.md)

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When [true](https://developer.apple.com/documentation/swift/true), the table view controller clears the table’s current selection when it receives a [viewWillAppear:](../uiviewcontroller/viewwillappear%28__%29.md) message. Setting this property to [false](https://developer.apple.com/documentation/swift/false) preserves the selection.
