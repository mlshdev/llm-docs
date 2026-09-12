> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintent/shortcutavailability](https://developer.apple.com/documentation/intents/inintent/shortcutavailability)

# shortcutAvailability (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A set of defined contexts in which an intent or activity might be relevant to a user.

## Declaration

```swift
var shortcutAvailability: INShortcutAvailabilityOptions { get set }
```

<a id="Discussion"></a>

## Discussion

When you donate an intent, include a set of relevant [INShortcutAvailabilityOptions](../inshortcutavailabilityoptions.md) options to describe appropriate situations for offering a shortcut to the intent.

If none of the availability options apply to your intent, use the empty set. The empty set is the default value for this property.

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.

# shortcutAvailability (Objective-C)

**Framework:** Intents  
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

When you donate an intent, include a set of relevant [INShortcutAvailabilityOptions](../inshortcutavailabilityoptions.md) options to describe appropriate situations for offering a shortcut to the intent.

If none of the availability options apply to your intent, use the empty set. The empty set is the default value for this property.

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.
