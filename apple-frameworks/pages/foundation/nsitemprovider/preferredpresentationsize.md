> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/preferredpresentationsize](https://developer.apple.com/documentation/foundation/nsitemprovider/preferredpresentationsize)

# preferredPresentationSize (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The ideal presentation size of the item.

## Declaration

```swift
var preferredPresentationSize: CGSize { get set }
```

```swift
var preferredPresentationSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

When displaying the item, the value in this property represents the ideal size at which to display the item. The size in this property may differ from the size in the [sourceFrame](sourceframe.md) rectangle. For images, video, and other content with a natural size, the item automatically derives the size from that content. If the value in this property is [NSZeroSize](../nszerosize.md), use the size specified in the [sourceFrame](sourceframe.md) rectangle.

## See Also

### Configuring the provider

- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [NSItemProvider.PreferredPresentationStyle](preferredpresentationstyle-swift.enum.md): The presentation styles that determine how a view shows an item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.

# preferredPresentationSize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The ideal presentation size of the item.

## Declaration

```objectivec
@property (nonatomic) CGSize preferredPresentationSize;
```

```objectivec
@property (readonly) NSSize preferredPresentationSize;
```

<a id="Discussion"></a>

## Discussion

When displaying the item, the value in this property represents the ideal size at which to display the item. The size in this property may differ from the size in the [sourceFrame](sourceframe.md) rectangle. For images, video, and other content with a natural size, the item automatically derives the size from that content. If the value in this property is [NSZeroSize](../nszerosize.md), use the size specified in the [sourceFrame](sourceframe.md) rectangle.

## See Also

### Configuring the provider

- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.
