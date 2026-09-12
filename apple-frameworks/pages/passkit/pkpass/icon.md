> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/icon](https://developer.apple.com/documentation/passkit/pkpass/icon)

# icon (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The pass icon.

## Declaration

```swift
@NSCopying var icon: UIImage { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to display a pass’s icon as part of a UI element that represents the pass, such as a cell in a table view.

## See Also

### Getting the display attributes

- [localizedValue(forFieldKey:)](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)

# icon (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The pass icon.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UIImage * icon;
```

<a id="Discussion"></a>

## Discussion

You can use this property to display a pass’s icon as part of a UI element that represents the pass, such as a cell in a table view.

## See Also

### Getting the display attributes

- [localizedValueForFieldKey:](localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)
