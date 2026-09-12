> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintent/identifier](https://developer.apple.com/documentation/intents/inintent/identifier)

# identifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier for this intent object.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

SiriKit generates a UUID for this property at creation time and it can’t be changed later. You can use this value in your app to identify the specific request made by the user.

## See Also

### Accessing Intent Information

- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.

# identifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier for this intent object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

SiriKit generates a UUID for this property at creation time and it can’t be changed later. You can use this value in your app to identify the specific request made by the user.

## See Also

### Accessing Intent Information

- [intentDescription](intentdescription.md): A string describing the content of the intent.
- [suggestedInvocationPhrase](suggestedinvocationphrase.md): The intent’s display name.
- [shortcutAvailability](shortcutavailability.md): A set of defined contexts in which an intent or activity might be relevant to a user.
