> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/teamdata](https://developer.apple.com/documentation/foundation/nsitemprovider/teamdata)

# teamData (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The collection of data an app uses to hold private team information during drag and drop.

## Declaration

```swift
var teamData: Data? { get set }
```

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [NSItemProvider.PreferredPresentationStyle](preferredpresentationstyle-swift.enum.md): The presentation styles that determine how a view shows an item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.

# teamData (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The collection of data an app uses to hold private team information during drag and drop.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * teamData;
```

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
