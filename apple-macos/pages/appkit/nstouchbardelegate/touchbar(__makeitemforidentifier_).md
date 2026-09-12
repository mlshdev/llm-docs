> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbardelegate/touchbar(_:makeitemforidentifier:)](https://developer.apple.com/documentation/appkit/nstouchbardelegate/touchbar(_:makeitemforidentifier:))

# touchBar(\_:makeItemForIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Asks the delegate object for the bar item for the specified bar and item identifier.

## Declaration

```swift
@MainActor optional func touchBar(_ touchBar: NSTouchBar, makeItemForIdentifier identifier: NSTouchBarItem.Identifier) -> NSTouchBarItem?
```

## Parameters

- `touchBar`: The bar that’s requesting the bar item.
- `identifier`: The item identifier associated with the item being requested.

<a id="return-value"></a>

## Return Value

A fully initialized bar item for the specified bar and identifier.

<a id="Discussion"></a>

## Discussion

When the system needs to populate a bar’s items array, the system calls this delegate method to retrieve an item if that item can’t be found in the bar’s private array or in the bar’s [templateItems](../nstouchbar/templateitems.md) property.

# touchBar:makeItemForIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Asks the delegate object for the bar item for the specified bar and item identifier.

## Declaration

```objectivec
- (NSTouchBarItem *) touchBar:(NSTouchBar *) touchBar makeItemForIdentifier:(NSTouchBarItemIdentifier) identifier;
```

## Parameters

- `touchBar`: The bar that’s requesting the bar item.
- `identifier`: The item identifier associated with the item being requested.

<a id="return-value"></a>

## Return Value

A fully initialized bar item for the specified bar and identifier.

<a id="Discussion"></a>

## Discussion

When the system needs to populate a bar’s items array, the system calls this delegate method to retrieve an item if that item can’t be found in the bar’s private array or in the bar’s [templateItems](../nstouchbar/templateitems.md) property.
