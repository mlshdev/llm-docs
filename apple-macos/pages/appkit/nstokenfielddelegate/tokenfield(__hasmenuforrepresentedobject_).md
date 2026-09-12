> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:hasmenuforrepresentedobject:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:hasmenuforrepresentedobject:))

# tokenField(\_:hasMenuForRepresentedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify whether the given represented object provides a menu.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, hasMenuForRepresentedObject representedObject: Any) -> Bool
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the  represented object has a menu, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default tokens in a token field have no menus.

## See Also

### Managing Menus for Represented Objects

- [tokenField(\_:menuForRepresentedObject:)](tokenfield%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.

# tokenField:hasMenuForRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify whether the given represented object provides a menu.

## Declaration

```objectivec
- (BOOL) tokenField:(NSTokenField *) tokenField hasMenuForRepresentedObject:(id) representedObject;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `representedObject`: A represented object of the token field.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the  represented object has a menu, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

By default tokens in a token field have no menus.

## See Also

### Managing Menus for Represented Objects

- [tokenField:menuForRepresentedObject:](tokenfield%28__menuforrepresentedobject_%29.md): Allows the delegate to provide a menu for the specified represented object.
