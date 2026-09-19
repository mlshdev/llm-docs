> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsitemprovider/suggestedname

# suggestedName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The filename to use when writing the provided data to a file on disk.

## Declaration

```swift
var suggestedName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property is recommended when providing [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) or text data from an item provider.

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [NSItemProvider.PreferredPresentationStyle](preferredpresentationstyle-swift.enum.md): The presentation styles that determine how a view shows an item provider’s data.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.

# suggestedName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The filename to use when writing the provided data to a file on disk.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * suggestedName;
```

<a id="Discussion"></a>

## Discussion

Setting this property is recommended when providing [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) or text data from an item provider.

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.
