> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/relevantdate](https://developer.apple.com/documentation/passkit/pkpass/relevantdate)

# relevantDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

The date when the pass is most likely to be useful or necessary.

> Use relevantDates

## Declaration

```swift
var relevantDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property for sorting UI elements that represent passes, such as cells in a table view.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [localizedValue(forFieldKey:)](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [PKPassRelevantDate](../pkpassrelevantdate.md)

# relevantDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 18.0) · iPadOS 6.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 2.0+ (deprecated in 11.0)

The date when the pass is most likely to be useful or necessary.

> Use relevantDates

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * relevantDate;
```

<a id="Discussion"></a>

## Discussion

You can use this property for sorting UI elements that represent passes, such as cells in a table view.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [localizedValueForFieldKey:](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [PKPassRelevantDate](../pkpassrelevantdate.md)
