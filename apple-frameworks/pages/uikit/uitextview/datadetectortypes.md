> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/datadetectortypes](https://developer.apple.com/documentation/uikit/uitextview/datadetectortypes)

# dataDetectorTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of data that convert to tappable URLs in the text view.

## Declaration

```swift
var dataDetectorTypes: UIDataDetectorTypes { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to specify the types of data (phone numbers, `http` links, and so on) that should be automatically converted to URLs in the text view. When tapped, the text view opens the application responsible for handling the URL type and passes it the URL. Note that data detection does not occur if the text view’s [isEditable](iseditable.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Formatting special data in text

- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.

# dataDetectorTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of data that convert to tappable URLs in the text view.

## Declaration

```objectivec
@property (nonatomic) UIDataDetectorTypes dataDetectorTypes;
```

<a id="Discussion"></a>

## Discussion

You can use this property to specify the types of data (phone numbers, `http` links, and so on) that should be automatically converted to URLs in the text view. When tapped, the text view opens the application responsible for handling the URL type and passes it the URL. Note that data detection does not occur if the text view’s [editable](iseditable.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Formatting special data in text

- [UIDataDetectorTypes](../uidatadetectortypes.md): Constants that define the types of information to detect in text-based content.
