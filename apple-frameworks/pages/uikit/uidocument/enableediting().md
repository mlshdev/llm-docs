> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/enableediting()](https://developer.apple.com/documentation/uikit/uidocument/enableediting())

# enableEditing() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Enables editing when it’s safe again to make changes to a document.

## Declaration

```swift
func enableEditing()
```

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to allow the user to edit the document when it’s safe to do so. This method override should be paired with an override of [disableEditing()](disableediting%28%29.md). The default implementation of this method does nothing.

## See Also

### Disabling and enabling editing

- [disableEditing()](disableediting%28%29.md): Disables editing when it’s unsafe to make changes to a document.

# enableEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Enables editing when it’s safe again to make changes to a document.

## Declaration

```objectivec
- (void) enableEditing;
```

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to allow the user to edit the document when it’s safe to do so. This method override should be paired with an override of [disableEditing](disableediting%28%29.md). The default implementation of this method does nothing.

## See Also

### Disabling and enabling editing

- [disableEditing](disableediting%28%29.md): Disables editing when it’s unsafe to make changes to a document.
