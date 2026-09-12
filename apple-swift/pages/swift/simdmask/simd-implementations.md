> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simdmask/simd-implementations](https://developer.apple.com/documentation/swift/simdmask/simd-implementations)

# SIMD Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Operators

- [.!=(\_:\_:)]('.!=%28____%29-4o6ac.md): Returns a vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)]('.!=%28____%29-5cnom.md): A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)]('.!=%28____%29-94n12.md): Returns a vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)]('.==%28____%29-4l749.md): Returns a vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)]('.==%28____%29-6aq3z.md): Returns a vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)]('.==%28____%29-8vdyh.md): A vector mask with the result of a pointwise equality comparison.
- [==(\_:\_:)](==%28____%29.md): Returns a Boolean value indicating whether two vectors are equal.

### Initializers

- [init(\_:)](init%28__%29.md): Creates a vector from the given sequence.
- [init(arrayLiteral:)](init%28arrayliteral_%29.md): Creates a vector from the specified elements.
- [init(from:)](init%28from_%29.md): Creates a new vector by decoding scalars from the given decoder.
- [init(repeating:)](init%28repeating_%29-5pwub.md): A vector with the specified scalar in all lanes.

### Instance Properties

- [description](description.md): A textual description of the vector.
- [indices](indices.md): The valid indices for subscripting the vector.

### Instance Methods

- [encode(to:)](encode%28to_%29.md): Encodes the scalars of this vector into the given encoder in an unkeyed container.
- [hash(into:)](hash%28into_%29.md): Hashes the elements of the vector using the given hasher.
- [replace(with:where:)](replace%28with_where_%29-6wonx.md): Replaces elements of this vector with `other` in the lanes where `mask` is `true`.
- [replace(with:where:)](replace%28with_where_%29-7bhx.md): Replaces elements of this vector with elements of `other` in the lanes where `mask` is `true`.
- [replacing(with:where:)](replacing%28with_where_%29-2gka4.md): Returns a copy of this vector, with elements replaced by elements of `other` in the lanes where `mask` is `true`.
- [replacing(with:where:)](replacing%28with_where_%29-3lyjl.md): Returns a copy of this vector, with elements `other` in the lanes where `mask` is `true`.
