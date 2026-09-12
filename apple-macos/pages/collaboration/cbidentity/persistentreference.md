> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentity/persistentreference](https://developer.apple.com/documentation/collaboration/cbidentity/persistentreference)

# persistentReference (Swift)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a persistent reference to store a reference to an identity.

## Declaration

```swift
var persistentReference: Data? { get }
```

<a id="return-value"></a>

## Return Value

A data object that uniquely references an identity.

<a id="Discussion"></a>

## Discussion

A persistent reference data object is an object generated from an identity. Persistent data objects can be written to and read from a file, making them extremely useful for storing identities in an ACL.

# persistentReference (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns a persistent reference to store a reference to an identity.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * persistentReference;
```

<a id="return-value"></a>

## Return Value

A data object that uniquely references an identity.

<a id="Discussion"></a>

## Discussion

A persistent reference data object is an object generated from an identity. Persistent data objects can be written to and read from a file, making them extremely useful for storing identities in an ACL.

## See Also

### Storing Identities

- [CSIdentity](csidentity.md): Returns an opaque object for use with the Core Services Identity API.
