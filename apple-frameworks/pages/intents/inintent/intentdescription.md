> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inintent/intentdescription

# intentDescription (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A string describing the content of the intent.

## Declaration

```swift
var intentDescription: String? { get }
```

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

# intentDescription (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

A string describing the content of the intent.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * intentDescription;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * intentDescription;
```

## See Also

### Accessing Intent Information

- [identifier](identifier.md): The unique identifier for this intent object.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.
