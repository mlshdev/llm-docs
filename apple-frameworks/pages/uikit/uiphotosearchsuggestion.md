> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiphotosearchsuggestion](https://developer.apple.com/documentation/uikit/uiphotosearchsuggestion)

# UIPhotoSearchSuggestion (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.

## Declaration

```swift
class UIPhotoSearchSuggestion
```

<a id="Discussion"></a>

## Discussion

When someone types text that could match a photo library search, such as “photos from Paris last summer,” the system recognizes the input as a photo library search and delivers a `UIPhotoSearchSuggestion` through the [textField(\_:insertInputSuggestion:)](uitextfielddelegate/textfield%28__insertinputsuggestion_%29.md) or [textView(\_:insertInputSuggestion:)](uitextviewdelegate/textview%28__insertinputsuggestion_%29.md) delegate method. Use `as? UIPhotoSearchSuggestion` to check whether the incoming [UIInputSuggestion](uiinputsuggestion.md) is a photo search suggestion and access its metadata.

After receiving a suggestion, you have two options: Pass the object directly to the [Photos](../photos.md) framework to present a pre-populated photo picker, or read the `whoValues`, `whatValues`, `whereValues`, and `whenValues` arrays to build a custom search experience.

You can’t create a `UIPhotoSearchSuggestion` directly. The system creates and delivers instances through the input suggestion system.

<a id="Presenting-a-photo-picker"></a>

### Presenting a photo picker

Pass the suggestion to `PHPickerSearchText(photoSearchSuggestion:)` to pre-populate a `PHPickerViewController` with photos matching the person’s search.

```swift
class SearchViewController: UIViewController, UITextFieldDelegate, PHPickerViewControllerDelegate {
    @IBOutlet var searchField: UITextField!

    func textField(_ textField: UITextField,
                   insertInputSuggestion inputSuggestion: UIInputSuggestion) {
        if let photoSuggestion = inputSuggestion as? UIPhotoSearchSuggestion {
            presentPhotosPicker(with: photoSuggestion)
        }
    }

    func presentPhotosPicker(with suggestion: UIPhotoSearchSuggestion) {
        var configuration = PHPickerConfiguration()
        configuration.searchText = PHPickerSearchText(photoSearchSuggestion: suggestion)
        let picker = PHPickerViewController(configuration: configuration)
        picker.delegate = self
        present(picker, animated: true)
    }

    func picker(_ picker: PHPickerViewController,
                didFinishPicking results: [PHPickerResult]) {
        dismiss(animated: true)
        // Handle selected photos.
    }
}
```

<a id="Building-a-custom-search"></a>

### Building a custom search

If your app has its own photo search UI, read the filter arrays and construct your own query.

```swift
func textField(_ textField: UITextField,
               insertInputSuggestion inputSuggestion: UIInputSuggestion) {
    guard let suggestion = inputSuggestion as? UIPhotoSearchSuggestion else { return }

    // Build a custom query from the individual filter values.
    let who = suggestion.whoValues        // e.g., ["John"]
    let what = suggestion.whatValues      // e.g., ["hiking"]
    let locations = suggestion.whereValues // e.g., ["Paris"]
    let timeframes = suggestion.whenValues // e.g., ["last summer"]

    performCustomPhotoSearch(people: who, subjects: what, locations: locations, timeframes: timeframes)
}
```

## Topics

### Instance Properties

- [whatValues](uiphotosearchsuggestion/whatvalues.md): Subjects or topics mentioned in the text that can be used to filter photos.
- [whenValues](uiphotosearchsuggestion/whenvalues.md): Time periods mentioned in the text that can be used to filter photos.
- [whereValues](uiphotosearchsuggestion/wherevalues.md): Locations mentioned in the text that can be used to filter photos.
- [whoValues](uiphotosearchsuggestion/whovalues.md): People mentioned in the text that can be used to filter photos.

## Relationships

### Inherits From

- [UIInputSuggestion](uiinputsuggestion.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationContext.Entry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationContext.MailEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationContext.MessageEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.

# UIPhotoSearchSuggestion (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An input suggestion that carries photo search metadata for people, subjects, locations, and time periods.

## Declaration

```objectivec
@interface UIPhotoSearchSuggestion : UIInputSuggestion
```

<a id="Discussion"></a>

## Discussion

When someone types text that could match a photo library search, such as “photos from Paris last summer,” the system recognizes the input as a photo library search and delivers a `UIPhotoSearchSuggestion` through the [textField:insertInputSuggestion:](uitextfielddelegate/textfield%28__insertinputsuggestion_%29.md) or [textView:insertInputSuggestion:](uitextviewdelegate/textview%28__insertinputsuggestion_%29.md) delegate method. Use `as? UIPhotoSearchSuggestion` to check whether the incoming [UIInputSuggestion](uiinputsuggestion.md) is a photo search suggestion and access its metadata.

After receiving a suggestion, you have two options: Pass the object directly to the [Photos](../photos.md) framework to present a pre-populated photo picker, or read the `whoValues`, `whatValues`, `whereValues`, and `whenValues` arrays to build a custom search experience.

You can’t create a `UIPhotoSearchSuggestion` directly. The system creates and delivers instances through the input suggestion system.

<a id="Presenting-a-photo-picker"></a>

### Presenting a photo picker

Pass the suggestion to `PHPickerSearchText(photoSearchSuggestion:)` to pre-populate a `PHPickerViewController` with photos matching the person’s search.

```swift
class SearchViewController: UIViewController, UITextFieldDelegate, PHPickerViewControllerDelegate {
    @IBOutlet var searchField: UITextField!

    func textField(_ textField: UITextField,
                   insertInputSuggestion inputSuggestion: UIInputSuggestion) {
        if let photoSuggestion = inputSuggestion as? UIPhotoSearchSuggestion {
            presentPhotosPicker(with: photoSuggestion)
        }
    }

    func presentPhotosPicker(with suggestion: UIPhotoSearchSuggestion) {
        var configuration = PHPickerConfiguration()
        configuration.searchText = PHPickerSearchText(photoSearchSuggestion: suggestion)
        let picker = PHPickerViewController(configuration: configuration)
        picker.delegate = self
        present(picker, animated: true)
    }

    func picker(_ picker: PHPickerViewController,
                didFinishPicking results: [PHPickerResult]) {
        dismiss(animated: true)
        // Handle selected photos.
    }
}
```

<a id="Building-a-custom-search"></a>

### Building a custom search

If your app has its own photo search UI, read the filter arrays and construct your own query.

```swift
func textField(_ textField: UITextField,
               insertInputSuggestion inputSuggestion: UIInputSuggestion) {
    guard let suggestion = inputSuggestion as? UIPhotoSearchSuggestion else { return }

    // Build a custom query from the individual filter values.
    let who = suggestion.whoValues        // e.g., ["John"]
    let what = suggestion.whatValues      // e.g., ["hiking"]
    let locations = suggestion.whereValues // e.g., ["Paris"]
    let timeframes = suggestion.whenValues // e.g., ["last summer"]

    performCustomPhotoSearch(people: who, subjects: what, locations: locations, timeframes: timeframes)
}
```

## Topics

### Instance Properties

- [whatValues](uiphotosearchsuggestion/whatvalues.md): Subjects or topics mentioned in the text that can be used to filter photos.
- [whenValues](uiphotosearchsuggestion/whenvalues.md): Time periods mentioned in the text that can be used to filter photos.
- [whereValues](uiphotosearchsuggestion/wherevalues.md): Locations mentioned in the text that can be used to filter photos.
- [whoValues](uiphotosearchsuggestion/whovalues.md): People mentioned in the text that can be used to filter photos.

## Relationships

### Inherits From

- [UIInputSuggestion](uiinputsuggestion.md)

## See Also

### Smart Reply for messaging

- [Adopting Smart Reply in your messaging or email app](adopting-smart-reply-in-your-messaging-or-email-app.md): Generate reply suggestions by using Apple Intelligence and put selected text into your text UI.
- [UIConversationContext](uiconversationcontext.md): A base class that represents a conversation between participants, such as in an email or messaging app.
- [UIConversationEntry](uiconversationcontext/entry.md): A base class that represents a message in a conversation.
- [UIMailConversationContext](uimailconversationcontext.md): A class that represents an email conversation.
- [UIMailConversationEntry](uimailconversationcontext/mailentry.md): A class that represents a specific email in an email thread.
- [UIMessageConversationContext](uimessageconversationcontext.md): A class that represents a message conversation.
- [UIMessageConversationEntry](uimessageconversationcontext/messageentry.md): A class that represents a message in a message conversation.
- [UIInputSuggestion](uiinputsuggestion.md): A base class you use to handle suggestions from the keyboard or system.
- [UISmartReplySuggestion](uismartreplysuggestion.md): A class you use to handle a Smart Reply suggestion.
