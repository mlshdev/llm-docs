> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/providerdatatypeidentifiers](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/providerdatatypeidentifiers)

# providerDataTypeIdentifiers (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An array of type identifiers that correspond to data types your delegate object can provide.

## Declaration

```swift
var providerDataTypeIdentifiers: [String]? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify the content types that your app or Core Spotlight delegate app extension can provide to satisfy a drag-and-drop request involving a searchable item. When a drag-and-drop action occurs, the app receiving the data selects the type it wants from the identifiers you provide. To deliver the data for one of the types in this property, the system calls the [data(for:itemIdentifier:typeIdentifier:)](../cssearchableindexdelegate/data%28for_itemidentifier_typeidentifier_%29.md) method of your delegate object.

Arrange the types in this property in order from highest to lowest fidelity.

## See Also

### Providing item representations

- [providerFileTypeIdentifiers](providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.
- [providerInPlaceFileTypeIdentifiers](providerinplacefiletypeidentifiers.md): An array of type identifiers that correspond to in-place file types your delegate object can provide.

# providerDataTypeIdentifiers (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An array of type identifiers that correspond to data types your delegate object can provide.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * providerDataTypeIdentifiers;
```

<a id="discussion"></a>

## Discussion

Use this property to specify the content types that your app or Core Spotlight delegate app extension can provide to satisfy a drag-and-drop request involving a searchable item. When a drag-and-drop action occurs, the app receiving the data selects the type it wants from the identifiers you provide. To deliver the data for one of the types in this property, the system calls the [dataForSearchableIndex:itemIdentifier:typeIdentifier:error:](../cssearchableindexdelegate/data%28for_itemidentifier_typeidentifier_%29.md) method of your delegate object.

Arrange the types in this property in order from highest to lowest fidelity.

## See Also

### Providing item representations

- [providerFileTypeIdentifiers](providerfiletypeidentifiers.md): An array of type identifiers that correspond to file types your delegate object can provide.
- [providerInPlaceFileTypeIdentifiers](providerinplacefiletypeidentifiers.md): An array of type identifiers that correspond to in-place file types your delegate object can provide.
