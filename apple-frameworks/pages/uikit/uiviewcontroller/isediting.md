> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/isediting](https://developer.apple.com/documentation/uikit/uiviewcontroller/isediting)

# isEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value indicating whether the view controller currently allows the user to edit the view contents.

## Declaration

```swift
var isEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the view controller currently allows editing; otherwise, [false](https://developer.apple.com/documentation/swift/false).

If the view is editable and the associated navigation controller contains an edit-done button, then a Done button is displayed; otherwise, an Edit button is displayed. Clicking either button toggles the state of this property. Add an edit-done button by setting the custom left or right view of the navigation item to the value returned by the [editButtonItem](editbuttonitem.md) method. Set the [isEditing](isediting.md) property to the initial state of your view. Use the [setEditing(\_:animated:)](setediting%28__animated_%29.md) method as an action method to animate the transition of this state if the view is already displayed.

## See Also

### Adding editing behaviors to your view controller

- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Sets whether the view controller shows an editable view.
- [editButtonItem](editbuttonitem.md): Returns a bar button item that toggles its title and associated state between Edit and Done.

# editing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A Boolean value indicating whether the view controller currently allows the user to edit the view contents.

## Declaration

```objectivec
@property (nonatomic, getter=isEditing) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the view controller currently allows editing; otherwise, [false](https://developer.apple.com/documentation/swift/false).

If the view is editable and the associated navigation controller contains an edit-done button, then a Done button is displayed; otherwise, an Edit button is displayed. Clicking either button toggles the state of this property. Add an edit-done button by setting the custom left or right view of the navigation item to the value returned by the [editButtonItem](editbuttonitem.md) method. Set the [editing](isediting.md) property to the initial state of your view. Use the [setEditing:animated:](setediting%28__animated_%29.md) method as an action method to animate the transition of this state if the view is already displayed.

## See Also

### Adding editing behaviors to your view controller

- [setEditing:animated:](setediting%28__animated_%29.md): Sets whether the view controller shows an editable view.
- [editButtonItem](editbuttonitem.md): Returns a bar button item that toggles its title and associated state between Edit and Done.
