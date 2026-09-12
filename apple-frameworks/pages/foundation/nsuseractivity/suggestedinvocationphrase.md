> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/suggestedinvocationphrase](https://developer.apple.com/documentation/foundation/nsuseractivity/suggestedinvocationphrase)

# suggestedInvocationPhrase (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A phrase suggested to the user when they create a shortcut.

## Declaration

```swift
var suggestedInvocationPhrase: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system displays the suggested invocation phrase to the user when they create the shortcut. Use a short, memorable phrase, such as “Soup time”.

![A screenshot of adding a shortcut to Siri for one order of tomato soup.](https://developer.apple.com/images/com.apple.foundation/media-3020431@2x.png)

> **Note**

>  To access the [suggestedInvocationPhrase](suggestedinvocationphrase.md) property, import the *Intents* framework.

## See Also

### Providing SiriKit with activity details

- [interaction](interaction.md): The SiriKit interaction object to use when configuring your app.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

# suggestedInvocationPhrase (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A phrase suggested to the user when they create a shortcut.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * suggestedInvocationPhrase;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * suggestedInvocationPhrase;
```

<a id="Discussion"></a>

## Discussion

The system displays the suggested invocation phrase to the user when they create the shortcut. Use a short, memorable phrase, such as “Soup time”.

![A screenshot of adding a shortcut to Siri for one order of tomato soup.](https://developer.apple.com/images/com.apple.foundation/media-3020431@2x.png)

> **Note**

>  To access the [suggestedInvocationPhrase](suggestedinvocationphrase.md) property, import the *Intents* framework.

## See Also

### Providing SiriKit with activity details

- [interaction](interaction.md): The SiriKit interaction object to use when configuring your app.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.
