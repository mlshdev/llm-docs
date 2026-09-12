> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/organizationname](https://developer.apple.com/documentation/passkit/pkpass/organizationname)

# organizationName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The name of the organization that creates the pass.

## Declaration

```swift
var organizationName: String { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to display information about the organization that creates the pass as part of a user interface element that represents the pass, such as a cell in a table view.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [localizedValue(forFieldKey:)](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)

# organizationName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The name of the organization that creates the pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * organizationName;
```

<a id="Discussion"></a>

## Discussion

You can use this property to display information about the organization that creates the pass as part of a user interface element that represents the pass, such as a cell in a table view.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [localizedValueForFieldKey:](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)
