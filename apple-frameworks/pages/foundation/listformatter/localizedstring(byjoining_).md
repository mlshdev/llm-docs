> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatter/localizedstring(byjoining:)](https://developer.apple.com/documentation/foundation/listformatter/localizedstring(byjoining:))

# localizedString(byJoining:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constructs a formatted string from an array of strings that uses the list format specific to the current locale.

## Declaration

```swift
class func localizedString(byJoining strings: [String]) -> String
```

## Parameters

- `strings`: An array of strings to join together in a list.

<a id="return-value"></a>

## Return Value

A formatted string that joins together a list of strings using a locale-specific list format.

<a id="Discussion"></a>

## Discussion

> **Tip**

>  Use this method to join strings that are ready to be displayed in a bullet-point list. Sentences, phrases with punctuations, and appositions may not work well when joined together.

## See Also

### Converting Arrays to Formatted Lists

- [string(from:)](string%28from_%29.md): Creates a formatted string for an array of items.
- [string(for:)](string%28for_%29.md): Creates a formatted string for an array of items.

# localizedStringByJoiningStrings: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constructs a formatted string from an array of strings that uses the list format specific to the current locale.

## Declaration

```objectivec
+ (NSString *) localizedStringByJoiningStrings:(NSArray<NSString *> *) strings;
```

## Parameters

- `strings`: An array of strings to join together in a list.

<a id="return-value"></a>

## Return Value

A formatted string that joins together a list of strings using a locale-specific list format.

<a id="Discussion"></a>

## Discussion

> **Tip**

>  Use this method to join strings that are ready to be displayed in a bullet-point list. Sentences, phrases with punctuations, and appositions may not work well when joined together.

## See Also

### Converting Arrays to Formatted Lists

- [stringFromItems:](string%28from_%29.md): Creates a formatted string for an array of items.
- [stringForObjectValue:](string%28for_%29.md): Creates a formatted string for an array of items.
