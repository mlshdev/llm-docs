> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/locale](https://developer.apple.com/documentation/speech/sfspeechrecognizer/locale)

# locale (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The locale of the speech recognizer.

## Declaration

```swift
var locale: Locale { get }
```

<a id="discussion"></a>

## Discussion

The locale of the speech recognizer is an `NSLocale` object. The default value of this property is the system locale (that is, `+[NSLocale systemLocale]`).

## See Also

### Getting the current language

- [supportedLocales()](supportedlocales%28%29.md): Returns the set of locales that are supported by the speech recognizer.

# locale (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The locale of the speech recognizer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSLocale * locale;
```

<a id="discussion"></a>

## Discussion

The locale of the speech recognizer is an `NSLocale` object. The default value of this property is the system locale (that is, `+[NSLocale systemLocale]`).

## See Also

### Getting the current language

- [supportedLocales](supportedlocales%28%29.md): Returns the set of locales that are supported by the speech recognizer.
