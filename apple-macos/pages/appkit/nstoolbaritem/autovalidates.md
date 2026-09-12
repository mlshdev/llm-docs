> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/autovalidates](https://developer.apple.com/documentation/appkit/nstoolbaritem/autovalidates)

# autovalidates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar automatically validates the item.

## Declaration

```swift
var autovalidates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar automatically validates the item; otherwise, it doesn’t validate the item automatically. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Validating the item

- [validate()](validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.

# autovalidates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar automatically validates the item.

## Declaration

```objectivec
@property BOOL autovalidates;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar automatically validates the item; otherwise, it doesn’t validate the item automatically. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Validating the item

- [validate](validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.
