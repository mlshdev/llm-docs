> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/identifier](https://developer.apple.com/documentation/foundation/nscalendar/identifier)

# NSCalendar.Identifier (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The supported calendar types.

## Declaration

```swift
struct Identifier
```

<a id="Discussion"></a>

## Discussion

Use these identifiers to specify the kind of calendar. The Gregorian calendar is the calendar typically used in Europe, the Western Hemisphere, and elsewhere.

## Topics

### Initializers

- [init(\_:)](identifier/init%28__%29.md)
- [init(rawValue:)](identifier/init%28rawvalue_%29.md)

### Calendar identifiers

- [gregorian](identifier/gregorian.md): Identifier for the Gregorian calendar.
- [ISO8601](identifier/iso8601.md): Identifier for the ISO8601 calendar.
- [bangla](identifier/bangla.md)
- [buddhist](identifier/buddhist.md): Identifier for the Buddhist calendar.
- [chinese](identifier/chinese.md): Identifier for the Chinese calendar.
- [coptic](identifier/coptic.md): Identifier for the Coptic calendar.
- [dangi](identifier/dangi.md)
- [ethiopicAmeteAlem](identifier/ethiopicametealem.md): Identifier for the Ethiopic (Amete Alem) calendar.
- [ethiopicAmeteMihret](identifier/ethiopicametemihret.md): Identifier for the Ethiopic (Amete Mihret) calendar.
- [gujarati](identifier/gujarati.md)
- [hebrew](identifier/hebrew.md): Identifier for the Hebrew calendar.
- [indian](identifier/indian.md): Identifier for the Indian calendar.
- [islamic](identifier/islamic.md): Identifier for the Islamic calendar.
- [islamicCivil](identifier/islamiccivil.md): Identifier for the Islamic civil calendar.
- [islamicTabular](identifier/islamictabular.md): Identifier for a tabular Islamic calendar.
- [islamicUmmAlQura](identifier/islamicummalqura.md): Identifier for the Islamic Umm al-Qura calendar.
- [japanese](identifier/japanese.md): Identifier for the Japanese calendar.
- [kannada](identifier/kannada.md)
- [malayalam](identifier/malayalam.md)
- [marathi](identifier/marathi.md)
- [odia](identifier/odia.md)
- [persian](identifier/persian.md): Identifier for the Persian calendar.
- [republicOfChina](identifier/republicofchina.md): Identifier for the Republic of China calendar.
- [tamil](identifier/tamil.md)
- [telugu](identifier/telugu.md)
- [vietnamese](identifier/vietnamese.md)
- [vikram](identifier/vikram.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating and Initializing Calendars

- [init(identifier:)](init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [init(calendarIdentifier:)](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.

# NSCalendarIdentifier (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The supported calendar types.

## Declaration

```objectivec
typedef NSString * NSCalendarIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use these identifiers to specify the kind of calendar. The Gregorian calendar is the calendar typically used in Europe, the Western Hemisphere, and elsewhere.

## Topics

### Calendar identifiers

- [NSCalendarIdentifierGregorian](identifier/gregorian.md): Identifier for the Gregorian calendar.
- [NSCalendarIdentifierISO8601](identifier/iso8601.md): Identifier for the ISO8601 calendar.
- [NSCalendarIdentifierBangla](identifier/bangla.md)
- [NSCalendarIdentifierBuddhist](identifier/buddhist.md): Identifier for the Buddhist calendar.
- [NSCalendarIdentifierChinese](identifier/chinese.md): Identifier for the Chinese calendar.
- [NSCalendarIdentifierCoptic](identifier/coptic.md): Identifier for the Coptic calendar.
- [NSCalendarIdentifierDangi](identifier/dangi.md)
- [NSCalendarIdentifierEthiopicAmeteAlem](identifier/ethiopicametealem.md): Identifier for the Ethiopic (Amete Alem) calendar.
- [NSCalendarIdentifierEthiopicAmeteMihret](identifier/ethiopicametemihret.md): Identifier for the Ethiopic (Amete Mihret) calendar.
- [NSCalendarIdentifierGujarati](identifier/gujarati.md)
- [NSCalendarIdentifierHebrew](identifier/hebrew.md): Identifier for the Hebrew calendar.
- [NSCalendarIdentifierIndian](identifier/indian.md): Identifier for the Indian calendar.
- [NSCalendarIdentifierIslamic](identifier/islamic.md): Identifier for the Islamic calendar.
- [NSCalendarIdentifierIslamicCivil](identifier/islamiccivil.md): Identifier for the Islamic civil calendar.
- [NSCalendarIdentifierIslamicTabular](identifier/islamictabular.md): Identifier for a tabular Islamic calendar.
- [NSCalendarIdentifierIslamicUmmAlQura](identifier/islamicummalqura.md): Identifier for the Islamic Umm al-Qura calendar.
- [NSCalendarIdentifierJapanese](identifier/japanese.md): Identifier for the Japanese calendar.
- [NSCalendarIdentifierKannada](identifier/kannada.md)
- [NSCalendarIdentifierMalayalam](identifier/malayalam.md)
- [NSCalendarIdentifierMarathi](identifier/marathi.md)
- [NSCalendarIdentifierOdia](identifier/odia.md)
- [NSCalendarIdentifierPersian](identifier/persian.md): Identifier for the Persian calendar.
- [NSCalendarIdentifierRepublicOfChina](identifier/republicofchina.md): Identifier for the Republic of China calendar.
- [NSCalendarIdentifierTamil](identifier/tamil.md)
- [NSCalendarIdentifierTelugu](identifier/telugu.md)
- [NSCalendarIdentifierVietnamese](identifier/vietnamese.md)
- [NSCalendarIdentifierVikram](identifier/vikram.md)

## See Also

### Creating and Initializing Calendars

- [calendarWithIdentifier:](init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [initWithCalendarIdentifier:](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
