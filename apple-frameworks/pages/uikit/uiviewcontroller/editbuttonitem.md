> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/editbuttonitem](https://developer.apple.com/documentation/uikit/uiviewcontroller/editbuttonitem)

# editButtonItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a bar button item that toggles its title and associated state between Edit and Done.

## Declaration

```swift
var editButtonItem: UIBarButtonItem { get }
```

<a id="Discussion"></a>

## Discussion

If one of the custom views of the [navigationItem](navigationitem.md) property is set to the returned object, the associated navigation bar displays an Edit button if [isEditing](isediting.md) is [false](https://developer.apple.com/documentation/swift/false) and a Done button if [isEditing](isediting.md) is [true](https://developer.apple.com/documentation/swift/true). The default button action invokes the [setEditing(\_:animated:)](setediting%28__animated_%29.md) method.

## See Also

### Adding editing behaviors to your view controller

- [isEditing](isediting.md): A Boolean value indicating whether the view controller currently allows the user to edit the view contents.
- [setEditing(\_:animated:)](setediting%28__animated_%29.md): Sets whether the view controller shows an editable view.

# editButtonItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Returns a bar button item that toggles its title and associated state between Edit and Done.

## Declaration

```objectivec
@property (nonatomic, readonly) UIBarButtonItem * editButtonItem;
```

<a id="Discussion"></a>

## Discussion

If one of the custom views of the [navigationItem](navigationitem.md) property is set to the returned object, the associated navigation bar displays an Edit button if [editing](isediting.md) is [false](https://developer.apple.com/documentation/swift/false) and a Done button if [editing](isediting.md) is [true](https://developer.apple.com/documentation/swift/true). The default button action invokes the [setEditing:animated:](setediting%28__animated_%29.md) method.

## See Also

### Adding editing behaviors to your view controller

- [editing](isediting.md): A Boolean value indicating whether the view controller currently allows the user to edit the view contents.
- [setEditing:animated:](setediting%28__animated_%29.md): Sets whether the view controller shows an editable view.
