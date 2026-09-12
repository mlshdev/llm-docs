> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/support-extended-text-interactions](https://developer.apple.com/documentation/browserenginekit/support-extended-text-interactions)

# Supporting extended text interactions (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Article

Share content, add replacement shortcuts, and perform other rich actions in browser text views.

<a id="Overview"></a>

## Overview

When your browser’s text view conforms to the [BETextInput](betextinput.md) protocol, it automatically also conforms to [BEResponderEditActions](berespondereditactions.md). This protocol adds a collection of optional action methods your text view can implement to support extended text interactions.

To get the system’s standard behavior for an interaction, add a [BETextInteraction](betextinteraction.md) to your custom view’s [textInputView](betextinput/textinputview.md), and call the interaction’s methods in response to `BEResponderEditActions`.

Additionally, implement [canPerformAction(\_:withSender:)](betextinput/canperformaction%28__withsender_%29.md), to return `true` in situations where the interaction is available, but `false` otherwise.

For example, to share the selected text using the standard share sheet:

```swift
class MyBrowserTextView: UIView, BETextInput, BEResponderEditActions {
  func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool {
	if (action == #selector(share(_:))) {
	  return self.canShareSelection
	}
  }
  
  func share(_ sender: Any?) {
    self.textInteraction.shareText(self.selectedText, from:self.selectionRect)
  }
}
```

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.

# Supporting extended text interactions (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Article

Share content, add replacement shortcuts, and perform other rich actions in browser text views.

<a id="Overview"></a>

## Overview

When your browser’s text view conforms to the [BETextInput](betextinput.md) protocol, it automatically also conforms to [BEResponderEditActions](berespondereditactions.md). This protocol adds a collection of optional action methods your text view can implement to support extended text interactions.

To get the system’s standard behavior for an interaction, add a [BETextInteraction](betextinteraction.md) to your custom view’s [textInputView](betextinput/textinputview.md), and call the interaction’s methods in response to `BEResponderEditActions`.

Additionally, implement [canPerformAction:withSender:](betextinput/canperformaction%28__withsender_%29.md), to return `true` in situations where the interaction is available, but `false` otherwise.

For example, to share the selected text using the standard share sheet:

```swift
class MyBrowserTextView: UIView, BETextInput, BEResponderEditActions {
  func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool {
	if (action == #selector(share(_:))) {
	  return self.canShareSelection
	}
  }
  
  func share(_ sender: Any?) {
    self.textInteraction.shareText(self.selectedText, from:self.selectionRect)
  }
}
```

## See Also

### Custom text views

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md): Process keyboard interactions asynchronously in your iOS browser app’s text view.
- [BETextInput](betextinput.md): A protocol for asynchronous text views that integrate with the text system.
- [BETextInputDelegate](betextinputdelegate.md): A delegate protocol that a browser text view uses to notify the text system of changes.
