> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/addtextfield(configurationhandler:)](https://developer.apple.com/documentation/uikit/uialertcontroller/addtextfield(configurationhandler:))

# addTextField(configurationHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a text field to an alert.

## Declaration

```swift
func addTextField(configurationHandler: ((UITextField) -> Void)? = nil)
```

## Parameters

- `configurationHandler`: A block for configuring the text field prior to displaying the alert. This block has no return value and takes a single parameter corresponding to the text field object. Use that parameter to change the text field properties.

<a id="Discussion"></a>

## Discussion

Calling this method adds an editable text field to the alert. You can call this method more than once to add additional text fields. The text fields are stacked in the resulting alert.

You can add a text field only if the [preferredStyle](preferredstyle.md) property is set to [UIAlertController.Style.alert](style/alert.md).

## See Also

### Configuring text fields

- [textFields](textfields.md): The array of text fields displayed by the alert.

# addTextFieldWithConfigurationHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a text field to an alert.

## Declaration

```objectivec
- (void) addTextFieldWithConfigurationHandler:(void (^)(UITextField *textField)) configurationHandler;
```

## Parameters

- `configurationHandler`: A block for configuring the text field prior to displaying the alert. This block has no return value and takes a single parameter corresponding to the text field object. Use that parameter to change the text field properties.

<a id="Discussion"></a>

## Discussion

Calling this method adds an editable text field to the alert. You can call this method more than once to add additional text fields. The text fields are stacked in the resulting alert.

You can add a text field only if the [preferredStyle](preferredstyle.md) property is set to [UIAlertControllerStyleAlert](style/alert.md).

## See Also

### Configuring text fields

- [textFields](textfields.md): The array of text fields displayed by the alert.
