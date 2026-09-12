> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentsizecategoryadjusting](https://developer.apple.com/documentation/uikit/uicontentsizecategoryadjusting)

# UIContentSizeCategoryAdjusting (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.

## Declaration

```swift
@MainActor protocol UIContentSizeCategoryAdjusting : NSObjectProtocol
```

## Topics

### Adjusting the size of fonts

- [adjustsFontForContentSizeCategory](uicontentsizecategoryadjusting/adjustsfontforcontentsizecategory.md): A Boolean that indicates whether the object automatically updates its font when the device’s content size category changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UILabel](uilabel.md)
- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [didChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [newValueUserInfoKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.

# UIContentSizeCategoryAdjusting (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A collection of methods that give controls an easy way to adopt automatic adjustment to content category changes.

## Declaration

```objectivec
@protocol UIContentSizeCategoryAdjusting <NSObject>
```

## Topics

### Adjusting the size of fonts

- [adjustsFontForContentSizeCategory](uicontentsizecategoryadjusting/adjustsfontforcontentsizecategory.md): A Boolean that indicates whether the object automatically updates its font when the device’s content size category changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UILabel](uilabel.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Managing the preferred content size

- [preferredContentSizeCategory](uiapplication/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryDidChangeNotification](uicontentsizecategory/didchangenotification.md): A notification that posts when the user changes the preferred content size setting.
- [UIContentSizeCategoryNewValueKey](uicontentsizecategory/newvalueuserinfokey.md): A key that reflects the new preferred content size.
