> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/availablelanguages](https://developer.apple.com/documentation/uikit/uitextchecker/availablelanguages)

# availableLanguages (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the languages that the text checker’s class can perform spell-checking for.

## Declaration

```swift
class var availableLanguages: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of strings representing ISO 639-1 language codes or combined ISO 639-1 language codes and ISO 3166-1 regional codes (for example, `en_US`).

<a id="Discussion"></a>

## Discussion

The languages represented by the strings in the returned array are in user-preference order.

# availableLanguages (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the languages that the text checker’s class can perform spell-checking for.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSArray<NSString *> * availableLanguages;
```

<a id="return-value"></a>

## Return Value

An array of strings representing ISO 639-1 language codes or combined ISO 639-1 language codes and ISO 3166-1 regional codes (for example, `en_US`).

<a id="Discussion"></a>

## Discussion

The languages represented by the strings in the returned array are in user-preference order.
