> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/item(foridentifier:)](https://developer.apple.com/documentation/appkit/nstouchbar/item(foridentifier:))

# item(forIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Returns the Touch Bar item that corresponds to a given identifier.

## Declaration

```swift
func item(forIdentifier identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem?
```

<a id="return-value"></a>

## Return Value

A Touch Bar item if one exists for the given identifier; otherwise, returns `nil`.

<a id="Discussion"></a>

## Discussion

The system returns items (instances of the [NSTouchBarItem](../nstouchbaritem.md) class) as it finds them, according to the following search order, listed here from first-searched to last-searched:

1. Items in the bar’s private array, which are reflected in the value of the [itemIdentifiers](itemidentifiers.md) array.
2. Items in the [templateItems](templateitems.md) array.
3. Items returned from the bar delegate’s [touchBar(\_:makeItemForIdentifier:)](../nstouchbardelegate/touchbar%28__makeitemforidentifier_%29.md) method.

Your app never needs to instantiate spacing or proxy items because these are created by the system directly, according to their identifiers, as shown in the table below.

| Constant | Resulting item |
| --- | --- |
| [fixedSpaceSmall](../nstouchbaritem/identifier-swift.struct/fixedspacesmall.md) | small space |
| [fixedSpaceLarge](../nstouchbaritem/identifier-swift.struct/fixedspacelarge.md) | large space |
| [flexibleSpace](../nstouchbaritem/identifier-swift.struct/flexiblespace.md) | flexible space |
| [otherItemsProxy](../nstouchbaritem/identifier-swift.struct/otheritemsproxy.md) | proxy placeholder |

For more on the proxy placeholder, see [Composition and nesting](../nstouchbar.md#Composition-and-nesting).

## See Also

### Observing bar status

- [isVisible](isvisible.md): A Boolean value that Indicates whether the Touch Bar is eligible for display.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.

# itemForIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Returns the Touch Bar item that corresponds to a given identifier.

## Declaration

```objectivec
- (NSTouchBarItem *) itemForIdentifier:(NSTouchBarItemIdentifier) identifier;
```

<a id="return-value"></a>

## Return Value

A Touch Bar item if one exists for the given identifier; otherwise, returns `nil`.

<a id="Discussion"></a>

## Discussion

The system returns items (instances of the [NSTouchBarItem](../nstouchbaritem.md) class) as it finds them, according to the following search order, listed here from first-searched to last-searched:

1. Items in the bar’s private array, which are reflected in the value of the [itemIdentifiers](itemidentifiers.md) array.
2. Items in the [templateItems](templateitems.md) array.
3. Items returned from the bar delegate’s [touchBar:makeItemForIdentifier:](../nstouchbardelegate/touchbar%28__makeitemforidentifier_%29.md) method.

Your app never needs to instantiate spacing or proxy items because these are created by the system directly, according to their identifiers, as shown in the table below.

| Constant | Resulting item |
| --- | --- |
| [NSTouchBarItemIdentifierFixedSpaceSmall](../nstouchbaritem/identifier-swift.struct/fixedspacesmall.md) | small space |
| [NSTouchBarItemIdentifierFixedSpaceLarge](../nstouchbaritem/identifier-swift.struct/fixedspacelarge.md) | large space |
| [NSTouchBarItemIdentifierFlexibleSpace](../nstouchbaritem/identifier-swift.struct/flexiblespace.md) | flexible space |
| [NSTouchBarItemIdentifierOtherItemsProxy](../nstouchbaritem/identifier-swift.struct/otheritemsproxy.md) | proxy placeholder |

For more on the proxy placeholder, see [Composition and nesting](../nstouchbar.md#Composition-and-nesting).

## See Also

### Observing bar status

- [visible](isvisible.md): A Boolean value that Indicates whether the Touch Bar is eligible for display.
- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.
