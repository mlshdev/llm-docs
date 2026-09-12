> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagesapptranscriptpresentation/invalidatemessagetintcolor()](https://developer.apple.com/documentation/messages/msmessagesapptranscriptpresentation/invalidatemessagetintcolor())

# invalidateMessageTintColor() (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
func invalidateMessageTintColor()
```

<a id="discussion"></a>

## Discussion

Call this when `messageTintColor` changes, e.g. due to change in app state or trait collection.

The message will be updated to reflect the new color. This method will only work if the `presentationStyle` is `MSMessagesAppPresentationStyleTranscript`.

# invalidateMessageTintColor (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
- (void) invalidateMessageTintColor;
```

<a id="discussion"></a>

## Discussion

Call this when `messageTintColor` changes, e.g. due to change in app state or trait collection.

The message will be updated to reflect the new color. This method will only work if the `presentationStyle` is `MSMessagesAppPresentationStyleTranscript`.
