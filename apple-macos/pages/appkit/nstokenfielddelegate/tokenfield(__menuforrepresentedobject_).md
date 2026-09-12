> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:menuforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:menuforrepresentedobject:))

# tokenField(\_:menuForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a menu for the specified represented object.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, menuForRepresentedObject representedObject: Any) -> NSMenu?
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The menu associated with the  represented object.

<a id="Discussion"></a>

## Discussion

The returned menu should be autoreleased. By default tokens in a token field do not return menus.

## See Also

### Managing Menus for Represented Objects

- [tokenField(\_:hasMenuForRepresentedObject:)](tokenfield%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the given represented object provides a menu.

# tokenField:menuForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to provide a menu for the specified represented object.

## Declaration

```objectivec
- (NSMenu *) tokenField:(NSTokenField *) tokenField menuForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

The menu associated with the  represented object.

<a id="Discussion"></a>

## Discussion

The returned menu should be autoreleased. By default tokens in a token field do not return menus.

## See Also

### Managing Menus for Represented Objects

- [tokenField:hasMenuForRepresentedObject:](tokenfield%28__hasmenuforrepresentedobject_%29.md): Allows the delegate to specify whether the given represented object provides a menu.
