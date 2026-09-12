> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/interaction](https://developer.apple.com/documentation/foundation/nsuseractivity/interaction)

# interaction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The SiriKit interaction object to use when configuring your app.

## Declaration

```swift
var interaction: INInteraction? { get }
```

<a id="Discussion"></a>

## Discussion

When SiriKit launches your app, it fills this property with the intent and response information that are the reason for launching your app. Use the information in this property to configure your app’s interface and show any relevant interaction details. If your app wasn’t launched because of a Siri interaction, the value in this property is `nil`.

## See Also

### Providing SiriKit with activity details

- [suggestedInvocationPhrase](suggestedinvocationphrase.md): A phrase suggested to the user when they create a shortcut.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

# interaction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The SiriKit interaction object to use when configuring your app.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) INInteraction * interaction;
```

```objectivec
@property (atomic, readonly, nullable) INInteraction * interaction;
```

<a id="Discussion"></a>

## Discussion

When SiriKit launches your app, it fills this property with the intent and response information that are the reason for launching your app. Use the information in this property to configure your app’s interface and show any relevant interaction details. If your app wasn’t launched because of a Siri interaction, the value in this property is `nil`.

## See Also

### Providing SiriKit with activity details

- [suggestedInvocationPhrase](suggestedinvocationphrase.md): A phrase suggested to the user when they create a shortcut.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.
