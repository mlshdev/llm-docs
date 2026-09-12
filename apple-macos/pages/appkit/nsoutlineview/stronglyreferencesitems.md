> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/stronglyreferencesitems](https://developer.apple.com/documentation/appkit/nsoutlineview/stronglyreferencesitems)

# stronglyReferencesItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.

## Declaration

```swift
var stronglyReferencesItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the outline view retains and releases the objects returned to it from [dataSource](datasource.md). When the value is [false](https://developer.apple.com/documentation/swift/false), the outline view treats the objects as opaque items and assumes that the client has a retain on them. The default value is [true](https://developer.apple.com/documentation/swift/true) for applications linked on macOS 10.12 and later, and [false](https://developer.apple.com/documentation/swift/false) for applications linked on earlier versions of macOS. If you require the legacy behavior and your app links in macOS 10.12 or later, the value of this property must be explicitly set to [false](https://developer.apple.com/documentation/swift/false) in code, because it is not encoded in the nib. In general, this is required if the items themselves create a retain cycle.

## See Also

### Accessing the Data Source

- [dataSource](datasource.md): The object that provides the data displayed by the receiver.

# stronglyReferencesItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A Boolean value that indicates whether the outline view retains and releases the objects returned from its data source.

## Declaration

```objectivec
@property BOOL stronglyReferencesItems;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the outline view retains and releases the objects returned to it from [dataSource](datasource.md). When the value is [false](https://developer.apple.com/documentation/swift/false), the outline view treats the objects as opaque items and assumes that the client has a retain on them. The default value is [true](https://developer.apple.com/documentation/swift/true) for applications linked on macOS 10.12 and later, and [false](https://developer.apple.com/documentation/swift/false) for applications linked on earlier versions of macOS. If you require the legacy behavior and your app links in macOS 10.12 or later, the value of this property must be explicitly set to [false](https://developer.apple.com/documentation/swift/false) in code, because it is not encoded in the nib. In general, this is required if the items themselves create a retain cycle.

## See Also

### Accessing the Data Source

- [dataSource](datasource.md): The object that provides the data displayed by the receiver.
