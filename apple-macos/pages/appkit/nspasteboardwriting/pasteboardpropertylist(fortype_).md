> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardwriting/pasteboardpropertylist(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboardwriting/pasteboardpropertylist(fortype:))

# pasteboardPropertyList(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a property list object to represent the receiver on a pasteboard as an object of a specified type.

## Declaration

```swift
func pasteboardPropertyList(forType type: NSPasteboard.PasteboardType) -> Any?
```

## Parameters

- `type`: One of the types the receiver supports for writing (one of the UTIs returned by its implementation of [writableTypes(for:)](writabletypes%28for_%29.md)).

<a id="return-value"></a>

## Return Value

A property list object to represent the receiver on a pasteboard as an object of type `type`.

<a id="Discussion"></a>

## Discussion

The returned value will commonly be the `NSData` object for the specified data type. However, if this method returns either a string, or any other property-list type, the pasteboard will automatically convert these items to the correct data format required for the pasteboard.

# pasteboardPropertyListForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a property list object to represent the receiver on a pasteboard as an object of a specified type.

## Declaration

```objectivec
- (id) pasteboardPropertyListForType:(NSPasteboardType) type;
```

## Parameters

- `type`: One of the types the receiver supports for writing (one of the UTIs returned by its implementation of [writableTypesForPasteboard:](writabletypes%28for_%29.md)).

<a id="return-value"></a>

## Return Value

A property list object to represent the receiver on a pasteboard as an object of type `type`.

<a id="Discussion"></a>

## Discussion

The returned value will commonly be the `NSData` object for the specified data type. However, if this method returns either a string, or any other property-list type, the pasteboard will automatically convert these items to the correct data format required for the pasteboard.
