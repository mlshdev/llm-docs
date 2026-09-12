> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/init(locale:)](https://developer.apple.com/documentation/speech/sfspeechrecognizer/init(locale:))

# init(locale:) (Swift)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognizer associated with the specified locale.

## Declaration

```swift
init?(locale: Locale)
```

## Parameters

- `locale`: The locale object representing the language you want to use for speech recognition. For a list of languages supported by the speech recognizer, see [supportedLocales()](supportedlocales%28%29.md).

<a id="return-value"></a>

## Return Value

An initialized speech recognizer object, or `nil` if the specified language was not supported.

<a id="discussion"></a>

## Discussion

If you specify a language that is not supported by the speech recognizer, this method attempts to fall back to the language used by the keyboard for dictation. If that fails, this method returns `nil`.

Even if this method returns a valid speech recognizer object, the speech recognition services may be temporarily unavailable. To determine whether speech recognition services are available, check the [isAvailable](isavailable.md) property.

## See Also

### Creating a speech recognizer

- [init()](init%28%29.md): Creates a speech recognizer associated with the user’s default language settings.

# initWithLocale: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognizer associated with the specified locale.

## Declaration

```objectivec
- (instancetype) initWithLocale:(NSLocale *) locale;
```

## Parameters

- `locale`: The locale object representing the language you want to use for speech recognition. For a list of languages supported by the speech recognizer, see [supportedLocales](supportedlocales%28%29.md).

<a id="return-value"></a>

## Return Value

An initialized speech recognizer object, or `nil` if the specified language was not supported.

<a id="discussion"></a>

## Discussion

If you specify a language that is not supported by the speech recognizer, this method attempts to fall back to the language used by the keyboard for dictation. If that fails, this method returns `nil`.

Even if this method returns a valid speech recognizer object, the speech recognition services may be temporarily unavailable. To determine whether speech recognition services are available, check the [available](isavailable.md) property.

## See Also

### Creating a speech recognizer

- [init](init%28%29.md): Creates a speech recognizer associated with the user’s default language settings.
