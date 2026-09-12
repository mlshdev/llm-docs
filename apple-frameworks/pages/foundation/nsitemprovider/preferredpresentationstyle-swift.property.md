> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/preferredpresentationstyle-swift.property](https://developer.apple.com/documentation/foundation/nsitemprovider/preferredpresentationstyle-swift.property)

# preferredPresentationStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preferred style for presenting the item provider’s data.

## Declaration

```swift
var preferredPresentationStyle: NSItemProvider.PreferredPresentationStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default preferred presentation style is `unspecified`.

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [NSItemProvider.PreferredPresentationStyle](preferredpresentationstyle-swift.enum.md): The presentation styles that determine how a view shows an item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.

# preferredPresentationStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preferred style for presenting the item provider’s data.

## Declaration

```objectivec
@property (nonatomic) UIPreferredPresentationStyle preferredPresentationStyle;
```

<a id="Discussion"></a>

## Discussion

The default preferred presentation style is `unspecified`.

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.
