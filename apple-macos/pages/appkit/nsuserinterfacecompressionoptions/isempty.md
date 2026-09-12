> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompressionoptions/isempty](https://developer.apple.com/documentation/appkit/nsuserinterfacecompressionoptions/isempty)

# isEmpty (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that denotes whether the option is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the option is equivalent to the empty set, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [contains(\_:)](contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.
- [intersects(\_:)](intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.

# empty (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that denotes whether the option is empty.

## Declaration

```objectivec
@property (readonly, getter=isEmpty) BOOL empty;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the option is equivalent to the empty set, or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Comparing compression options

- [containsOptions:](contains%28__%29.md): Determines whether the supplied compression options are all present in the current instance.
- [intersectsOptions:](intersects%28__%29.md): Determines whether the supplied compression options intersect with the current instance’s options.
