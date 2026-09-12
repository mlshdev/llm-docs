> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/init(title:)](https://developer.apple.com/documentation/appkit/nsmenu/init(title:))

# init(title:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a menu having the specified title and with autoenabling of menu items turned on.

## Declaration

```swift
init(title: String)
```

## Parameters

- `title`: The title to assign to the menu.

<a id="return-value"></a>

## Return Value

The initialized `NSMenu` object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class.

## See Also

### Related Documentation

- [autoenablesItems](autoenablesitems.md): Indicates whether the menu automatically enables and disables its menu items.

### Creating an NSMenu Object

- [init(coder:)](init%28coder_%29.md)

# initWithTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a menu having the specified title and with autoenabling of menu items turned on.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title;
```

## Parameters

- `title`: The title to assign to the menu.

<a id="return-value"></a>

## Return Value

The initialized `NSMenu` object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the class.

## See Also

### Related Documentation

- [autoenablesItems](autoenablesitems.md): Indicates whether the menu automatically enables and disables its menu items.

### Creating an NSMenu Object

- [initWithCoder:](init%28coder_%29.md)
