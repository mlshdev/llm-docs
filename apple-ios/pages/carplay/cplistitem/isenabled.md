> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/isenabled](https://developer.apple.com/documentation/carplay/cplistitem/isenabled)

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates if the item is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Configuration

- [handler](handler.md): An optional closure that CarPlay invokes when the user selects the list item.
- [userInfo](userinfo.md): An opaque value for the list item.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates if the item is enabled.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Configuration

- [handler](handler.md): An optional closure that CarPlay invokes when the user selects the list item.
- [userInfo](userinfo.md): An opaque value for the list item.
