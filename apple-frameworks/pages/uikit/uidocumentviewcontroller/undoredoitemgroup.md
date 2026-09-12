> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentviewcontroller/undoredoitemgroup](https://developer.apple.com/documentation/uikit/uidocumentviewcontroller/undoredoitemgroup)

# undoRedoItemGroup (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The group that contains the undo/redo buttons that this view controller adds to the navigation bar.

## Declaration

```swift
var undoRedoItemGroup: UIBarButtonItemGroup { get }
```

<a id="Discussion"></a>

## Discussion

If you want undo and redo buttons to appear in your `UIDocumentViewController`, add an `undoRedoItemGroup` to the navigation bar and ensure that your custom `UIDocument` has an undo manager assigned to it. `UIDocumentViewController` sets the hidden property of this group, depending on the availability of an undo manager. It automatically enables or disables the buttons inside the group, as necessary.

# undoRedoItemGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The group that contains the undo/redo buttons that this view controller adds to the navigation bar.

## Declaration

```objectivec
@property (nonatomic, readonly) UIBarButtonItemGroup * undoRedoItemGroup;
```

<a id="Discussion"></a>

## Discussion

If you want undo and redo buttons to appear in your `UIDocumentViewController`, add an `undoRedoItemGroup` to the navigation bar and ensure that your custom `UIDocument` has an undo manager assigned to it. `UIDocumentViewController` sets the hidden property of this group, depending on the availability of an undo manager. It automatically enables or disables the buttons inside the group, as necessary.
