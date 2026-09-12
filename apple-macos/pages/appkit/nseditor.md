> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nseditor](https://developer.apple.com/documentation/appkit/nseditor)

# NSEditor (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSEditor : NSObjectProtocol
```

## Topics

### Instance Methods

- [commitEditing()](nseditor/commitediting%28%29.md)
- [commitEditing(withDelegate:didCommit:contextInfo:)](nseditor/commitediting%28withdelegate_didcommit_contextinfo_%29.md)
- [commitEditingWithoutPresentingError()](nseditor/commiteditingwithoutpresentingerror%28%29.md)
- [discardEditing()](nseditor/discardediting%28%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSArrayController](nsarraycontroller.md)
- [NSCollectionViewItem](nscollectionviewitem.md)
- [NSController](nscontroller.md)
- [NSDictionaryController](nsdictionarycontroller.md)
- [NSObjectController](nsobjectcontroller.md)
- [NSPageController](nspagecontroller.md)
- [NSSplitViewController](nssplitviewcontroller.md)
- [NSSplitViewItemAccessoryViewController](nssplitviewitemaccessoryviewcontroller.md)
- [NSTabViewController](nstabviewcontroller.md)
- [NSTitlebarAccessoryViewController](nstitlebaraccessoryviewcontroller.md)
- [NSTreeController](nstreecontroller.md)
- [NSUserDefaultsController](nsuserdefaultscontroller.md)
- [NSViewController](nsviewcontroller.md)

## See Also

### Object Editing

- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.

# NSEditor (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSEditor <NSObject>
```

## Topics

### Instance Methods

- [commitEditing](nseditor/commitediting%28%29.md)
- [commitEditingWithDelegate:didCommitSelector:contextInfo:](nseditor/commitediting%28withdelegate_didcommit_contextinfo_%29.md)
- [commitEditingAndReturnError:](nseditor/commiteditingwithoutpresentingerror%28%29.md)
- [discardEditing](nseditor/discardediting%28%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSController](nscontroller.md)
- [NSViewController](nsviewcontroller.md)

## See Also

### Object Editing

- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
