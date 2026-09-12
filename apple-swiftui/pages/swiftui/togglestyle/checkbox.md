> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/togglestyle/checkbox](https://developer.apple.com/documentation/swiftui/togglestyle/checkbox)

# checkbox

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 10.15+

A toggle style that displays a checkbox followed by its label.

## Declaration

```swift
@export(implementation) nonisolated static var checkbox: CheckboxToggleStyle { get }
```

<a id="discussion"></a>

## Discussion

Apply this style to a [Toggle](../toggle.md) or to a view hierarchy that contains toggles using the [toggleStyle(\_:)](../view/togglestyle%28__%29.md) modifier:

```swift
Toggle("Close windows when quitting an app", isOn: $doesClose)
    .toggleStyle(.checkbox)
```

The style produces a label that describes the purpose of the toggle and a checkbox that shows the toggle’s state. To change the toggle’s state, the user clicks the checkbox or its label:

![A screenshot of a box with a checkmark in it, appearing to the left](https://developer.apple.com/images/com.apple.SwiftUI/ToggleStyle-checkbox-1-macOS@2x.png)

The style aligns the trailing edge of the checkbox with the leading edge of the label, and takes as much horizontal space as it needs to fit the label, up to the amount offered by the toggle’s parent view.

This is the default style in macOS in most contexts when you don’t set a style, or when you apply the [automatic](automatic.md) style. A [Form](../form.md) is a convenient way to present a collection of checkboxes with proper spacing and alignment. For guidance on using checkboxes in your user interface, see [Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles) in the Human Interface Guidelines.

## See Also

### Getting built-in toggle styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultToggleStyle`. The default toggle style.
- [button](button.md): Conforms when `Self` is `ButtonToggleStyle`. A toggle style that displays as a button with its label as the title.
- [switch](switch.md): Conforms when `Self` is `SwitchToggleStyle`. A toggle style that displays a leading label and a trailing switch.
