> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitembadge/itemcount](https://developer.apple.com/documentation/appkit/nsmenuitembadge/itemcount)

# itemCount (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The number of items the badge displays.

## Declaration

```swift
var itemCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

If you create a badge with a custom string, this value is `0`.

## See Also

### Accessing menu item badge attributes

- [stringValue](stringvalue-fc9f.md): The string representation of the badge when it displays.
- [type](type.md): The type of items the badge displays.

# itemCount (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The number of items the badge displays.

## Declaration

```objectivec
@property (readonly) NSInteger itemCount;
```

<a id="Discussion"></a>

## Discussion

If you create a badge with a custom string, this value is `0`.

## See Also

### Accessing menu item badge attributes

- [stringValue](stringvalue-fc9f.md): The string representation of the badge when it displays.
- [type](type.md): The type of items the badge displays.
