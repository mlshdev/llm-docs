> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/caninsert](https://developer.apple.com/documentation/appkit/nsarraycontroller/caninsert)

# canInsert (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.

## Declaration

```swift
var canInsert: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an object can be inserted into the receiver’s content collection, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The result of this method can be used by a binding to enable user interface items.

This property is observable using key-value observing.

## See Also

### Inserting

- [insert(\_:)](insert%28__%29.md): Creates a new object and inserts it into the receiver’s content array.

# canInsert (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns a Boolean value that indicates whether an object can be inserted into the receiver’s content collection.

## Declaration

```objectivec
@property (readonly) BOOL canInsert;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an object can be inserted into the receiver’s content collection, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The result of this method can be used by a binding to enable user interface items.

This property is observable using key-value observing.

## See Also

### Inserting

- [insert:](insert%28__%29.md): Creates a new object and inserts it into the receiver’s content array.
