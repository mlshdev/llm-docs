> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsgetattributesresult/init(attributes:)](https://developer.apple.com/documentation/fskit/fsgetattributesresult/init(attributes:))

# init(attributes:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an attribute-getting operation.

## Declaration

```swift
init?(attributes: FSItem.Attributes)
```

## Parameters

- `attributes`: The requested [FSItem.Attributes](../fsitem/attributes.md) for the item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a get-attributes result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# initWithAttributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an attribute-getting operation.

## Declaration

```objectivec
- (instancetype) initWithAttributes:(FSItemAttributes *) attributes;
```

## Parameters

- `attributes`: The requested [FSItemAttributes](../fsitem/attributes.md) for the item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a get-attributes result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
