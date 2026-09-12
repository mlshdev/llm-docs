> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/textfields](https://developer.apple.com/documentation/uikit/uialertcontroller/textfields)

# textFields (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The array of text fields displayed by the alert.

## Declaration

```swift
var textFields: [UITextField]? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the text fields displayed by the alert. The text fields are in the order in which you added them to the alert controller. This order also corresponds to the order in which they are displayed in the alert.

## See Also

### Configuring text fields

- [addTextField(configurationHandler:)](addtextfield%28configurationhandler_%29.md): Adds a text field to an alert.

# textFields (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The array of text fields displayed by the alert.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UITextField *> * textFields;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the text fields displayed by the alert. The text fields are in the order in which you added them to the alert controller. This order also corresponds to the order in which they are displayed in the alert.

## See Also

### Configuring text fields

- [addTextFieldWithConfigurationHandler:](addtextfield%28configurationhandler_%29.md): Adds a text field to an alert.
