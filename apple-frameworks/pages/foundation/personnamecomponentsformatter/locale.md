> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponentsformatter/locale](https://developer.apple.com/documentation/foundation/personnamecomponentsformatter/locale)

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies the locale to format names.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `autoupdatingCurrentLocale`. Also resets to `autoupdatingCurrentLocale` on assignment of `nil`.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies the locale to format names.

## Declaration

```objectivec
@property (copy, null_resettable) NSLocale * locale;
```

<a id="discussion"></a>

## Discussion

Defaults to `autoupdatingCurrentLocale`. Also resets to `autoupdatingCurrentLocale` on assignment of `nil`.
