> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/init(title:action:keyequivalent:)](https://developer.apple.com/documentation/appkit/nsmenuitem/init(title:action:keyequivalent:))

# init(title:action:keyEquivalent:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an initialized instance of `NSMenuItem`.

## Declaration

```swift
init(title string: String, action selector: Selector?, keyEquivalent charCode: String)
```

## Parameters

- `string`: The title of the menu item. This value must not be `nil` (if there is no title, specify an empty `NSString`).
- `selector`: The action selector to be associated with the menu item. This value must be a valid selector or `NULL`.
- `charCode`: A string representing a keyboard key to be used as the key equivalent. This value must not be `nil` (if there is no key equivalent, specify an empty `NSString`).

<a id="return-value"></a>

## Return Value

An instance of `NSMenuItem`.

<a id="Discussion"></a>

## Discussion

For instances of the `NSMenuItem` class, the default initial state is `NSOffState`, the default on-state image is a check mark, and the default mixed-state image is a dash.

## See Also

### Related Documentation

- [NSMenuItem](../nsmenuitem.md): A command item in an app menu.

### Creating a menu item

- [init(coder:)](init%28coder_%29.md)

# initWithTitle:action:keyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an initialized instance of `NSMenuItem`.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) string action:(SEL) selector keyEquivalent:(NSString *) charCode;
```

## Parameters

- `string`: The title of the menu item. This value must not be `nil` (if there is no title, specify an empty `NSString`).
- `selector`: The action selector to be associated with the menu item. This value must be a valid selector or `NULL`.
- `charCode`: A string representing a keyboard key to be used as the key equivalent. This value must not be `nil` (if there is no key equivalent, specify an empty `NSString`).

<a id="return-value"></a>

## Return Value

An instance of `NSMenuItem`.

<a id="Discussion"></a>

## Discussion

For instances of the `NSMenuItem` class, the default initial state is `NSOffState`, the default on-state image is a check mark, and the default mixed-state image is a dash.

## See Also

### Related Documentation

- [NSMenuItem](../nsmenuitem.md): A command item in an app menu.

### Creating a menu item

- [initWithCoder:](init%28coder_%29.md)
