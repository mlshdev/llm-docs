> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fslistxattrsresult/init(xattrnames:)](https://developer.apple.com/documentation/fskit/fslistxattrsresult/init(xattrnames:))

# init(xattrNames:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result instance with all required properties populated.

## Declaration

```swift
init?(xattrNames: [FSFileName])
```

## Parameters

- `xattrNames`: An array of [FSFileName](../fsfilename.md) instances representing the names of all extended attributes currently set on the item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a list-extended-attributes result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.

# initWithXattrNames: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result instance with all required properties populated.

## Declaration

```objectivec
- (instancetype) initWithXattrNames:(NSArray<FSFileName *> *) xattrNames;
```

## Parameters

- `xattrNames`: An array of [FSFileName](../fsfilename.md) instances representing the names of all extended attributes currently set on the item.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating a list-extended-attributes result

- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
