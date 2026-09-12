> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsgetxattrresult/init(xattrvalue:)](https://developer.apple.com/documentation/fskit/fsgetxattrresult/init(xattrvalue:))

# init(xattrValue:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an extended-attribute-getting operation.

## Declaration

```swift
init?(xattrValue value: Data)
```

## Parameters

- `value`: The extended attribute value for the requested attribute name.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

# initWithXattrValue: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an extended-attribute-getting operation.

## Declaration

```objectivec
- (instancetype) initWithXattrValue:(NSData *) value;
```

## Parameters

- `value`: The extended attribute value for the requested attribute name.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.
