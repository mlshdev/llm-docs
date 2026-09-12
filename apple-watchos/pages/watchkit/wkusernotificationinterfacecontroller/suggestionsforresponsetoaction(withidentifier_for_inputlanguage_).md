> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkusernotificationinterfacecontroller/suggestionsforresponsetoaction(withidentifier:for:inputlanguage:)](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/suggestionsforresponsetoaction(withidentifier:for:inputlanguage:))

# suggestionsForResponseToAction(withIdentifier:for:inputLanguage:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns an array of attributed strings representing the text suggestions to display during text input.

## Declaration

```swift
func suggestionsForResponseToAction(withIdentifier identifier: String, for notification: UNNotification, inputLanguage: String) -> [String]
```

## Parameters

- `identifier`: The identifier associated with the registered action. You specify this identifier when registering your actions from your iOS app.
- `notification`: The notification object. Use this object to get information about the notification being displayed.
- `inputLanguage`: The language to use for the returned suggestions. The string contains a canonical language identifier that you can use to initialize an [NSLocale](https://developer.apple.com/documentation/foundation/nslocale) object or look up localized versions of strings.

<a id="return-value"></a>

## Return Value

An array of strings representing the text suggestions.

<a id="Discussion"></a>

## Discussion

When the user taps an action button that accepts text input, WatchKit calls this method to retrieve the text suggestions for that action. Use this method to supply any text phrases that might be appropriate for the given action. Use the `inputLanguage` parameter to fetch localized versions of the suggestions.

# suggestionsForResponseToActionWithIdentifier:forNotification:inputLanguage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Returns an array of attributed strings representing the text suggestions to display during text input.

## Declaration

```objectivec
- (NSArray<NSString *> *) suggestionsForResponseToActionWithIdentifier:(NSString *) identifier forNotification:(UNNotification *) notification inputLanguage:(NSString *) inputLanguage;
```

## Parameters

- `identifier`: The identifier associated with the registered action. You specify this identifier when registering your actions from your iOS app.
- `notification`: The notification object. Use this object to get information about the notification being displayed.
- `inputLanguage`: The language to use for the returned suggestions. The string contains a canonical language identifier that you can use to initialize an [NSLocale](https://developer.apple.com/documentation/foundation/nslocale) object or look up localized versions of strings.

<a id="return-value"></a>

## Return Value

An array of strings representing the text suggestions.

<a id="Discussion"></a>

## Discussion

When the user taps an action button that accepts text input, WatchKit calls this method to retrieve the text suggestions for that action. Use this method to supply any text phrases that might be appropriate for the given action. Use the `inputLanguage` parameter to fetch localized versions of the suggestions.
