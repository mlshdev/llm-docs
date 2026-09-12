> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscompleteioresult/init(itemattributes:)](https://developer.apple.com/documentation/fskit/fscompleteioresult/init(itemattributes:))

# init(itemAttributes:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an I/O-completion operation.

## Declaration

```swift
init?(itemAttributes attributes: FSItem.Attributes)
```

## Parameters

- `attributes`: The updated [FSItem.Attributes](../fsitem/attributes.md) of the file after the I/O completion operation (e.g., updated size, modification time).

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a complete-IO result

- [FSItem.Attributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

# initWithAttributes: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an I/O-completion operation.

## Declaration

```objectivec
- (instancetype) initWithAttributes:(FSItemAttributes *) attributes;
```

## Parameters

- `attributes`: The updated [FSItemAttributes](../fsitem/attributes.md) of the file after the I/O completion operation (e.g., updated size, modification time).

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a complete-IO result

- [FSItemAttributes](../fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
