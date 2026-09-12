> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstermofaddress/localizedforlanguageidentifier:withpronouns:](https://developer.apple.com/documentation/foundation/nstermofaddress/localizedforlanguageidentifier:withpronouns:)

# localizedForLanguageIdentifier:withPronouns:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A term of address restricted to a given language

## Declaration

```objectivec
+ (instancetype) localizedForLanguageIdentifier:(NSString *) language withPronouns:(NSArray<NSMorphologyPronoun *> *) pronouns;
```

## Parameters

- `language`: ISO language code identifier for the language
- `pronouns`: A list of pronouns in the target language that can be used to refer to the person.
