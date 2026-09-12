> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/shortcutavailability](https://developer.apple.com/documentation/foundation/nsuseractivity/shortcutavailability)

# shortcutAvailability (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of defined contexts in which an intent or activity might be relevant to a user.

## Declaration

```swift
var shortcutAvailability: INShortcutAvailabilityOptions { get set }
```

<a id="Discussion"></a>

## Discussion

When you donate an activity, include a set of relevant [INShortcutAvailabilityOptions](../../intents/inshortcutavailabilityoptions.md) to describe appropriate categories for offering a shortcut to the activity.

If none of the availability options apply to your intent, use the empty set. The empty set is the default value for this property.

> **Note**

>  To access the `suggestedInvocationPhrase` property, import the Intents framework.

## See Also

### Providing SiriKit with activity details

- [interaction](interaction.md): The SiriKit interaction object to use when configuring your app.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): A phrase suggested to the user when they create a shortcut.

# shortcutAvailability (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of defined contexts in which an intent or activity might be relevant to a user.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INShortcutAvailabilityOptions shortcutAvailability;
```

```objectivec
@property (atomic, assign, readwrite) INShortcutAvailabilityOptions shortcutAvailability;
```

<a id="Discussion"></a>

## Discussion

When you donate an activity, include a set of relevant [INShortcutAvailabilityOptions](../../intents/inshortcutavailabilityoptions.md) to describe appropriate categories for offering a shortcut to the activity.

If none of the availability options apply to your intent, use the empty set. The empty set is the default value for this property.

> **Note**

>  To access the `suggestedInvocationPhrase` property, import the Intents framework.

## See Also

### Providing SiriKit with activity details

- [interaction](interaction.md): The SiriKit interaction object to use when configuring your app.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): A phrase suggested to the user when they create a shortcut.
