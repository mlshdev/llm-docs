> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/init()](https://developer.apple.com/documentation/speech/sfspeechrecognizer/init())

# init() (Swift)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognizer associated with the user’s default language settings.

## Declaration

```swift
convenience init?()
```

<a id="return-value"></a>

## Return Value

An initialized speech recognizer object, or `nil` if there was a problem creating the object.

<a id="discussion"></a>

## Discussion

If the user’s default language is not supported for speech recognition, this method attempts to fall back to the language used by the keyboard for dictation. If that fails, this method returns `nil`.

Even if this method returns a valid speech recognizer object, the speech recognition services may be temporarily unavailable. To determine whether speech recognition services are available, check the [isAvailable](isavailable.md) property.

## See Also

### Creating a speech recognizer

- [init(locale:)](init%28locale_%29.md): Creates a speech recognizer associated with the specified locale.

# init (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognizer associated with the user’s default language settings.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized speech recognizer object, or `nil` if there was a problem creating the object.

<a id="discussion"></a>

## Discussion

If the user’s default language is not supported for speech recognition, this method attempts to fall back to the language used by the keyboard for dictation. If that fails, this method returns `nil`.

Even if this method returns a valid speech recognizer object, the speech recognition services may be temporarily unavailable. To determine whether speech recognition services are available, check the [available](isavailable.md) property.

## See Also

### Creating a speech recognizer

- [initWithLocale:](init%28locale_%29.md): Creates a speech recognizer associated with the specified locale.
