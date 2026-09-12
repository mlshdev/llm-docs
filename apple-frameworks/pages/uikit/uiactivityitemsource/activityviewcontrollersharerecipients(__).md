> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontrollersharerecipients(_:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontrollersharerecipients(_:))

# activityViewControllerShareRecipients(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
optional func activityViewControllerShareRecipients(_ activityViewController: UIActivityViewController) -> [INPerson]
```

<a id="discussion"></a>

## Discussion

Allows the activity item source to provide recipients who will be filled in by default in the compose view if that sharing app supports it.

This might fail to pre-fill correctly if the sharing app chosen by the user can’t recognize the provided person. Also, if a people suggestion is chosen, that suggestion will override this provided value.

# activityViewControllerShareRecipients: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (NSArray<INPerson *> *) activityViewControllerShareRecipients:(UIActivityViewController *) activityViewController;
```

<a id="discussion"></a>

## Discussion

Allows the activity item source to provide recipients who will be filled in by default in the compose view if that sharing app supports it.

This might fail to pre-fill correctly if the sharing app chosen by the user can’t recognize the provided person. Also, if a people suggestion is chosen, that suggestion will override this provided value.
