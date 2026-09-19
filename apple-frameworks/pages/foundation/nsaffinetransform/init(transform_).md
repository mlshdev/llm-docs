> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsaffinetransform/init(transform:)

# init(transform:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes the receiver’s matrix using another transform object.

## Declaration

```swift
convenience init(transform: NSAffineTransform)
```

```swift
convenience init(transform: AffineTransform)
```

## Parameters

- `transform`: The transform object whose matrix values should be copied to this object.

<a id="return-value"></a>

## Return Value

A new transform object initialized with the matrix values of `aTransform`.

## See Also

### Creating an Affine Transform

- [init()](init%28%29.md): Initializes an affine transform matrix to the identity matrix.

# initWithTransform: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes the receiver’s matrix using another transform object.

## Declaration

```objectivec
- (instancetype) initWithTransform:(NSAffineTransform *) transform;
```

## Parameters

- `transform`: The transform object whose matrix values should be copied to this object.

<a id="return-value"></a>

## Return Value

A new transform object initialized with the matrix values of `aTransform`.

## See Also

### Related Documentation

- [transform](transform.md): Creates a new affine transform initialized to the identity matrix.

### Creating an Affine Transform

- [transform](transform.md): Creates a new affine transform initialized to the identity matrix.
- [init](init%28%29.md): Initializes an affine transform matrix to the identity matrix.
