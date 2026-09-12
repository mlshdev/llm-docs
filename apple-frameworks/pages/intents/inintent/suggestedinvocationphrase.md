> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintent/suggestedinvocationphrase](https://developer.apple.com/documentation/intents/inintent/suggestedinvocationphrase)

# suggestedInvocationPhrase (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The intent’s display name.

## Declaration

```swift
var suggestedInvocationPhrase: String? { get set }
```

## Mentioned In

- [Donating Reservations](../../sirikit/donating-reservations.md)
- [Donating Shortcuts](../../sirikit/donating-shortcuts.md)

<a id="Discussion"></a>

## Discussion

Suggest a short, memorable phrase the user might say to activate this shortcut.

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

# suggestedInvocationPhrase (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The intent’s display name.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * suggestedInvocationPhrase;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * suggestedInvocationPhrase;
```

## Mentioned In

- [Donating Reservations](../../sirikit/donating-reservations.md)
- [Donating Shortcuts](../../sirikit/donating-shortcuts.md)

<a id="Discussion"></a>

## Discussion

Suggest a short, memorable phrase the user might say to activate this shortcut.

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.
