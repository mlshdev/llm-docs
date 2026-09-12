> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/setediting(_:animated:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/setediting(_:animated:))

# setEditing(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Sets whether the view controller shows an editable view.

## Declaration

```swift
func setEditing(_ editing: Bool, animated: Bool)
```

## Parameters

- `editing`: If [true](https://developer.apple.com/documentation/swift/true), the view controller should display an editable view; otherwise, [false](https://developer.apple.com/documentation/swift/false).

  If [true](https://developer.apple.com/documentation/swift/true) and one of the custom views of the [navigationItem](navigationitem.md) property is set to the value returned by the [editButtonItem](editbuttonitem.md) method, the associated navigation controller displays a Done button; otherwise, an Edit button.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animates the transition; otherwise, does not.

<a id="Discussion"></a>

## Discussion

Subclasses that use an edit-done button must override this method to change their view to an editable state if [isEditing](isediting.md) is [true](https://developer.apple.com/documentation/swift/true) and a non-editable state if it is [false](https://developer.apple.com/documentation/swift/false). This method should invoke super’s implementation before updating its view.

## See Also

### Adding editing behaviors to your view controller

- [isEditing](isediting.md): A Boolean value indicating whether the view controller currently allows the user to edit the view contents.
- [editButtonItem](editbuttonitem.md): Returns a bar button item that toggles its title and associated state between Edit and Done.

# setEditing:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Sets whether the view controller shows an editable view.

## Declaration

```objectivec
- (void) setEditing:(BOOL) editing animated:(BOOL) animated;
```

## Parameters

- `editing`: If [true](https://developer.apple.com/documentation/swift/true), the view controller should display an editable view; otherwise, [false](https://developer.apple.com/documentation/swift/false).

  If [true](https://developer.apple.com/documentation/swift/true) and one of the custom views of the [navigationItem](navigationitem.md) property is set to the value returned by the [editButtonItem](editbuttonitem.md) method, the associated navigation controller displays a Done button; otherwise, an Edit button.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animates the transition; otherwise, does not.

<a id="Discussion"></a>

## Discussion

Subclasses that use an edit-done button must override this method to change their view to an editable state if [editing](isediting.md) is [true](https://developer.apple.com/documentation/swift/true) and a non-editable state if it is [false](https://developer.apple.com/documentation/swift/false). This method should invoke super’s implementation before updating its view.

## See Also

### Adding editing behaviors to your view controller

- [editing](isediting.md): A Boolean value indicating whether the view controller currently allows the user to edit the view contents.
- [editButtonItem](editbuttonitem.md): Returns a bar button item that toggles its title and associated state between Edit and Done.
