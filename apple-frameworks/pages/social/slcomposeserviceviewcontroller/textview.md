> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/textview](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/textview)

# textView (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The editable text view in the compose view.

## Declaration

```swift
var textView: UITextView! { get }
```

```swift
var textView: NSTextView! { get }
```

<a id="Discussion"></a>

## Discussion

When a user activates a Post or Send button, you can send their text by sending `self.textView.text`. Note that the `SLComposeServiceViewController` base class creates `textView` in its [loadView()](../../uikit/uiviewcontroller/loadview%28%29.md) method and sets itself to be the `textView` delegate.

## See Also

### Managing the Contents of the Post

- [contentText](contenttext.md): A string that represents the text which the user entered into the compose view’s text view.
- [placeholder](placeholder.md): A string that’s displayed in the compose view’s text view when the text view is empty.

# textView (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

The editable text view in the compose view.

## Declaration

```objectivec
@property (nonatomic, readonly) UITextView * textView;
```

```objectivec
@property (readonly) NSTextView * textView;
```

<a id="Discussion"></a>

## Discussion

When a user activates a Post or Send button, you can send their text by sending `self.textView.text`. Note that the `SLComposeServiceViewController` base class creates `textView` in its [loadView](../../uikit/uiviewcontroller/loadview%28%29.md) method and sets itself to be the `textView` delegate.

## See Also

### Managing the Contents of the Post

- [contentText](contenttext.md): A string that represents the text which the user entered into the compose view’s text view.
- [placeholder](placeholder.md): A string that’s displayed in the compose view’s text view when the text view is empty.
