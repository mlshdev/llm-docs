> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/disableediting()](https://developer.apple.com/documentation/uikit/uidocument/disableediting())

# disableEditing() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Disables editing when it’s unsafe to make changes to a document.

## Declaration

```swift
func disableEditing()
```

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to prevent the user from editing the document when it’s unsafe to do so, such as during a save-and-close or revert operation. When editing is safe again, UIKit class calls [enableEditing()](enableediting%28%29.md). The default implementation of this method does nothing.

## See Also

### Disabling and enabling editing

- [enableEditing()](enableediting%28%29.md): Enables editing when it’s safe again to make changes to a document.

# disableEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Disables editing when it’s unsafe to make changes to a document.

## Declaration

```objectivec
- (void) disableEditing;
```

<a id="Discussion"></a>

## Discussion

Subclasses should override this method to prevent the user from editing the document when it’s unsafe to do so, such as during a save-and-close or revert operation. When editing is safe again, UIKit class calls [enableEditing](enableediting%28%29.md). The default implementation of this method does nothing.

## See Also

### Disabling and enabling editing

- [enableEditing](enableediting%28%29.md): Enables editing when it’s safe again to make changes to a document.
