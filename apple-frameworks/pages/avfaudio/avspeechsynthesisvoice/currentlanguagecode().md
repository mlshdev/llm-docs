> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/currentlanguagecode()](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/currentlanguagecode())

# currentLanguageCode() (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the language and locale code for the user’s current locale.

## Declaration

```swift
class func currentLanguageCode() -> String
```

<a id="return-value"></a>

## Return Value

A string that contains the BCP 47 language and locale code for the user’s current locale.

<a id="Discussion"></a>

## Discussion

This code reflects the user’s language and region preferences in the Settings app.

## See Also

### Working with language codes

- [language](language.md): A BCP 47 code that contains the voice’s language and locale.

# currentLanguageCode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the language and locale code for the user’s current locale.

## Declaration

```objectivec
+ (NSString *) currentLanguageCode;
```

<a id="return-value"></a>

## Return Value

A string that contains the BCP 47 language and locale code for the user’s current locale.

<a id="Discussion"></a>

## Discussion

This code reflects the user’s language and region preferences in the Settings app.

## See Also

### Working with language codes

- [language](language.md): A BCP 47 code that contains the voice’s language and locale.
