> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer](https://developer.apple.com/documentation/swift/keyedencodingcontainer)

# KeyedEncodingContainer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A concrete container that provides a view into an encoder’s storage, making the encoded properties of an encodable type accessible by keys.

## Declaration

```swift
struct KeyedEncodingContainer<K> where K : CodingKey
```

## Topics

### Initializers

- [init(\_:)](keyedencodingcontainer/init%28__%29.md): Creates a new instance with the given container.

### Instance Properties

- [codingPath](keyedencodingcontainer/codingpath.md): The path of coding keys taken to get to this point in encoding.

### Instance Methods

- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-11ktw.md): Conforms when `K` conforms to `CodingKey`.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-1m6rk.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-3a74m.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-3xzi8.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-4qaju.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-5bc5p.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-78vtz.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-7a0m.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-7ch7a.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-85f3r.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-8hung.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-8ik7d.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-8qhuv.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-8y5p6.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-92a4.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-99z4.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-9c512.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainer/encode%28__forkey_%29-9mh8u.md): Encodes the given value for the given key.
- [encode(\_:forKey:configuration:)](keyedencodingcontainer/encode%28__forkey_configuration_%29-3i2wq.md): Conforms when `K` conforms to `CodingKey`.
- [encode(\_:forKey:configuration:)](keyedencodingcontainer/encode%28__forkey_configuration_%29-4va3q.md): Conforms when `K` conforms to `CodingKey`.
- [encodeConditional(\_:forKey:)](keyedencodingcontainer/encodeconditional%28__forkey_%29.md): Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-11yvf.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-250z5.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-2b1yb.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-2rzgp.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-3rw9e.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-45la3.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-4c8zy.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-6cflq.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-70fw4.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-70vk4.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-7c6zc.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-7cikn.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-7wqtl.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-87bds.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-9vbxv.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-9ydxr.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainer/encodeifpresent%28__forkey_%29-ikpq.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:configuration:)](keyedencodingcontainer/encodeifpresent%28__forkey_configuration_%29-7bzb4.md): Conforms when `K` conforms to `CodingKey`.
- [encodeIfPresent(\_:forKey:configuration:)](keyedencodingcontainer/encodeifpresent%28__forkey_configuration_%29-7x1yj.md): Conforms when `K` conforms to `CodingKey`.
- [encodeNil(forKey:)](keyedencodingcontainer/encodenil%28forkey_%29.md): Encodes a null value for the given key.
- [encodePredicateExpression(\_:forKey:variable:predicateConfiguration:)](keyedencodingcontainer/encodepredicateexpression%28__forkey_variable_predicateconfiguration_%29-4hhm9.md): Conforms when `K` conforms to `CodingKey`.
- [encodePredicateExpression(\_:forKey:variable:predicateConfiguration:)](keyedencodingcontainer/encodepredicateexpression%28__forkey_variable_predicateconfiguration_%29-92gv8.md): Conforms when `K` conforms to `CodingKey`.
- [encodePredicateExpressionIfPresent(\_:forKey:variable:predicateConfiguration:)](keyedencodingcontainer/encodepredicateexpressionifpresent%28__forkey_variable_predicateconfiguration_%29-858hy.md): Conforms when `K` conforms to `CodingKey`.
- [encodePredicateExpressionIfPresent(\_:forKey:variable:predicateConfiguration:)](keyedencodingcontainer/encodepredicateexpressionifpresent%28__forkey_variable_predicateconfiguration_%29-ivzi.md): Conforms when `K` conforms to `CodingKey`.
- [nestedContainer(keyedBy:forKey:)](keyedencodingcontainer/nestedcontainer%28keyedby_forkey_%29.md): Stores a keyed encoding container for the given key and returns it.
- [nestedUnkeyedContainer(forKey:)](keyedencodingcontainer/nestedunkeyedcontainer%28forkey_%29.md): Stores an unkeyed encoding container for the given key and returns it.
- [superEncoder()](keyedencodingcontainer/superencoder%28%29.md): Stores a new nested container for the default `super` key and returns a new encoder instance for encoding `super` into that container.
- [superEncoder(forKey:)](keyedencodingcontainer/superencoder%28forkey_%29.md): Stores a new nested container for the given key and returns a new encoder instance for encoding `super` into that container.

### Type Aliases

- [KeyedEncodingContainer.Key](keyedencodingcontainer/key.md)

### Default Implementations

- [KeyedEncodingContainerProtocol Implementations](keyedencodingcontainer/keyedencodingcontainerprotocol-implementations.md)

## Relationships

### Conforms To

- [KeyedEncodingContainerProtocol](keyedencodingcontainerprotocol.md)

## See Also

### Encoding Containers

- [SingleValueEncodingContainer](singlevalueencodingcontainer.md): A container that can support the storage and direct encoding of a single non-keyed value.
- [KeyedEncodingContainerProtocol](keyedencodingcontainerprotocol.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type in a keyed manner.
- [UnkeyedEncodingContainer](unkeyedencodingcontainer.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type sequentially, without keys.
