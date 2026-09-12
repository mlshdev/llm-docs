> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/providerinplacefiletypeidentifiers](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/providerinplacefiletypeidentifiers)

# providerInPlaceFileTypeIdentifiers (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An array of type identifiers that correspond to in-place file types your delegate object can provide.

## Declaration

```swift
var providerInPlaceFileTypeIdentifiers: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify the in-place file types that your app or Core Spotlight delegate app extension can provide to satisfy a drag-and-drop request involving a searchable item. When a drag-and-drop action occurs, the app receiving the data selects the type it wants from the identifiers you provide. For types in this property, the system calls the [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](../cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md) method of your delegate object, which you use to deliver the location of the existing file instead of a copy of that file.

Arrange the types in this property in order from highest to lowest fidelity.

## See Also

### Providing item representations

- [providerDataTypeIdentifiers](providerdatatypeidentifiers.md): An array of type identifiers that correspond to data types your delegate object can provide.
- [providerFileTypeIdentifiers](providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.

# providerInPlaceFileTypeIdentifiers (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An array of type identifiers that correspond to in-place file types your delegate object can provide.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * providerInPlaceFileTypeIdentifiers;
```

<a id="discussion"></a>

## Discussion

Use this property to specify the in-place file types that your app or Core Spotlight delegate app extension can provide to satisfy a drag-and-drop request involving a searchable item. When a drag-and-drop action occurs, the app receiving the data selects the type it wants from the identifiers you provide. For types in this property, the system calls the [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](../cssearchableindexdelegate/fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md) method of your delegate object, which you use to deliver the location of the existing file instead of a copy of that file.

Arrange the types in this property in order from highest to lowest fidelity.

## See Also

### Providing item representations

- [providerDataTypeIdentifiers](providerdatatypeidentifiers.md): An array of type identifiers that correspond to data types your delegate object can provide.
- [providerFileTypeIdentifiers](providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.
